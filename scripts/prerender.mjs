import fs from 'node:fs'
import http from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')
const API_BASE = 'https://src.perki-jogja.com/api/'
const SITE_URL = 'https://jcu.perki-jogja.com'

// Keep in sync with `meta: { prerender: true }` routes in src/router/index.js
const STATIC_ROUTES = [
	'/', '/events', '/register', '/contact-us', '/privacy-policy', '/terms-conditions',
	'/guidance', '/plataran', '/videos', '/schedule', '/committee', '/speakers',
	'/venue', '/abstracts', '/posters',
]

const MIME = {
	'.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css',
	'.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
	'.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.ico': 'image/x-icon',
	'.woff': 'font/woff', '.woff2': 'font/woff2',
}

function startServer() {
	const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'))
	const server = http.createServer((req, res) => {
		const urlPath = req.url.split('?')[0]
		const filePath = path.join(distDir, decodeURIComponent(urlPath))
		fs.stat(filePath, (err, stat) => {
			if (!err && stat.isFile()) {
				res.setHeader('Content-Type', MIME[path.extname(filePath)] || 'application/octet-stream')
				fs.createReadStream(filePath).pipe(res)
			} else {
				res.setHeader('Content-Type', 'text/html')
				res.end(indexHtml)
			}
		})
	})
	return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve(server)))
}

async function fetchPosterIds() {
	const ids = []
	let page = 1
	let lastPage = 1
	do {
		const res = await fetch(`${API_BASE}pub/posters?type=abstract&section=jcu26&category=&page=${page}`)
		const data = await res.json()
		for (const poster of data.data || []) {
			if (poster.status === 1) ids.push(poster.id)
		}
		lastPage = data.last_page || 1
		page++
	} while (page <= lastPage)
	return ids
}

function routeToFile(route) {
	if (route === '/') return path.join(distDir, 'index.html')
	return path.join(distDir, route.replace(/^\//, ''), 'index.html')
}

async function main() {
	if (!fs.existsSync(path.join(distDir, 'index.html'))) {
		console.error('dist/index.html not found — run `vite build` first.')
		process.exit(1)
	}

	console.log('Fetching poster IDs for /posters/:id prerendering...')
	const posterIds = await fetchPosterIds().catch((err) => {
		console.warn('Could not fetch poster list, skipping /posters/:id prerender:', err.message)
		return []
	})

	const routes = [...STATIC_ROUTES, ...posterIds.map((id) => `/posters/${id}`)]

	const server = await startServer()
	const { port } = server.address()
	const baseUrl = `http://127.0.0.1:${port}`

	const browser = await puppeteer.launch()
	const page = await browser.newPage()
	await page.evaluateOnNewDocument((siteUrl) => {
		window.__SITE_URL__ = siteUrl
	}, SITE_URL)

	let ok = 0
	for (const route of routes) {
		try {
			await page.goto(baseUrl + route, { waitUntil: 'networkidle0', timeout: 30000 })
			await page.waitForSelector('footer', { timeout: 10000 }).catch(() => {})
			const html = await page.content()
			const outFile = routeToFile(route)
			fs.mkdirSync(path.dirname(outFile), { recursive: true })
			fs.writeFileSync(outFile, html)
			ok++
			console.log(`prerendered ${route} -> ${path.relative(distDir, outFile)}`)
		} catch (err) {
			console.warn(`failed to prerender ${route}:`, err.message)
		}
	}

	await browser.close()
	server.close()
	console.log(`Prerendered ${ok}/${routes.length} routes.`)
}

main()

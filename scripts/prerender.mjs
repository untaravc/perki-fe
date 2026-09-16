import fs from 'node:fs'
import http from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')
const SITE_URL = 'https://jcu.perki-jogja.com'

// Keep in sync with `meta: { prerender: true }` routes in src/router/index.js.
// Dynamic per-id routes (e.g. /posters/:id) are intentionally excluded — they're
// too numerous/frequently-changing to prerender and are fine served client-side.
const STATIC_ROUTES = [
	'/', '/events', '/register', '/contact-us',
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

function routeToFile(route) {
	if (route === '/') return path.join(distDir, 'index.html')
	return path.join(distDir, route.replace(/^\//, ''), 'index.html')
}

async function main() {
	if (!fs.existsSync(path.join(distDir, 'index.html'))) {
		console.error('dist/index.html not found — run `vite build` first.')
		process.exit(1)
	}

	const routes = STATIC_ROUTES
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

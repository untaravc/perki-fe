function setTag(selector, attrs) {
	let el = document.querySelector(selector)
	if (!el) {
		el = document.createElement(selector.startsWith('link') ? 'link' : 'meta')
		Object.entries(attrs).forEach(([key, value]) => {
			if (key !== 'content' && key !== 'href') el.setAttribute(key, value)
		})
		document.head.appendChild(el)
	}
	if (attrs.content !== undefined) el.setAttribute('content', attrs.content)
	if (attrs.href !== undefined) el.setAttribute('href', attrs.href)
}

export function applyRouteMeta({ title, description, noindex } = {}, path = window.location.pathname) {
	if (title) {
		document.title = title
		setTag('meta[property="og:title"]', { property: 'og:title', content: title })
		setTag('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
	}

	if (description) {
		setTag('meta[name="description"]', { name: 'description', content: description })
		setTag('meta[property="og:description"]', { property: 'og:description', content: description })
		setTag('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
	}

	setTag('meta[name="robots"]', { name: 'robots', content: noindex ? 'noindex, follow' : 'index, follow' })

	const origin = window.__SITE_URL__ || window.location.origin
	const url = origin + path
	setTag('link[rel="canonical"]', { rel: 'canonical', href: url })
	setTag('meta[property="og:url"]', { property: 'og:url', content: url })
}

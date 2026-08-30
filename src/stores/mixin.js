import Swal from 'sweetalert2'

// Every apiGet/apiPost/authGet/authPost/authPatch/authDelete call resolves to this
// shape (never throws, never returns '' / {}), so call sites can rely on
// `data.success`, `data.result`, `data.message` and `data.errors` unconditionally.
// Hybrid bodies (e.g. the paginated `pub/posters` response) keep their extra
// top-level keys via the spread.
function normalizeResponse(body, statusCode) {
	const b = (body && typeof body === 'object') ? body : {}
	const ok = statusCode >= 200 && statusCode < 300
	return {
		...b,
		success: typeof b.success === 'boolean' ? b.success : ok,
		message: b.message ?? null,
		result: ('result' in b) ? b.result : null,
		errors: b.errors ?? null,
		error: b.error ?? (statusCode >= 400 ? statusCode : undefined),
		status_code: statusCode,
	}
}

function authHeaders(extra) {
	const token = localStorage.getItem('perki_user_token')
	const headers = { Accept: 'application/json', ...(extra || {}) }
	if (token) {
		headers.Authorization = 'Bearer ' + token
	}
	return headers
}

const mixin = {
	data() {
		return {
			base_api: '',
			base_url: '',
			page_loader_config: {
				loader: 'bars',
				canCancel: false,
				isFullPage: false,
				color: '#009ef7',
				backgroundColor: '#fff',
				opacity: 0.5,
				blur: '0px'
			},
			default_form: {},
			today_date: new Date().toJSON().slice(0, 10),
			setup_filter: 0,
			money_config: {
				decimal: ",",
				thousands: ".",
				disableNegative: true,
				precision: 0,
			},
			data_config: {
				formatted: 'll',
				onlyDate: true,
				inputSize: 'lg',
			}
		}
	},
	created: function () {
		let href = window.location.origin
		if (href === 'http://localhost:5173' || href === 'http://127.0.0.1:5173') {
			// if (import.meta.env.VITE_MODE === 'local') {
			this.base_api = 'http://localhost:8000/api/'
			this.base_url = 'http://localhost:8000'
		} else {
			this.base_api = 'https://src.perki-jogja.com/api/'
			this.base_url = 'https://src.perki-jogja.com'
		}
	},
	methods: {
		// Single entry point for every API call. Success and error both resolve to
		// the normalized envelope; a 401 (HTTP or `{ code: 401 }` body) clears the
		// token and redirects to /login.
		async apiRequest(method, uri, { params, data } = {}) {
			try {
				const res = await this.$axios({
					method,
					url: this.base_api + uri,
					params,
					data,
					headers: authHeaders(),
				})
				const norm = normalizeResponse(res.data, res.status)
				if (norm.code === 401 || norm.code === '401') {
					localStorage.removeItem('perki_user_token')
					window.location = '/login'
					norm.success = false
				}
				return norm
			} catch (e) {
				const rc = e.response ? e.response.status : 0
				if (rc === 401) {
					localStorage.removeItem('perki_user_token')
					window.location = '/login'
				}
				const norm = normalizeResponse(e.response ? e.response.data : null, rc)
				norm.success = false
				return norm
			}
		},
		apiGet(uri, params) {
			return this.apiRequest('get', uri, { params })
		},
		apiPost(uri, data = {}) {
			return this.apiRequest('post', uri, { data })
		},
		authGet(uri, params) {
			return this.apiRequest('get', uri, { params })
		},
		authPost(uri, data = {}) {
			return this.apiRequest('post', uri, { data })
		},
		authPatch(uri, data = {}) {
			return this.apiRequest('patch', uri, { data })
		},
		authDelete(uri, data = {}) {
			return this.apiRequest('delete', uri, { data })
		},
		setHeader() {
			return { headers: authHeaders() }
		},
		// dismissible: true keeps the toast on screen until the user closes it,
		// for messages they need to act on rather than just be informed of.
		toaster({ title = 'Success!', icon = 'success', dismissible = false }) {
			Swal.fire({
				toast: true,
				position: 'top',
				showConfirmButton: false,
				showCloseButton: dismissible,
				timer: dismissible ? undefined : 2000,
				timerProgressBar: false,
				icon: icon,
				title: title,
				// width: '15em'
			})
		},
		updateSetupFilter(data) {
			this.setup_filter = data
		},
		capitalize(mySentence) {
			let words = mySentence.split(" ");
			for (let i = 0; i < words.length; i++) {
				words[i] = words[i][0].toUpperCase() + words[i].substr(1);
			}

			return words.join(' ')
		},
		modalClose(name) {
			document.getElementById(name).click()
		},
		setQueryUrl(filter) {
			this.$router.replace({ path: '', query: filter })
		},
		getQueryUrl(query, filter) {
			for (let key_filter in filter) {
				filter[key_filter] = query[key_filter]
			}
			return filter;
		},
		setDefaultForm(form) {
			this.default_form = Object.assign({}, form);
		},
		defaultForm() {
			return Object.assign({}, this.default_form);
		},
		formFill(form, data) {
			let data_obj = Object.assign({}, data)
			// let data_keys = Object.keys(data_obj)

			// let form_obj = JSON.parse(JSON.stringify(form))
			let form_obj = Object.assign({}, form)
			let form_keys = Object.keys(form_obj)

			let result = [];
			for (let i = 0; i < form_keys.length; i++) {
				result[form_keys[i]] = data_obj[form_keys[i]];
			}

			return result;
		},
		pageNumbering(data, i) {
			return (data.meta.current_page - 1) * data.meta.per_page + i + 1;
		},
	}
}

export default mixin;

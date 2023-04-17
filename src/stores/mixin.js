import Swal from 'sweetalert2'

const mixin = {
    data() {
        return {
            base_api: '',
            logged_in: false,
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
        if (import.meta.env.VITE_MODE === 'local') {
            this.base_api = 'http://localhost:8000/api/'
        } else {
            this.base_api = 'https://src.perki-jogja.com/api/'
        }
    },
    methods: {
        async apiGet(uri, params) {
            let response = '';
            await this.$axios.get(this.base_api + uri, {
                params: params,
            }).then(({ data }) => {
                response = data;
            }).catch((e) => {
                let rc = e.response.status;
                if (rc === 401) {
                    window.location = '/login'
                }
            })

            return response;
        },
        async apiPost(uri, data = {}) {
            let response = '';
            await this.$axios.post(this.base_api + uri, data, {
            })
                .then(({ data }) => {
                    response = data;
                }).catch((e) => {
                    let rc = e.response.status;
                    if (rc === 401) {
                        window.location = '/login'
                        localStorage.removeItem('perki_user_token');
                    } else if (rc === 422) {
                        response = e.response.data
                    }
                    return response;
                })

            return response;
        },
        async authGet(uri, params) {
            let response = '';
            let token = localStorage.getItem('perki_user_token')
            await this.$axios.get(this.base_api + uri, {
                params: params,
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: "application/json",
                    "access-control-allow-origin": "*"
                },
            }).then(({ data }) => {
                if (data.code == 401) {
                    window.location = '/login'
                    localStorage.removeItem('perki_user_token');
                } else {
                    response = data;
                }
            }).catch((e) => {
                let rc = e.response.status;
                if (rc === 401) {
                    window.location = '/login'
                    localStorage.removeItem('perki_user_token');
                } else if (rc === 422) {
                    response.status = false;
                    response.errors = '';
                }
            })

            return response;
        },
        async authPost(uri, data) {
            let response = {};
            let token = localStorage.getItem('perki_user_token')
            await this.$axios.post(this.base_api + uri, data, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(({ data }) => {
                response = data;
            }).catch((e) => {
                let rc = e.response.status;
                if (rc === 401) {
                    window.location = '/login'
                    localStorage.removeItem('perki_user_token');
                } else if (rc === 422) {
                    response = e.response.data
                }
                return response;
            })

            return response;
        },
        async authPatch(uri, data) {
            let patchData = Object.assign({}, data)

            let response = '';
            let token = localStorage.getItem('perki_user_token')
            await this.$axios.patch(this.base_api + uri, patchData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(({ data }) => {
                response = data;
            }).catch((e) => {
                let rc = e.response.status;
                if (rc === 401) {
                    window.location = '/login'
                    localStorage.removeItem('perki_user_token');
                } else if (rc === 422) {
                    response = e.response.data
                }
            })

            return response;
        },
        async authDelete(uri, data) {
            let response = '';
            let deleteData = Object.assign({}, data)
            let token = localStorage.getItem('perki_user_token')
            console.log(data)
            await this.$axios.delete(this.base_api + uri, {
                headers: {
                    Authorization: 'Bearer ' + token
                },
                data: deleteData
            }).then(({ data }) => {
                response = data;
            }).catch((e) => {
                let rc = e.response.status;
                if (rc === 401) {
                    window.location = '/login'
                    localStorage.removeItem('perki_user_token');
                } else if (rc === 422) {
                    response.status = false;
                    response.errors = '';
                }
            })

            return response;
        },
        setHeader() {
            let ls_token = localStorage.perki_user_token
            return {
                headers: {
                    Authorization: 'Bearer ' + ls_token,
                    Accept: 'application/json'
                }
            }
        },
        toaster({ title = 'Success!', icon = 'success' }) {
            Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: false,
                icon: icon,
                title: title,
                width: '15em'
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
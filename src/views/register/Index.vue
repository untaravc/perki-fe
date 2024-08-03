<template>
    <div class="max-w-screen-lg m-auto pt-16 px-2">
        <div class="my-6" style="min-height: calc(100vh - 195px);">
            <div class="p-6 border-slate-100 bg-white rounded-xl">
                <div>
                    <img src="/storage/logo/jcu24_color.png" alt="" class="h-16 mb-2">
                </div>
                <div class="font-semibold text-xl">Register JCU 2024 in Conjunction with the 7th Jincartos</div>
                <div class="text-sm">Create your account to register event.</div>
                <div class="mt-3 grid gap-2 sm:grid-cols-2">
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Full Name<span
                                class="text-red-600">*</span></label>
                        <input type="text" id="name" placeholder="ex. Jhon Doe" autofocus v-model="form.name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                        <small class="text-xs text-blue-900 italic">
                            for certificate writing
                        </small>
                        <small class="text-xs text-red-600 italic" v-if="parseErrors('name')">
                            {{ parseErrors('name', 'val') }}
                        </small>
                    </div>
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900">ID Number (NIK)<span
                                class="text-red-600">*</span></label>
                        <input type="text" id="nik" placeholder="" autofocus v-model="form.nik"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                        <small class="text-xs text-red-600 italic" v-if="parseErrors('nik')">
                            {{ parseErrors('nik', 'val') }}
                        </small>
                        <div class="text-xs p-1 bg-yellow-50 mt-1">
                            <ul class="list-disc ml-4">
                                <li>NIK is needed to invite participants into Plataran Sehat</li>
                                <li>For Participants who are not willing to fill in the NIK column, they cannot learn
                                    and cannot get SKP</li>
                                <li>The storage an management of NIK data are fully the responsibility of the Ministry
                                    of Health</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="grid gap-2 sm:grid-cols-2 mt-3">
                    <div>
                        <label for="address" class="block mb-2 text-sm font-medium text-gray-900">City, Province
                            <span class="text-red-600">*</span></label>
                        <input type="text" id="address" placeholder="ex. Sleman, DI Yogyakarta" v-model="form.city"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                        <small class="text-xs text-red-600 italic" v-if="parseErrors('city')">
                            {{ parseErrors('city', 'val') }}
                        </small>
                    </div>
                    <div>
                        <label for="institution" class="block mb-2 text-sm font-medium text-gray-900">Institution <span
                                class="text-red-600">*</span></label>
                        <input type="text" id="institution" placeholder="ex. Universitas Gadjah Mada"
                            v-model="form.institution"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                        <small class="text-xs text-red-600 italic" v-if="parseErrors('institution')">
                            {{ parseErrors('institution', 'val') }}
                        </small>
                    </div>
                </div>
                <div class="grid gap-2 sm:grid-cols-2 mt-3">
                    <div class="mt-3">
                        <label for="job_type" class="block mb-2 text-sm font-medium text-gray-900">Member Type<span
                                class="text-red-600">*</span></label>
                        <select id="job_type" v-model="form.job_type_code"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="" selected>== Select Job ==</option>
                            <option :value="job.code" :key="job.code" v-for="job in data_raw.job_types">{{ job.name }}
                            </option>
                        </select>
                        <small class="text-xs text-red-600 italic" v-if="parseErrors('job_type_code')">
                            {{ parseErrors('job_type_code', 'val') }}
                        </small>
                    </div>
                    <div class="mt-3 flex justify-between"
                        v-if="form.job_type_code === 'MHSA' || form.job_type_code === 'COAS'">
                        <div>
                            <label for="job_type" class="block mb-2 text-sm font-medium text-gray-900">Student Card
                                Photo<span class="text-red-600">*</span></label>
                            <input type="file" accept="image/*" id="file-upload" @change="uploadFile">
                            <small class="text-xs text-red-600 italic" v-if="parseErrors('identity_photo')">
                                {{ parseErrors('identity_photo', 'val') }}
                            </small>
                        </div>
                        <div class="flex items-end">
                            <a :href="form.identity_photo" target="_blank">
                                <img :src="form.identity_photo" alt="" class="rounded max-w-[128px] max-h-[52px]">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="mt-3">
                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Phone (Whatsapp Number)<span
                            class="text-red-600">*</span></label>
                    <input type="tel" id="phone" placeholder="ex. 081234567890" v-model="form.phone"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                    <small class="text-xs text-red-600 italic" v-if="parseErrors('phone')">
                        {{ parseErrors('phone', 'val') }}
                    </small>
                </div>
                <div class="mt-3">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">E-Mail <span
                            class="text-red-600">*</span></label>
                    <input type="text" id="email" placeholder="ex. mail@example.com" v-model="form.email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                    <small class="text-xs text-red-600 italic" v-if="parseErrors('email')">
                        {{ parseErrors('email', 'val') }}
                    </small>
                    <div class="text-xs bg-yellow-50 mt-1 p-2">
                        Please use the same email as the one registered to your Plataran Sehat account. Don't have one?
                        <a target="_blank" class="font-semibold text-blue-700 hover:text-blue-600"
                            href="https://satusehat.kemkes.go.id/sdmk/register">Register at Plataran
                            Sehat.</a>
                    </div>
                </div>
                <div class="grid gap-2 sm:grid-cols-2 mt-3" v-if="!logged_in">
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Create New
                            Password<span class="text-red-600">*</span></label>
                        <div class="relative">
                            <input :type="eye_icon ? 'text' : 'password'" id="password" v-model="form.password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                            <button type="button" class="p-2 show-password absolute top-1/2 right-2 -translate-y-1/2"
                                @click="eye_icon = !eye_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" v-if="eye_icon" width="24" height="24"
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round" style="display: inline-block;">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <circle cx="12" cy="12" r="2"></circle>
                                    <path
                                        d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7">
                                    </path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" v-if="!eye_icon" width="24" height="24"
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <line x1="3" y1="3" x2="21" y2="21"></line>
                                    <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83"></path>
                                    <path
                                        d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div>
                        <label for="password-confirmation" class="block mb-2 text-sm font-medium text-gray-900">Confirm
                            Your Password <span class="text-red-600">*</span></label>
                        <input type="password" id="password-confirmation" v-model="form.password_confirmation"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                    </div>
                    <small class="text-xs text-red-600 italic" v-if="parseErrors('password')">
                        {{ parseErrors('password', 'val') }}
                    </small>
                </div>
                <div class="mt-3">
                    <button @click="registerEmail" :disabled="disabled"
                        class="text-white w-full mb-2 bg-blue-900 hover:bg-blue-800 font-medium rounded-full text-base px-8 py-2.5 text-center">
                        <BtnLoader v-if="disabled"></BtnLoader>
                        <span v-if="!disabled">Register</span>
                    </button>
                    <!-- <button v-if="!logged_in"
                        class="inline-block w-full text-base text-neutral-700 px-8 py-2.5 text-center rounded-full border hover:bg-neutral-100">
                        <img src="/storage/img/google-logo.png" class="inline-block aspect-square w-5 xl:w-5" alt="">
                        <span> Register with Google</span>
                    </button> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            disabled: false,
            eye_icon: false,
            referral_code: false,
            data_raw: {
                job_types: []
            },
            logged_in: false,
            data_valid: false,
            form: {
                id: '',
                name: '',
                phone: '',
                email: '',
                institution: '',
                city: '',
                job_type_code: '',
                password: '',
                password_confirmation: '',
                identity_photo: '',
                nik: '',
                ref: 2024,
            },
            form_errors: []
        }
    },
    methods: {
        loadJobType() {
            this.apiGet('pub/get-job-types')
                .then((data) => {
                    this.data_raw.job_types = data.result
                })
        },
        getProfile() {
            this.authGet('pub/profile')
                .then((data) => {
                    if (data.status) {
                        let res = data.result
                        this.logged_in = true;

                        this.form.name = res.name
                        this.form.email = res.email
                        this.form.city = res.city
                        this.form.institution = res.institution
                        this.form.job_type_code = res.job_type_code
                        this.form.phone = res.phone
                        this.form.identity_photo = res.identity_photo
                        this.form.nik = res.nik
                    }
                })
        },
        registerEmail() {
            this.disabled = true
            this.apiPost('pub/register', this.form)
                .then((data) => {
                    this.disabled = false
                    if (data.status) {
                        let trx = data.result.transaction
                        let token = data.result.token

                        if (token) {
                            localStorage.setItem('perki_user_token', data.result.token)
                        }

                        if (trx) {
                            this.$router.push('register/event?transaction_number=' + trx.number);
                        }
                        if (this.$route.query.url) {
                            this.$router.push(this.$route.query.url);
                        }
                        this.emitter.emit("update-header");
                    } else {
                        if (data.error === 422) {
                            this.form_errors = data.errors
                        }
                        if (data.error === 401) {
                            if (confirm("Email has already been registered. Login with your email?")) {
                                this.$router.push('/login');
                            }
                        }
                    }
                }).catch(() => {
                    this.disabled = false
                })
        },
        parseErrors(field, type = 'status') {
            let has = false;
            let message = '';
            if (this.form_errors[field]) {
                message = this.form_errors[field][0];
                has = true;
            }

            if (type === 'status') {
                return has
            } else {
                return message
            }
        },
        uploadFile() {
            this.upload_loader = true;
            let file = document.getElementById("file-upload").files[0];
            if (file) {
                let form_data = new FormData();

                form_data.append('file', file)

                this.apiPost('pub/upload-file', form_data)
                    .then((data) => {
                        this.form.identity_photo = data.result.link;
                        this.upload_loader = false;
                    }).catch((e) => {
                        this.upload_loader = false;
                    });
            } else {
                this.upload_loader = false;
            }
        },
    },
    created() {
        this.loadJobType();

        if (localStorage.getItem('perki_user_token')) {
            this.getProfile()
        }
    },
    watch: {}
}
</script>
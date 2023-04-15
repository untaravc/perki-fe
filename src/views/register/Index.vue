<template>
    <div class="max-w-screen-lg m-auto pt-16">
        <div class="flex justify-center items-center my-6" style="min-height: calc(100vh - 195px);">
            <div class="p-6 border-slate-100 bg-white rounded-xl">
                <div>
                    <img src="/storage/logo/jcu_color.png" alt="" class="h-16 mb-2">
                </div>
                <div class="font-semibold text-xl">Registrasi Event</div>
                <div class="text-sm">Daftar dengan email atau dengan gmail.</div>
                <div class="mt-3">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Nama lengkap<span
                        class="text-red-600">*</span></label>
                    <input type="text" id="name" placeholder="ex. Jhon Doe" autofocus v-model="form.name"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                </div>
                <div class="grid gap-2 md:grid-cols-2 mt-3">
                    <div>
                        <label for="address" class="block mb-2 text-sm font-medium text-gray-900">Asal Kota, Provinsi
                            <span
                                class="text-red-600">*</span></label>
                        <input type="text" id="address" placeholder="ex. Sleman, DI Yogyakarta" v-model="form.city"
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                    </div>
                    <div>
                        <label for="institution" class="block mb-2 text-sm font-medium text-gray-900">Institusi <span
                            class="text-red-600">*</span></label>
                        <input type="text" id="institution" placeholder="ex. Universitas Gadjah Mada"
                               v-model="form.institution"
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                    </div>
                </div>
                <div class="mt-3">
                    <label for="job_type" class="block mb-2 text-sm font-medium text-gray-900">Tipe Peserta<span
                        class="text-red-600">*</span></label>
                    <select id="job_type" v-model="form.job_type_code"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>== Pilih ==</option>
                        <option :value="job.code" :key="job.code" v-for="job in data_raw.job_types">{{ job.name }}
                        </option>
                    </select>
                </div>
                <div class="mt-3">
                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Phone <span
                        class="text-red-600">*</span></label>
                    <input type="tel" id="phone" placeholder="ex. 081234567890" v-model="form.phone"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                </div>
                <div class="mt-3">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">E-Mail <span
                        class="text-red-600">*</span></label>
                    <input type="text" id="email" placeholder="ex. mail@example.com" v-model="form.email"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                </div>
                <div class="grid gap-2 md:grid-cols-2 mt-3" v-if="!logged_in">
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password <span
                            class="text-red-600">*</span></label>
                        <div class="relative">
                            <input :type="eye_icon ? 'text' : 'password'" id="password"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                            <button type="button" class="p-2 show-password absolute top-1/2 right-2 -translate-y-1/2"
                                    @click="eye_icon = !eye_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" v-if="eye_icon" width="24" height="24"
                                     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                     stroke-linecap="round" stroke-linejoin="round" style="display: inline-block;">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <circle cx="12" cy="12" r="2"></circle>
                                    <path
                                        d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" v-if="!eye_icon" width="24" height="24"
                                     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                     stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <line x1="3" y1="3" x2="21" y2="21"></line>
                                    <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83"></path>
                                    <path
                                        d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div>
                        <label for="password-confirmation" class="block mb-2 text-sm font-medium text-gray-900">Konfirmasi
                            Password <span
                                class="text-red-600">*</span></label>
                        <input type="password" id="password-confirmation"
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                    </div>
                </div>
                <div class="mt-3">
                    <button @click="registerEmail"
                            class="text-white w-full mb-2 bg-blue-900 hover:bg-blue-800 font-medium rounded-full text-base px-8 py-2.5 text-center">
                        Daftar
                    </button>
                    <button v-if="!logged_in"
                            class="inline-block w-full text-base relative text-neutral-700 text-center px-8 py-2.5 text-center rounded-full border hover:bg-neutral-100">
                        <img src="/storage/img/google-logo.png"
                             class="absolute top-1/2 left-3 xl:left-4 -translate-y-1/2 aspect-square w-5 xl:w-7" alt="">
                        <span>Lanjutkan dengan Google</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
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
            }
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
                    }
                })
        },
        registerEmail() {
            this.authPost('pub/register', this.form)
                .then((data)=>{
                    if(data.status){
                        let trx = data.result.transaction
                        if(trx){
                            this.$router.push('register/event?transaction_number=' + trx.number);
                        }
                    }
                })
        },
    },
    created() {
        this.loadJobType();

        if (localStorage.getItem('perki_user_token')) {
            this.getProfile()
        }
    },
    watch: {

    }
}
</script>
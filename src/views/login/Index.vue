<template>
    <div class="relative overflow-hidden max-w-screen-lg mx-auto pt-16 px-4">
        <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div
                class="absolute -top-24 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-violet-200 to-teal-200 opacity-60 blur-3xl">
            </div>
            <div
                class="absolute top-72 -left-32 h-80 w-80 rounded-full bg-gradient-to-br from-teal-200 to-sky-200 opacity-50 blur-3xl">
            </div>
        </div>

        <div class="flex justify-center items-center" style="min-height: calc(100vh - 195px);">
            <div class="w-full max-w-md p-8 bg-white rounded-3xl shadow-xl shadow-slate-200/70 ring-1 ring-slate-100">
                <div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/unt-dev.firebasestorage.app/o/Perki%2FJCU26%2Flogo_jcu26.png?alt=media&token=35d5c58c-1c43-47fc-8fe0-9b611950eaba"
                        alt="" class="h-16 mb-4">
                </div>
                <div class="font-bold text-2xl text-indigo-900">Sign In</div>
                <div class="text-sm text-slate-500 mb-5">Sign in with your account or Google.</div>
                <div class="mt-3">
                    <label for="email" class="block mb-2 text-sm font-medium text-slate-700">E-Mail <span
                            class="text-red-500">*</span></label>
                    <input type="email" id="email" placeholder="ex. mail@example.com" v-model="form.email"
                        class="bg-slate-50 border border-slate-200 text-indigo-900 text-sm rounded-xl focus:ring-2 focus:ring-violet-200 focus:border-violet-400 block w-full p-2.5 transition-colors">
                </div>
                <div class="mt-3">
                    <label for="password" class="block mb-2 text-sm font-medium text-slate-700">Password <span
                            class="text-red-500">*</span></label>
                    <input type="password" id="password" placeholder="********" v-model="form.password"
                        class="bg-slate-50 border border-slate-200 text-indigo-900 text-sm rounded-xl focus:ring-2 focus:ring-violet-200 focus:border-violet-400 block w-full p-2.5 transition-colors">
                </div>
                <div class="mt-5">
                    <button @click="login" :disabled="disabled"
                        class="text-white mb-2 w-full bg-gradient-to-r from-violet-600 to-teal-500 hover:shadow-lg hover:shadow-violet-200 font-medium rounded-full text-base px-8 py-2.5 text-center transition-shadow duration-200">
                        <BtnLoader v-if="disabled"></BtnLoader>
                        <span v-if="!disabled">Sign In</span>
                    </button>
                </div>
                <div class="flex items-center gap-3 my-5">
                    <div class="h-px flex-1 bg-slate-100"></div>
                    <div class="text-xs text-slate-400">OR</div>
                    <div class="h-px flex-1 bg-slate-100"></div>
                </div>
                <div class="flex justify-center">
                    <GoogleLogin :callback="loginByGoogle" />
                </div>
                <div class="mt-5 text-center">
                    <router-link to="/forgot-password" class="text-violet-600 hover:text-violet-700 font-semibold text-sm">Forgot your
                        Password?</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { GoogleLogin } from "vue3-google-login";

export default {
    components: { GoogleLogin },
    data() {
        return {
            disabled: false,
            form: {
                email: '',
                password: '',
            }
        }
    },
    methods: {
        login() {
            this.disabled = true;
            this.apiPost('pub/login', this.form)
                .then((data) => {
                    if (data.success) {
                        localStorage.setItem('perki_user_token', data.result.token)
                        this.$router.push('profile/info')
                    } else {
                        alert(data.message)
                    }
                    this.emitter.emit("update-header");
                    this.disabled = false;
                })
        },
        loginByGoogle(callback) {
            this.apiPost('pub/login-by-google', {
                id_token: callback.credential
            }).then((data) => {
                if (data.success) {
                    localStorage.setItem('perki_user_token', data.result.token)
                    let destination = this.$route.query.to
                    if (destination) {
                        this.$router.push(this.$route.query.to)
                    } else {
                        this.$router.push('/profile/info')
                    }
                }
                this.emitter.emit("update-header");
            })
        }
    }
}
</script>

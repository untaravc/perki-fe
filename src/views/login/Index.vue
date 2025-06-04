<template>
    <div class="max-w-screen-lg m-auto pt-16">
        <div class="flex justify-center items-center" style="min-height: calc(100vh - 195px);">
            <div class="p-6 border-red-100 bg-white rounded-xl">
                <div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/unt-dev.firebasestorage.app/o/Perki%2FJCU25%2Flogo-jcu-25.webp?alt=media&token=95ab8bb9-bdc7-49d6-a11c-dc7db56760ce"
                        alt="" class="h-16 mb-2">
                </div>
                <div class="font-semibold text-xl">Sign In</div>
                <div class="text-sm min-w-[380px]">Sign in with your account or gmail.</div>
                <form>
                    <div class="mt-3">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">E-Mail <span
                                class="text-red-600">*</span></label>
                        <input type="email" id="email" placeholder="ex. mail@example.com" v-model="form.email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-900 focus:border-red-500 block w-full p-2.5">
                    </div>
                    <div class="mt-3">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password <span
                                class="text-red-600">*</span></label>
                        <input type="password" id="password" placeholder="********" v-model="form.password"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-900 focus:border-red-500 block w-full p-2.5">
                    </div>
                    <div class="mt-3">
                        <button @click="login" :disabled="disabled"
                            class="text-white mb-2 w-full bg-red-900 hover:bg-red-800 font-medium rounded-full text-base px-8 py-2.5 text-center">
                            <BtnLoader v-if="disabled"></BtnLoader>
                            <span v-if="!disabled">Sign In</span>
                        </button>
                    </div>
                </form>
                <div class="mt-3 text-center">
                    <div class="italic text-red-500 text-sm mb-2">Sign in with Google</div>
                    <div>
                        <GoogleLogin :callback="loginByGoogle" />
                    </div>
                </div>
                <div class="mt-3">
                    <router-link to="/forgot-password" class="text-red-500 font-semibold text-sm mb-2">Forgot your
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
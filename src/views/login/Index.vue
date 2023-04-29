<template>
    <div class="max-w-screen-lg m-auto pt-16">
        <div class="flex justify-center items-center" style="min-height: calc(100vh - 195px);">
            <div class="p-6 border-slate-100 bg-white rounded-xl">
                <div>
                    <img src="/storage/logo/jcu_color.png" alt="" class="h-16 mb-2">
                </div>
                <div class="font-semibold text-xl">Sign In</div>
                <div class="text-sm min-w-[380px]">Sign in with your account or gmail.</div>
                <div class="mt-3">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">E-Mail <span
                        class="text-red-600">*</span></label>
                    <input type="email" id="email" placeholder="ex. mail@example.com" v-model="form.email"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                </div>
                <div class="mt-3">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password <span
                        class="text-red-600">*</span></label>
                    <input type="password" id="password" placeholder="********" v-model="form.password"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                </div>
                <div class="mt-3">
                    <button @click="login"
                            class="text-white mb-2 w-full bg-blue-900 hover:bg-blue-800 font-medium rounded-full text-base px-8 py-2.5 text-center">
                        Sign In
                    </button>
                </div>
                <div class="mt-3 text-center">
                    <div class="italic text-slate-500 text-sm mb-2">Sign in with Google</div>
                    <div>
                        <GoogleLogin :callback="loginByGoogle"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {GoogleLogin} from "vue3-google-login";

export default {
    components: {GoogleLogin},
    data() {
        return {
            form: {
                email: '',
                password: '',
            }
        }
    },
    methods: {
        login() {
            this.apiPost('pub/login', this.form)
                .then((data)=>{
                    if(data.status){
                        localStorage.setItem('perki_user_token', data.result.token)
                        this.$router.push('profile/info')
                    } else {
                        alert(data.message)
                    }
                })
        },
        loginByGoogle(callback) {
            this.apiPost('pub/login-by-google', {
                id_token: callback.credential
            }).then((data) => {
                if (data.status) {
                    localStorage.setItem('perki_user_token', data.result.token)
                    let destination = this.$route.query.to
                    if (destination) {
                        this.$router.push(this.$route.query.to)
                        console.log('to')
                    } else {
                        console.log('info')
                        this.$router.push('/profile/info')
                    }
                }
            })
        }
    }
}
</script>
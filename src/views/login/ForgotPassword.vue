<template>
    <div class="max-w-screen-lg m-auto pt-16">
        <div class="flex justify-center items-center" style="min-height: calc(100vh - 195px);">
            <div class="p-6 border-slate-100 bg-white rounded-xl">
                <div>
                    <img src="/storage/logo/jcu_color.png" alt="" class="h-16 mb-2">
                </div>
                <div class="font-semibold text-xl">Forgot Password</div>
                <div class="text-sm min-w-[380px]">Reset and send the new password to your email</div>
                <div class="mt-3">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">E-Mail <span
                        class="text-red-600">*</span></label>
                    <input type="email" id="email" placeholder="ex. mail@example.com" v-model="form.email"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                </div>
                <div class="mt-3">
                    <button @click="sendNewPassword" :disabled="disabled"
                            class="text-white mb-2 w-full bg-blue-900 hover:bg-blue-800 font-medium rounded-full text-base px-8 py-2.5 text-center">
                        <BtnLoader v-if="disabled"></BtnLoader>
                        <span v-if="!disabled">Send New Password</span>
                    </button>
                </div>
                <div class="mt-3">
                    <router-link to="/login" class="text-slate-500 font-semibold text-sm mb-2">Login with password</router-link>
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
            form: {
                email: '',
                password: '',
            }
        }
    },
    methods: {
        sendNewPassword() {
            this.disabled = true
            this.apiPost('pub/send-new-password', this.form)
                .then((data)=>{
                    alert(data.message)
                    this.disabled = false
                })
        }
    }
}
</script>
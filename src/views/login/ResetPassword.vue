<template>
        <div style="min-height: calc(100vh - 122px);"></div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                password: '',
            }
        }
    },
    methods:{
        checkOtp(){
            let email = this.$route.query.email
            let token = this.$route.query.token

            this.apiPost('pub/check-otp-reset-password', {
                email: email,
                token: token
            }).then((data)=>{
                if(data.status){
                    localStorage.setItem('perki_user_token', data.result.token)
                    this.$router.push('/profile/info?open=open_edit_form')
                } else {
                    alert(data.message)
                    this.$router.push('/')
                }
            })
        }
    },
    created() {
        this.checkOtp();
    }
}
</script>
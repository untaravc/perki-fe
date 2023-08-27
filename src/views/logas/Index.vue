<template>
    <div class="mt-12 py-12">
        <input type="text" v-model="form.user_id">
        <input type="text" v-model="form.passcode">
        <button @click="logas">OK</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            form:{
                user_id:'',
                passcode:'',
            }
        }
    },
    methods:{
        logas(){
            this.apiPost('pub/logas', this.form)
                .then((data)=>{
                    if(data.status){
                        localStorage.setItem('perki_user_token', data.result.token)
                        this.$router.push('profile/info')
                    } else {
                        alert(data.message)
                    }
                    this.emitter.emit("update-header");
                })
        },
        checkParams(){
            let user_id = this.$route.query.user_id
            let passcode = this.$route.query.passcode

            if(user_id && passcode){
                this.form.user_id = user_id
                this.form.passcode = passcode

                this.logas()
            }
        }
    },
    created() {
        this.checkParams()
    }
}
</script>
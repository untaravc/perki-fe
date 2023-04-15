<template>
    <div>
        <div class="text-2xl font-semibold mb-3">Profil</div>
        <div class="p-6 border-slate-100 bg-white rounded-xl">
            <div class="grid gap-2 grid-cols-5">
                <div>
                    <div style="padding-bottom: 100%"
                         class="w-full bg-purple-300 bg-cover rounded-md bg-center bg-no-repeat">
                    </div>
                    <div class="text-center text-blue-800">
                        Ganti Foto
                    </div>
                </div>
                <div class="col-span-4 pl-4">
                    <div class="text-xl mb-3">{{ profile.name }}</div>
                    <div class="text-base flex items-center">
                        <unicon name="envelope" height="20px"></unicon>
                        <div class="ml-3">{{ profile.email }}</div>
                    </div>
                    <div class="text-base flex items-center">
                        <unicon name="phone" height="20px"></unicon>
                        <div class="ml-3">{{ profile.phone }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            profile: {
                id: '',
                name: '',
                email: '',
                phone: '',
                image: '',
            }
        }
    },
    methods: {
        loadProfile() {
            this.authGet('pub/profile')
                .then((data) => {
                    this.profile = data.result
                })
        }
    },
    created() {
        this.loadProfile()
    }
}
</script>
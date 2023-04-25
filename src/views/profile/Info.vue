<template>
    <div>
        <div class="text-2xl font-semibold mb-3">Profil</div>
        <div class="p-6 border-slate-100 bg-white rounded-xl">
            <div class="grid gap-2 grid-cols-5">
                <div>
                    <div style="padding-bottom: 100%" :style="`backgroud-image:url(`+ profile.image +`)`"
                         class="w-full bg-purple-300 bg-cover rounded-md bg-center bg-no-repeat">
                    </div>
                    <div class="text-center text-sm cursor-pointer text-blue-800">
                        Ganti Foto
                    </div>
                </div>
                <div class="col-span-4 pl-4">
                    <div class="text-2xl font-bold mb-3">{{ profile.name }}</div>
                    <div class="text-sm flex items-center mb-1">
                        <unicon name="envelope" height="16px"></unicon>
                        <div class="ml-1">{{ profile.email }}</div>
                    </div>
                    <div class="text-sm flex items-center mb-1">
                        <unicon name="phone" height="20px"></unicon>
                        <div class="ml-1">{{ profile.phone }}</div>
                    </div>
                    <div class="text-sm flex items-center mb-1">
                        <unicon name="user-md" height="20px"></unicon>
                        <div class="ml-1">{{ profile.job_label }}</div>
                    </div>
                    <div class="text-sm flex items-center mb-1">
                        <unicon name="location-point" height="20px"></unicon>
                        <div class="ml-1">{{ profile.city }}</div>
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
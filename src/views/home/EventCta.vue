<template>
    <div class="px-2 mb-3">
        <div class="max-w-screen-lg m-auto py-6 bg-gradient-to-r from-emerald-300 to-cyan-300 rounded-lg">
            <div class="grid grid-cols-3">
                <div class="col-span-3 md:col-span-2 px-6">
                    <div class="font-semibold text-2xl">
                        On-Demand Recordings
                    </div>
                    <div class="font-semibold text-sm text-blue-700">
                        Jogja Cardilogy Update - Jincartos Symposium
                    </div>
                </div>
                <div class="col-span-3 md:col-span-1 flex justify-end px-6 items-center">
                    <button @click="toProtectedPage"
                        class="bg-blue-900 hover:bg-blue-800 text-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-700 font-medium rounded-lg text-base px-8 py-2.5 text-center mr-3 md:mr-0">
                        View
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
            event: {
                title: "",
                subtitle: "",
            },
        }
    },
    methods: {
        toProtectedPage() {
            let token = localStorage.getItem('perki_user_token');
            if (!token) {
                if (confirm('Login or Register to view videos')) {
                    this.$router.push('/login')
                }
            } else {
                this.$router.push('/videos')
            }
        }
    },
    created() {

    }
}
</script>
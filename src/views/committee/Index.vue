<template>
    <div class="max-w-screen-lg m-auto pt-28 pb-12 px-2">
        <div class="text-4xl font-bold mb-8 text-center">
            COMMITTEE
        </div>
        <div v-for="data in data_content" class="mb-12">
            <div class="text-2xl font-bold mb-4">{{ data.title }}</div>
            <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
                <div class="group relative" v-for="user in data.users">
                    <div v-if="user.data">
                        <div style="padding-bottom: 100%" v-if="user.data"
                             :style="'background-image: url(' + user.data.image +')'"
                             class="w-full bg-purple-300 bg-cover mb-2 rounded-md bg-center bg-no-repeat">
                        </div>
                        <div
                            class="absolute bottom-0 right-0 left-0 rounded-b-md pb-3 pt-6 px-3 bg-gradient-to-t from-slate-800 to-transparent">
                            <h4 class="font-semibold text-sm text-white mb-2" v-if="user.data">{{ user.data.name }}</h4>
                            <h4 class="font-semibold text-xs text-slate-300">{{ user.position }}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 8,
            data_content: []
        }
    },
    methods: {
        loadSpeaker() {
            this.apiGet('pub/committee')
                .then((data) => {
                    this.data_content = data.result
                })
        }
    },
    created() {
        this.loadSpeaker()
    }
}
</script>
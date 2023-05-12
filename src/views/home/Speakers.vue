<template>
    <div class="max-w-screen-lg m-auto pt-24 pb-12 px-2" id="speaker">
        <div class="text-4xl font-bold mb-1 text-center text-white">
            SPEAKERS
        </div>
        <div class="text-small text-slate-100 mb-5 text-center">
            The speakers are experts in Cardiology and Vascular Medicine as well as related fields local and national level
        </div>
        <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
            <div class="group" v-for="data in data_content">
                <div style="padding-bottom: 100%" :style="'background-image: url(' + data.image +')'"
                     class="w-full bg-purple-300 bg-cover mb-2 rounded-md bg-center bg-no-repeat">
                </div>
                <div>
                    <h4 class="font-bold text-base text-slate-50">{{ data.name }}</h4>
                    <div class="text-xs text-neutral-material-700 text-slate-100">{{ data.desc }}</div>
                </div>
            </div>
        </div>
        <router-link to="/speakers">
            <div class="bg-blue-500 p-1 text-center w-full rounded mt-4 text-slate-200 cursor-pointer">View all
            </div>
        </router-link>
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
            this.apiGet('pub/speakers', {
                limit: 8
            })
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
<template>
    <div class="max-w-screen-lg m-auto pt-24 pb-12 px-2" style="min-height: calc(100vh - 133px);">
        <div class="text-4xl font-bold mb-1 text-center mb-3">
            ACCOMMODATION
        </div>
        <div class="mb-6 text-center">
            Tentrem Hotel Yogyakarta, P. Mangkubumi St. No.72A, Cokrodiningratan, Jetis, Yogyakarta
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
            this.apiGet('pub/speakers')
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
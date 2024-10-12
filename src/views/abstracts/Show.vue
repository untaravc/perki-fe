<template>
    <div class="max-w-screen-lg m-auto pt-12 pb-12 px-2 mt-20" style="min-height: calc(100vh - 84px - 128px)">
        <div class="text-4xl font-bold text-center mb-3">
            POSTER BOARD
        </div>
        <div class="grid md:grid-cols-2 grid-cols-1">
            <div>
                <div class="text-xl">{{ data_content.title }}</div>
                <div class="italic text-sm text-slate-500">
                    <span v-for="author in data_content.authors">{{ author.surname }}, {{ author.first_name }}; </span>
                </div>
                <div class="">Keywords: <i>{{ data_content.subtitle }}</i></div>
            </div>
            <div>
                <img :src="data_content.image" class="max-w-32 w-40 float-right" alt="">
            </div>
        </div>
        <div class="mb-4">
            <div class="text-sm" v-if="data_content.body_parsed">
                <p v-for="item in data_content.body_parsed"><b>{{ item.title }}:</b>{{ item.content }}</p>
            </div>
        </div>
        <div class="border-t flex justify-between text-xs">
            <i>Score Rank :
                <span v-if="data_content.reviewer_id < 10">1-10</span>
                <span v-else-if="data_content.reviewer_id < 30">10-30</span>
                <span v-else-if="data_content.reviewer_id < 50">30-50</span>
                <span v-else-if="data_content.reviewer_id > 50">50-100</span>
            </i>
            <i>Viewer: {{ data_content.comment }}</i>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data_content: {},
            filter: {
                type: 'abstract',
                year: 2024
            }
        }
    },
    methods: {
        loadPoster() {
            this.apiGet('pub/posters/' + this.$route.params.id, this.filter)
                .then((data) => {
                    this.data_content = data.result
                })
        }
    },
    created() {
        this.loadPoster()
    },
}
</script>
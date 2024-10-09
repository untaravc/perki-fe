<template>
    <div class="max-w-screen-lg m-auto pt-12 pb-12 px-2 mt-20" style="min-height: calc(100vh - 84px - 128px)">
        <div class="text-4xl font-bold text-center mb-3">
            POSTER BOARD
        </div>
        <div class="grid md:grid-cols-3 grid-cols-1 gap-4">
            <div v-for="poster in data_content.data" class="bg-gradient-to-br from-indigo-50 to-indigo-200 rounded-lg">
                <div class="w-full aspect-square bg-no-repeat bg-center bg-cover rounded-t-lg p-2"
                    :style="'background-image: url(' + poster.image_link + ')'">
                    <div class="flex">
                        <div v-if="poster.status == 3" class="text-xs bg-slate-100 px-2 italic rounded-md">moderated
                        </div>
                        <div v-if="poster.status == 1" class="text-xs bg-slate-100 px-2 italic rounded-md">displayed
                        </div>
                    </div>
                </div>
                <div class="p-2">
                    <div class="flex justify-between">
                        <div class="text-slate-500">#{{ poster.category }}</div>
                        <div class="flex items-center">
                            <unicon name="eye" fill="grey" width="15px" height="15px"></unicon>
                            <div class="text-sm">{{ poster.comment }}</div>
                        </div>
                    </div>
                    <div class="text-sm font-medium">{{ $filters.truncate(poster.title, 100) }}</div>
                </div>
            </div>
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
            this.apiGet('pub/posters', this.filter)
                .then((data) => {
                    this.data_content = data
                })
        }
    },
    created() {
        this.loadPoster()
    },
}
</script>
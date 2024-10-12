<template>
    <div class="max-w-screen-lg m-auto pt-12 pb-12 px-2 mt-20" style="min-height: calc(100vh - 84px - 128px)">
        <div class="text-4xl font-bold text-center mb-3" ref="title">
            POSTER BOARD
        </div>
        <div class="grid md:grid-cols-3 grid-cols-1 gap-4">
            <div v-for="poster in data_content.data" class="bg-gradient-to-br from-indigo-50 to-indigo-200 rounded-lg">
                <div v-if="poster.status == 1"
                    class="w-full aspect-square bg-no-repeat bg-center bg-cover rounded-t-lg p-2"
                    :style="'background-image: url(' + poster.image_link + ')'">
                </div>
                <router-link :to="'/posters/' + poster.id">
                    <div class="p-2 cursor-pointer">
                        <div class="flex justify-between">
                            <div class="text-slate-500 text-sm">
                                #<span v-if="poster.status === 3">moderated</span>
                                <span v-if="poster.status === 1">displayed</span>
                            </div>
                            <div class="flex items-center">
                                <unicon name="eye" fill="grey" width="15px" height="15px"></unicon>
                                <div class="text-sm">{{ poster.comment }}</div>
                            </div>
                        </div>
                        <div class="text-sm font-medium">{{ $filters.truncate(poster.title, 100) }}</div>
                        <div class="text-xs">
                            {{ $filters.ucword(poster.category) }} |
                            <span class="italic text-xs text-slate-500">
                                <span v-for="author in poster.authors">{{ author.surname }}, {{ author.first_name
                                    }}; </span>
                            </span>
                        </div>
                    </div>
                </router-link>
            </div>

        </div>
        <div class="flex justify-center mt-4">
            <div v-if="data_content.prev_page_url" @click="changePage('prev')"
                class="cursor-pointer p-2 pb-1 rounded m-1 bg-blue-300">
                <unicon name="angle-left"></unicon>
            </div>
            <div v-if="data_content.next_page_url" @click="changePage('next')"
                class="cursor-pointer p-2 pb-1 rounded m-1 bg-blue-300">
                <unicon name="angle-right"></unicon>
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
                year: 2024,
                page: 1
            }
        }
    },
    methods: {
        loadPoster() {
            this.apiGet('pub/posters', this.filter)
                .then((data) => {
                    this.data_content = data
                })
        },
        changePage(type) {
            if (type == "prev") {
                this.filter.page = this.filter.page - 1
            } else {
                this.filter.page = this.filter.page + 1
            }
            this.loadPoster()

            const el = this.$refs.title;

            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    },
    created() {
        this.loadPoster()
    },
}
</script>
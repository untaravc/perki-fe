<template>
    <div class="max-w-screen-lg m-auto pt-16">
        <div class="grid md:grid-cols-5 lg:gap-6 mb-12 mt-20">
            <a target="_blank" :href="data_content[index]['poster']" class="md:order-2 rounded-lg md:col-span-2 relative bg-contain h-96 bg-center bg-no-repeat w-full"
                 :style="`background-image: url('` + data_content[index]['poster'] + `')`"></a>
            <div class="md:col-span-3 md:order-1">
                <div class="m-5 bg-blue-300 rounded-full py-1 px-8 italic text-sm inline-block">
                    {{ data_content[index]['date'] }}
                </div>
                <div class="mx-5 mb-5 text-4xl lg:text-6xl  font-bold text-blue-900">
                    {{ data_content[index]['title'] }}
                </div>
                <div class="mx-5 mb-5 lg:w-9/12 text-lg text-slate-600 italic">
                    {{ data_content[index]['subtitle'] }}
                </div>
                <div class="mx-5 flex">
                    <div v-for="btn in data_content[index]['buttons']" class="mx-2">
                        <router-link :to="btn.link"
                                     :class="btn.theme === 'dark' ? 'text-white bg-blue-900' : 'text-blue-900 hover:bg-blue-900 hover:text-white'"
                                     class="flex items-center border border-blue-900 font-medium rounded-full text-lg px-6 py-2 text-center">
                            <div class="mr-2">{{ btn.text }}</div>
                            <unicon v-if="btn.theme === 'dark'" name="arrow-right" fill="white"></unicon>
                        </router-link>
                    </div>
                </div>
                <div class="flex ml-6 mt-4">
                    <div @click="prev"
                         class="p-3 mx-1 border border-blue-300 cursor-pointer hover:bg-blue-200 h-12 w-12 flex justify-center items-center rounded-full">
                        <unicon name="angle-left"></unicon>
                    </div>
                    <div @click="next"
                         class="p-3 mx-1 border border-blue-300 cursor-pointer hover:bg-blue-200 h-12 w-12 flex justify-center items-center rounded-full">
                        <unicon name="angle-right"></unicon>
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
            index: 0,
            interval: '',
            data_content: [
                {
                    poster: '',
                }
            ]
        }
    },
    methods: {
        next() {
            let count = this.data_content.length - 1;
            if (this.index < count) {
                this.index++
            } else {
                this.index = 0
            }
            clearInterval(this.interval)
        },
        prev() {
            if (this.index > 0) {
                this.index--
            } else {
                this.index = this.data_content.length - 1;
            }
            clearInterval(this.interval)
        },
        loadData() {
            this.apiGet('pub/hero-banner')
                .then((data) => {
                    this.data_content = data.result;
                })
        }
    },
    created() {
        this.loadData()
    },
    mounted() {
        this.interval = setInterval(() => {
            this.next()
        }, 5000)
    }
}
</script>
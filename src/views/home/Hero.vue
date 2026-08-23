<template>
    <div class="max-w-screen-lg mx-auto px-4 pt-28 pb-14 sm:pt-32">
        <div class="grid md:grid-cols-5 gap-8 md:gap-14 items-center">
            <div class="md:col-span-3 order-2 md:order-1">
                <transition name="fade" mode="out-in">
                    <div :key="index">
                        <div
                            class="inline-flex items-center gap-2 mb-5 rounded-full bg-gradient-to-r from-violet-100 to-teal-100 text-violet-700 py-1.5 px-5 text-sm font-medium">
                            <unicon name="schedule" width="16" height="16" fill="currentColor"></unicon>
                            {{ data_content[index]['date'] }}
                        </div>
                        <h1 class="font-bold text-indigo-900 leading-[1.1] mb-5"
                            :class="data_content[index]['title'] && data_content[index]['title'].length > 30 ? 'text-3xl lg:text-5xl' : 'text-4xl lg:text-6xl'">
                            {{ data_content[index]['title'] }}
                        </h1>
                        <p class="text-lg text-slate-500 mb-8 md:pr-6">
                            {{ data_content[index]['subtitle'] }}
                        </p>
                        <div class="flex flex-wrap gap-3" v-if="data_content[index]['buttons'].length > 0">
                            <router-link v-for="(btn, i) in data_content[index]['buttons']" :key="i" :to="btn.link"
                                :class="btn.theme === 'dark'
                                    ? 'text-white bg-gradient-to-r from-violet-600 to-teal-500 hover:shadow-lg hover:shadow-violet-200 shadow-md shadow-violet-100'
                                    : 'text-slate-700 bg-white border border-slate-200 hover:border-violet-300 hover:text-violet-700'"
                                class="group inline-flex items-center gap-2 rounded-full font-medium text-base px-7 py-3 transition-all duration-200">
                                <span>{{ btn.text }}</span>
                                <unicon v-if="btn.theme === 'dark'" name="arrow-right" fill="white" width="18"
                                    class="transition-transform duration-200 group-hover:translate-x-1"></unicon>
                            </router-link>
                        </div>
                    </div>
                </transition>

                <div class="flex items-center gap-4 mt-10" v-if="data_content.length > 1">
                    <div class="flex gap-2">
                        <button v-for="(item, i) in data_content" :key="i" @click="goTo(i)" type="button"
                            :aria-label="`Go to slide ${i + 1}`"
                            class="h-2.5 rounded-full transition-all duration-300"
                            :class="i === index ? 'w-8 bg-gradient-to-r from-violet-600 to-teal-500' : 'w-2.5 bg-slate-200 hover:bg-slate-300'">
                        </button>
                    </div>
                    <div class="flex gap-2 ml-2">
                        <button @click="prev" type="button" aria-label="Previous slide"
                            class="h-9 w-9 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:border-violet-300 hover:text-violet-700 transition-colors">
                            <unicon name="angle-left" width="18"></unicon>
                        </button>
                        <button @click="next" type="button" aria-label="Next slide"
                            class="h-9 w-9 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:border-violet-300 hover:text-violet-700 transition-colors">
                            <unicon name="angle-right" width="18"></unicon>
                        </button>
                    </div>
                </div>
            </div>

            <div class="md:col-span-2 order-1 md:order-2">
                <transition name="fade" mode="out-in">
                    <a :key="index" target="_blank" :href="base_url + data_content[index]['poster']"
                        class="relative block rounded-3xl bg-white p-3 shadow-xl shadow-slate-200/70 ring-1 ring-slate-100 hover:shadow-2xl hover:shadow-violet-100 transition-shadow duration-300">
                        <div class="rounded-2xl bg-contain bg-center bg-no-repeat h-80 md:h-96 w-full"
                            :style="`background-image: url('` + data_content[index]['poster'] + `')`"></div>
                    </a>
                </transition>
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
                    buttons: [],
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
        goTo(i) {
            this.index = i
            clearInterval(this.interval)
        },
        loadData() {
            this.apiGet('pub/hero-banner', { ref: 'jcu26' })
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
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>

<template>
    <div class="max-w-screen-lg m-auto pt-16">
        <Carousel :settings="settings" :wrapAround="true" :breakpoints="breakpoints">
            <Slide v-for="slide in data_content" :key="slide">
                <div class="grid md:grid-cols-5 lg:gap-6 mb-12 mt-20">
                    <a target="_blank" :href="slide['poster']"
                        class="md:order-2 rounded-lg md:col-span-2 relative bg-contain h-96 bg-center bg-no-repeat w-full"
                        :style="`background-image: url('` + slide['poster'] + `')`"></a>
                    <div class="md:col-span-3 md:order-1 flex flex-col items-start">
                        <div
                            class="m-5 bg-background-default rounded-full py-1 px-8 italic font-semibold text-sm inline-block text-primary-oren">
                            {{ slide['date'] }}
                        </div>
                        <div class="mx-5 mb-5 font-bold text-primary-merah text-left"
                            :class="slide['title'] && slide['title'].length > 30 ? 'text-2xl lg:text-4xl' : 'text-4xl lg:text-6xl'">
                            {{ slide['title'] }}
                        </div>
                        <div class="mx-5 mb-5 lg:w-9/12 text-lg text-primary-merah italic  text-left">
                            {{ slide['subtitle'] }}
                        </div>
                        <div class="mx-5 flex" v-if="slide['buttons'].length > 0">
                            <div v-for="btn in slide['buttons']" class="mx-2">
                                <router-link :to="btn.link"
                                    :class="btn.theme === 'dark' ? 'text-white bg-red-800' : 'text-red-800 hover:bg-red-800 hover:text-white'"
                                    class="flex items-center border border-red-800 font-medium rounded-full text-lg px-6 py-2 text-center">
                                    <div class="mr-2">{{ btn.text }}</div>
                                    <unicon v-if="btn.theme === 'dark'" name="arrow-right" fill="white"></unicon>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
            <template #addons>
                <CarouselNavigation />
            </template>
        </Carousel>
    </div>
</template>
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation as CarouselNavigation } from 'vue3-carousel'
export default {
    components: {
        Carousel,
        Slide,
        Pagination,
        CarouselNavigation,
    },
    data() {
        return {
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
                autoplay: 80000
            },
            index: 0,
            interval: '',
            data_content: [
                {
                    poster: '',
                    buttons: [],
                }
            ],
            breakpoints: {

            }
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
            this.apiGet('pub/hero-banner', { ref: 'jcu25' })
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

<style>
.carousel__next {
    left: 60px;
}

.carousel__prev {
    left: 10px;
}

.carousel__next,
.carousel__prev {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    color: white;
    top: 72%;

}

@media (max-width: 768px) {

    .carousel__next,
    .carousel__prev {
        top: 95%;
    }
}
</style>
<template>
    <div class="max-w-screen-lg m-auto mt-16 pt-4 mb-20 md:mb-8">
        <Carousel :settings="settings" :wrapAround="true" :breakpoints="breakpoints">
            <Slide v-for="slide in data_content" :key="slide">
                <div class="grid md:grid-cols-2 gap-12 items-center md:px-16">
                    <!-- Content -->
                    <div class="space-y-8">
                        <div class="space-y-6">
                            <div v-if="slide['date']" class="inline-flex items-center text-red-600 font-medium">
                                <div class="w-8 h-px bg-red-600 mr-3"></div>
                                {{ slide['date'] }}
                            </div>

                            <h2 class="font-bold text-gray-900 leading-tight"
                                :class="slide['title'] && slide['title'].length > 30 ? 'text-2xl lg:text-4xl' : 'text-4xl lg:text-6xl'">
                                {{ slide['title'] }}
                            </h2>

                            <p class="text-xl text-gray-600 leading-relaxed">
                                {{ slide['subtitle'] }}
                            </p>
                        </div>

                        <div class="flex items-center space-x-6" v-if="slide['buttons'].length > 0">
                            <router-link :to="btn.link" v-for="btn in slide['buttons']"
                                :class="btn.theme === 'dark' ? 'text-white bg-red-800' : 'text-red-800 hover:bg-red-800 hover:text-white'"
                                class="inline-flex items-center font-semibold rounded-full px-8 py-4 hover:bg-red-700 transition-colors duration-300">
                                {{ btn.text }}
                                <unicon v-if="btn.theme === 'dark'" name="arrow-right" fill="white"></unicon>
                            </router-link>
                        </div>
                    </div>

                    <!-- Image -->
                    <div class="relative">
                        <div class="aspect-square rounded-3xl overflow-hidden">
                            <div class="w-full h-full bg-contain bg-no-repeat bg-center"
                                :style="`background-image: url('` + slide['poster'] + `')`">
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
    right: 0%;
}

.carousel__prev {
    left: 0%;
}

.carousel__next,
.carousel__prev {
    background: #fcb42660;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    color: white;
    top: 50%;
}

@media (max-width: 768px) {

    .carousel__next,
    .carousel__prev {
        top: 105%;
    }

    .carousel__next {
        right: 30%;
    }

    .carousel__prev {
        left: 30%;
    }
}
</style>
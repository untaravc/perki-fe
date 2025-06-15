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
                            class="m-5 bg-background-default rounded-full py-1 px-8 italic font-semibold text-sm inline-block text-white">
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

                <!-- <div class="max-w-4xl mx-auto p-6">
                    <div class="hero-gradient rounded-3xl overflow-hidden shadow-2xl mb-8">
                        <div class="grid lg:grid-cols-12 gap-0 min-h-[500px]">
                            <div class="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center relative z-10">
                                <div class="slide-in-left mb-6">
                                    <span
                                        class="inline-flex items-center bg-primary-coklat text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg floating-animation">
                                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        March 15, 2025
                                    </span>
                                </div>

                                <h1
                                    class="slide-in-left text-4xl lg:text-6xl font-bold text-primary-merah mb-6 leading-tight">
                                    Revolutionary Design
                                    <span class="text-primary-hijau">Innovation</span>
                                </h1>

                                <p
                                    class="slide-in-left text-xl text-primary-merah/80 mb-8 italic leading-relaxed lg:w-10/12">
                                    Discover the future of digital experiences with our cutting-edge solutions that
                                    transform ideas into reality.
                                </p>

                                <div class="fade-in-up flex flex-col sm:flex-row gap-4">
                                    <button
                                        class="group relative overflow-hidden bg-primary-merah text-white px-8 py-4 rounded-full font-semibold text-lg hover-lift shadow-lg">
                                        <span class="relative z-10 flex items-center">
                                            Explore Now
                                            <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                                                fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd"
                                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </span>
                                        <div
                                            class="absolute inset-0 bg-primary-oren transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300">
                                        </div>
                                    </button>

                                    <button
                                        class="group border-2 border-primary-merah text-primary-merah px-8 py-4 rounded-full font-semibold text-lg hover-lift hover:bg-primary-merah hover:text-white transition-all duration-300 shadow-lg">
                                        <span class="flex items-center">
                                            Learn More
                                            <svg class="w-5 h-5 ml-2 transform group-hover:scale-110 transition-transform"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                                </path>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div class="lg:col-span-5 relative overflow-hidden">
                                <div class="slide-in-right absolute inset-0 image-overlay"></div>
                                <div class="relative h-full min-h-[400px] lg:min-h-full bg-cover bg-center"
                                    style="background-image: url('https://images.unsplash.com/photo-1558618047-3c8c89c573c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');">

                                    <div class="absolute top-8 right-8 glass-effect rounded-2xl p-4 floating-animation">
                                        <div class="flex items-center space-x-2">
                                            <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                            <span class="text-white text-sm font-medium">Live</span>
                                        </div>
                                    </div>

                                    <div class="absolute bottom-8 left-8 glass-effect rounded-2xl p-4"
                                        style="animation: float 6s ease-in-out infinite 2s;">
                                        <div class="text-white">
                                            <div class="text-2xl font-bold">99%</div>
                                            <div class="text-sm opacity-80">Satisfaction</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-center space-x-3">
                        <button class="w-3 h-3 bg-primary-coklat rounded-full shadow-lg"></button>
                        <button
                            class="w-3 h-3 bg-gray-300 rounded-full hover:bg-primary-oren transition-colors"></button>
                        <button
                            class="w-3 h-3 bg-gray-300 rounded-full hover:bg-primary-oren transition-colors"></button>
                    </div>
.carousel__next {
    left: 60px;
}

.carousel__prev {
    left: 10px;
}

.carousel__next,
.carousel__prev {
    background: #fcb42660;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    color: white;
    top: 72%;

}

                </div> -->
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
    background: #fcb42660;
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

<!-- <style>
.hero-gradient {
    background: linear-gradient(135deg, rgba(252, 180, 38, 0.1) 0%, rgba(95, 99, 4, 0.1) 100%);
}

.image-overlay {
    background: linear-gradient(45deg, rgba(184, 10, 41, 0.8) 0%, rgba(238, 144, 82, 0.6) 100%);
}

.floating-animation {
    animation: float 6s ease-in-out infinite;
}

.slide-in-left {
    animation: slideInLeft 0.8s ease-out;
}

.slide-in-right {
    animation: slideInRight 0.8s ease-out 0.2s both;
}

.fade-in-up {
    animation: fadeInUp 0.8s ease-out 0.4s both;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.glass-effect {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.hover-lift {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}
</style> -->
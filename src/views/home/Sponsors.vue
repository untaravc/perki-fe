<template>
    <div class="px-2">
        <div class="max-w-screen-lg m-auto py-6 bg-indigo-200 rounded-lg">
            <Carousel :settings="settings" :wrapAround="true" :breakpoints="breakpoints">
                <Slide v-for="slide in sliders" :key="slide">
                    <div class="carousel__item">
                        <img :src="slide.image" class="h-12 skew-x-3" alt="jcu-sponsor">
                    </div>
                </Slide>
            </Carousel>
        </div>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

export default {
    name: 'App',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data: () => ({
        settings: {
            itemsToShow: 1.5,
            snapAlign: 'center',
            autoplay: 5000
        },
        breakpoints: {
            700: {
                itemsToShow: 3.5,
                snapAlign: 'center',
            },
            1024: {
                itemsToShow: 5,
                snapAlign: 'start',
            },
        },
        sliders: [],
    }),
    methods: {
        loadData() {
            this.apiGet('pub/sponsor-slider')
                .then((data) => {
                    this.sliders = data.result
                })
        }
    },
    created() {
        this.loadData()
    }
}
</script>
<template>
    <div class="max-w-screen-lg m-auto py-6 bg-indigo-200 rounded-lg">
        <Carousel :settings="settings" :autoplay="3000" :wrapAround="true" :breakpoints="breakpoints">
            <Slide v-for="slide in 6" :key="slide">
                <div class="carousel__item">
                    <img src="/storage/logo/jcu_color.png" class="h-12 skew-x-3" alt="jcu-sponsor">
                </div>
            </Slide>
        </Carousel>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

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
            itemsToShow: 3,
            snapAlign: 'center',
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
    }),
}
</script>
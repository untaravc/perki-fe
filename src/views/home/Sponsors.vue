<template>
    <div class="max-w-screen-lg m-auto py-6">
        <Carousel :settings="settings" :autoplay="3000" :wrapAround="true" :breakpoints="breakpoints">
            <Slide v-for="slide in 6" :key="slide">
                <div class="carousel__item bg-blue-300">{{ slide }}</div>
            </Slide>

<!--            <template #addons>-->
<!--                <Navigation />-->
<!--            </template>-->
        </Carousel>
    </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
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
            itemsToShow: 1,
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
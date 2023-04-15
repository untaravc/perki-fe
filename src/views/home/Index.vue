<template>
    <div>
        <Hero></Hero>
        <Sponsors></Sponsors>
        <Video></Video>
        <div class="bg-gradient-to-br from-[#193460] to-[#0a0009]">
            <Speakers></Speakers>
        </div>
        <Schedules></Schedules>
        <Pricing></Pricing>
    </div>
</template>

<script>
import Hero from './Hero.vue'
import Video from './Video.vue'
import Speakers from './Speakers.vue'
import Schedules from './Schedules.vue'
import Sponsors from './Sponsors.vue'
import Pricing from "@/views/home/Pricing.vue";

export default {
    components: {Pricing, Hero, Video, Speakers, Schedules, Sponsors}
}
</script>
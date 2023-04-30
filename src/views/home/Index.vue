<template>
    <div>
        <Hero></Hero>
        <TimerPage></TimerPage>
        <Video></Video>
        <Sponsors></Sponsors>
        <Schedules></Schedules>
        <Pricing></Pricing>
        <div class="bg-gradient-to-br from-[#193460] to-[#0a0009]">
            <Speakers></Speakers>
        </div>
    </div>
</template>

<script>
import Hero from './Hero.vue'
import Video from './Video.vue'
import Speakers from './Speakers.vue'
import Schedules from './Schedules.vue'
import Sponsors from './Sponsors.vue'
import Pricing from "./Pricing.vue";
import TimerPage from "./Timer.vue";

export default {
    components: {Pricing, Hero, Video, Speakers, Schedules, Sponsors, TimerPage}
}
</script>
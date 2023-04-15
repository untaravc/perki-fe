<template>
    <div>
        <Hero></Hero>
        <Sponsors class="border-t"></Sponsors>
        <Video></Video>
        <Speakers></Speakers>
        <Schedules></Schedules>
    </div>
</template>

<script>
import Hero from './Hero.vue'
import Video from './Video.vue'
import Speakers from './Speakers.vue'
import Schedules from './Schedules.vue'
import Sponsors from './Sponsors.vue'

export default {
    components: {Hero, Video, Speakers, Schedules, Sponsors}
}
</script>
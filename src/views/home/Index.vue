<template>
    <div>
        <Hero></Hero>
        <Sponsors class="border-blue-50 border-t"></Sponsors>
        <div class="bg-blue-50">
            <Video></Video>
        </div>
        <Speakers></Speakers>
        <div class="bg-slate-100">
            <Schedules></Schedules>
        </div>
    </div>
</template>

<script>
import Hero from './Hero.vue'
import Video from './Video.vue'
import Speakers from './Speakers.vue'
import Schedules from './Schedules.vue'
import Sponsors from './Sponsors.vue'

export default {
    components: { Hero, Video, Speakers, Schedules, Sponsors }
}
</script>
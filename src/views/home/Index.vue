<template>
    <div class="" style="min-height: calc(100vh - 165px);">
        <Hero></Hero>
        <!-- <EventCta></EventCta> -->
        <TimerPage></TimerPage>
        <Menu></Menu>
        <Video></Video>
        <Schedules></Schedules>
        <Pricing></Pricing>
        <div class="bg-gradient-to-br from-purple-700 to-cyan-800">
            <Speakers></Speakers>
        </div>
        <!-- <Venue></Venue> -->
        <!-- <Sponsors></Sponsors> -->
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
import Venue from "./Venue.vue";
import Menu from "./Menu.vue";
import EventCta from "./EventCta.vue";

export default {
    components: {
        Pricing,
        Hero,
        Video,
        Speakers,
        Schedules,
        Sponsors,
        TimerPage,
        Venue,
        EventCta,
        Menu
    }
}
</script>
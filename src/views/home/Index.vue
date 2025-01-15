<template>
    <div class="" style="min-height: calc(100vh - 165px);">
        <Hero></Hero>
        <!-- <EventCta></EventCta> -->
        <TimerPage></TimerPage>
        <!-- <Menu></Menu> -->
        <!-- <Video></Video> -->
        <Schedule></Schedule>
        <Pricing></Pricing>
        <div class="bg-amber-50">
            <Speakers></Speakers>
        </div>
        <Venue></Venue>
        <!-- <Sponsors></Sponsors> -->
    </div>
</template>

<script>
import Hero from './Hero.vue'
// import Video from './Video.vue'
import Speakers from './Speakers.vue'
import Schedule from './SchedulesCarvep.vue'
// import Sponsors from './Sponsors.vue'
// import Pricing from "./Pricing.vue";
import Pricing from "./PricingCol.vue";
import TimerPage from "./Timer.vue";
import Venue from "./Venue.vue";
// import Menu from "./Menu.vue";
// import EventCta from "./EventCta.vue";
// import WelcomeMessage from './WelcomeMessage.vue'

export default {
    components: {
        Pricing,
        Hero,
        // Video,
        Speakers,
        Schedule,
        // Sponsors,
        TimerPage,
        Venue,
        // EventCta,
        // WelcomeMessage,
        // Menu
    }
}
</script>
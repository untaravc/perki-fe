<template>
    <div class="" style="min-height: calc(100vh - 165px);">
        <Hero></Hero>
        <!-- <EventCta></EventCta> -->
        <TimerPage></TimerPage>
        <!-- <WelcomeMessage></WelcomeMessage> -->
        <!-- <Menu></Menu> -->
        <!-- <Video></Video> -->
        <Schedule></Schedule>
        <!-- <Pricing></Pricing> -->
        <!-- <div class="bg-amber-50">
            <Speakers></Speakers>
        </div> -->
        <Venue2></Venue2>
        <!-- <Sponsors></Sponsors> -->
    </div>
</template>

<script>
import Hero from './Hero.vue'
import WelcomeMessage from './WelcomeMessage.vue'
import Speakers from './Speakers.vue'
import Schedule from './SchedulesCarvep.vue'
import Pricing from "./PricingCol.vue";
import TimerPage from "./Timer.vue";
import Venue2 from "./Venue2.vue";
export default {
    components: {
        Pricing,
        Hero,
        Speakers,
        Schedule,
        TimerPage,
        Venue2,
        WelcomeMessage,
    }
}
</script>
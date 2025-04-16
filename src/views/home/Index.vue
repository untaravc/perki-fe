<template>
    <div class="" style="min-height: calc(100vh - 165px);">
        <Hero></Hero>
        <!-- <EventCta></EventCta> -->
        <TimerPage></TimerPage>
        <!-- <WelcomeMessage></WelcomeMessage> -->
        <!-- <Menu></Menu> -->
        <!-- <Video></Video> -->
        <Schedule></Schedule>
        <Pricing></Pricing>
        <div class="bg-background-mint">
            <Speakers></Speakers>
        </div>
        <Venue></Venue>
        <!-- <Sponsors></Sponsors> -->
    </div>
</template>

<script>
import Hero from './Hero.vue'
import WelcomeMessage from './WelcomeMessage.vue'
import Speakers from './Speakers.vue'
import Schedule from './SchedulesSimple.vue'
import Pricing from "./PricingCol.vue";
import TimerPage from "./Timer.vue";
import Venue from "./Venue2.vue";
export default {
    components: {
        Pricing,
        Hero,
        Speakers,
        Schedule,
        TimerPage,
        Venue,
        WelcomeMessage,
    }
}
</script>
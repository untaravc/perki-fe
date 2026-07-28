<template>
    <div class="" style="min-height: calc(100vh - 165px);">
        <Hero></Hero>
        <!-- <EventCta></EventCta> -->
        <TimerPage></TimerPage>
        <AbstractCta></AbstractCta>
        <!-- <WelcomeMessage></WelcomeMessage> -->
        <!-- <Menu></Menu> -->
        <!-- <Video></Video> -->
        <!-- <Schedule></Schedule> -->
        <!-- <Pricing></Pricing> -->
        <!-- <div class="bg-amber-50">
            <Speakers></Speakers>
        </div> -->
        <!-- <Venue></Venue> -->
        <!-- <Sponsors></Sponsors> -->
    </div>
</template>

<script>
import Hero from './Hero.vue'
import WelcomeMessage from './WelcomeMessage.vue'
import Speakers from './Speakers.vue'
import Schedule from './SchedulesSingleDay.vue'
import Pricing from "./PricingCol.vue";
import TimerPage from "./Timer.vue";
import Venue from "./Venue.vue";
import AbstractCta from "./AbstractCta.vue";
export default {
    components: {
        Pricing,
        Hero,
        Speakers,
        Schedule,
        TimerPage,
        Venue,
        WelcomeMessage,
        AbstractCta,
    }
}
</script>
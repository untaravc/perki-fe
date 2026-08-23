<template>
    <div class="relative overflow-hidden" style="min-height: calc(100vh - 165px);">
        <!-- Decorative background blobs -->
        <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div
                class="absolute -top-24 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-violet-200 to-teal-200 opacity-60 blur-3xl">
            </div>
            <div
                class="absolute top-72 -left-32 h-80 w-80 rounded-full bg-gradient-to-br from-teal-200 to-sky-200 opacity-50 blur-3xl">
            </div>
        </div>

        <Hero></Hero>
        <!-- <EventCta></EventCta> -->
        <TimerPage></TimerPage>
        <AbstractCta></AbstractCta>
        <WelcomeMessage></WelcomeMessage>
        <!-- <Menu></Menu> -->
        <!-- <Video></Video> -->
        <Schedule></Schedule>
        <Pricing></Pricing>
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

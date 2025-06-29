<template>
    <div class="" style="min-height: calc(100vh - 133px);">
        <HeroCarousel></HeroCarousel>
        <!-- <EventCta></EventCta> -->
        <TimerPage></TimerPage>
        <Menu></Menu>
        <WelcomeMessage></WelcomeMessage>
        <!-- <Video></Video> -->
        <Schedule></Schedule>
        <!-- <Pricing></Pricing>
        <div class="bg-background-lightRed">
            <Speakers></Speakers>
        </div> -->
        <!-- <Sponsors></Sponsors> -->
        <Venue></Venue>
    </div>
</template>

<script>
// import Hero from './Hero.vue'
import HeroCarousel from './HeroCarousel.vue'
import WelcomeMessage from './WelcomeMessage.vue'
import Speakers from './Speakers.vue'
import Schedule from './Schedules.vue'
import Pricing from "./PricingCol.vue";
import TimerPage from "./Timer.vue";
import Venue from "./Venue2.vue";
import Menu from "./Menu2.vue"
export default {
    components: {
        Pricing,
        HeroCarousel,
        Speakers,
        Schedule,
        TimerPage,
        Venue,
        WelcomeMessage,
        Menu,
    },
    setup() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
}
</script>
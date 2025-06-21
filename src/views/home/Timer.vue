<template>
    <div class="px-2 mb-12">
        <div
            class="max-w-screen-lg mx-auto py-8 px-6 bg-gradient-to-r from-brand-red to-brand-orange rounded-2xl shadow-2xl relative overflow-hidden">
            <!-- Background Pattern -->
            <div class="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
            <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div class="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12">
            </div>

            <div class="relative z-10 grid grid-cols-12 gap-6 items-center">
                <div class="col-span-12 md:col-span-7 px-4 text-center md:text-left text-white">
                    <h2 class="font-bold text-3xl md:text-4xl mb-3 leading-tight">
                        Get Ready For The Event
                    </h2>
                    <div class="text-xl md:text-2xl font-semibold mb-3 text-white/90">
                        1st - 3rd of August 2025
                    </div>
                    <a href="https://maps.app.goo.gl/wf47tvH2gYBBrvVG7" target="_blank"
                        class="inline-flex items-center text-white/80 hover:text-white transition-colors duration-300 group">
                        <i
                            class="uil uil-location-pin-alt mr-2 group-hover:scale-110 transition-transform duration-300"></i>
                        <span class="underline decoration-2 underline-offset-4">Tentrem Hotel, Yogyakarta</span>
                        <i
                            class="uil uil-external-link-alt ml-2 text-sm group-hover:translate-x-1 transition-transform duration-300"></i>
                    </a>
                </div>

                <div class="col-span-12 md:col-span-5 flex justify-center items-center">
                    <div class="grid gap-6 grid-cols-4 w-full max-w-md">
                        <div
                            class="text-center p-4 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/25 transition-all duration-300 animate-float">
                            <div class="text-3xl md:text-4xl font-bold text-white mb-1" id="days">{{ days }}</div>
                            <div class="text-xs md:text-sm text-white/80 font-medium">Days</div>
                        </div>
                        <div class="text-center p-4 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/25 transition-all duration-300 animate-float"
                            style="animation-delay: 0.5s;">
                            <div class="text-3xl md:text-4xl font-bold text-white mb-1" id="hours">{{ hours }}</div>
                            <div class="text-xs md:text-sm text-white/80 font-medium">Hours</div>
                        </div>
                        <div class="text-center p-4 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/25 transition-all duration-300 animate-float"
                            style="animation-delay: 1s;">
                            <div class="text-3xl md:text-4xl font-bold text-white mb-1" id="minutes">{{ minutes }}</div>
                            <div class="text-xs md:text-sm text-white/80 font-medium">Minutes</div>
                        </div>
                        <div class="text-center p-4 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/25 transition-all duration-300 animate-float"
                            style="animation-delay: 1.5s;">
                            <div class="text-3xl md:text-4xl font-bold text-white mb-1" id="seconds">{{ seconds }}</div>
                            <div class="text-xs md:text-sm text-white/80 font-medium">Seconds</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    },
    methods: {
        countdown() {
            const countDownDate = new Date("2025-08-01 08:00:00").getTime();

            let now = new Date().getTime();
            let timeleft = countDownDate - now;

            let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

            this.days = Math.max(days, 0)
            this.hours = Math.max(hours, 0)
            this.minutes = Math.max(minutes, 0)
            this.seconds = Math.max(seconds, 0)
        }
    },
    created() {
        setInterval(() => {
            this.countdown()
        }, 1000)
    }
}
</script>
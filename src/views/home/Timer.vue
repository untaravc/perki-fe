<template>
    <div class="px-4 mb-6">
        <div
            class="max-w-screen-lg mx-auto rounded-3xl bg-white shadow-xl shadow-slate-200/70 ring-1 ring-slate-100 overflow-hidden">
            <div class="grid md:grid-cols-5">
                <div
                    class="md:col-span-2 p-6 md:p-8 flex flex-col justify-center bg-gradient-to-br from-violet-600 to-teal-500 text-white">
                    <div
                        class="inline-flex items-center gap-2 mb-3 w-fit rounded-full bg-white/15 py-1 px-4 text-xs font-medium tracking-wide uppercase">
                        Get Ready For The Event
                    </div>
                    <div class="text-2xl font-bold mb-3">1st &ndash; 3rd of October 2026</div>
                    <a href="https://maps.app.goo.gl/5u56URP6pNwnBpP86" target="_blank"
                        class="inline-flex items-center gap-1.5 text-sm text-white/85 hover:text-white transition-colors w-fit">
                        <unicon name="map-pin" fill="currentColor" width="16"></unicon>
                        <span class="underline underline-offset-2">Royal Ambarrukmo Hotel, Yogyakarta</span>
                    </a>
                </div>
                <div class="md:col-span-3 p-6 md:p-8 flex items-center justify-center">
                    <div class="grid grid-cols-4 gap-3 sm:gap-6 w-full">
                        <div class="text-center rounded-2xl bg-cream-100 ring-1 ring-amber-200/60 py-4 px-2">
                            <div class="text-3xl sm:text-4xl font-extrabold text-indigo-800 tabular-nums">{{ days }}</div>
                            <div class="text-xs sm:text-sm font-medium uppercase tracking-wide text-indigo-900/60 mt-1">Days</div>
                        </div>
                        <div class="text-center rounded-2xl bg-cream-100 ring-1 ring-amber-200/60 py-4 px-2">
                            <div class="text-3xl sm:text-4xl font-extrabold text-indigo-800 tabular-nums">{{ hours }}</div>
                            <div class="text-xs sm:text-sm font-medium uppercase tracking-wide text-indigo-900/60 mt-1">Hours</div>
                        </div>
                        <div class="text-center rounded-2xl bg-cream-100 ring-1 ring-amber-200/60 py-4 px-2">
                            <div class="text-3xl sm:text-4xl font-extrabold text-indigo-800 tabular-nums">{{ minutes }}</div>
                            <div class="text-xs sm:text-sm font-medium uppercase tracking-wide text-indigo-900/60 mt-1">Minutes</div>
                        </div>
                        <div class="text-center rounded-2xl bg-cream-100 ring-1 ring-amber-200/60 py-4 px-2">
                            <div class="text-3xl sm:text-4xl font-extrabold text-indigo-800 tabular-nums">{{ seconds }}</div>
                            <div class="text-xs sm:text-sm font-medium uppercase tracking-wide text-indigo-900/60 mt-1">Seconds</div>
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
            const countDownDate = new Date("2026-10-01 08:00:00").getTime();

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

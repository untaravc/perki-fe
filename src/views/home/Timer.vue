<template>
    <div class="px-2 mb-3">
        <div class="max-w-screen-lg m-auto py-6 bg-emerald-200 rounded-lg">
            <div class="grid grid-cols-3">
                <div class="col-span-3 md:col-span-1 text-center md:border-r-2 mb-4 border-blue-900">
                    <div class="font-semibold text-lg">Get Ready For The Event</div>
                    <div>18-24 October 2023</div>
                    <a href="https://goo.gl/maps/89THhNvmVHL5boFj7" target="_blank"
                        class="text-sm text-slate-500 underline cursor-pointer">Tentrem Hotel, Yogyakarta</a>
                </div>
                <div class="col-span-3 md:col-span-2 flex justify-center items-center">
                    <div class="grid gap:3 md:gap-12 grid-cols-4">
                        <div class="text-center">
                            <div class="text-4xl font-bold text-emerald-700">{{ days }}</div>
                            <div class="text-sm">Days</div>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl font-bold text-cyan-500">{{ hours }}</div>
                            <div class="text-sm">Hours</div>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl font-bold text-indigo-600">{{ minutes }}</div>
                            <div class="text-sm">Minutes</div>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl font-bold text-red-600">{{ seconds }}</div>
                            <div class="text-sm">Seconds</div>
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
            const countDownDate = new Date("2024-10-18 08:00:00").getTime();

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
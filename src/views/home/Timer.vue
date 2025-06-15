<template>
    <div class="px-2 mb-3">
        <div class="max-w-screen-lg m-auto py-6 gradient-bg rounded-lg">
            <div class="grid grid-cols-12">
                <div class="col-span-12 md:col-span-7 px-10 text-center md:text-left">
                    <div class="font-semibold text-2xl">Get Ready For The Event</div>
                    <div class="">1st - 3rd of August 2025</div>
                    <a href="https://maps.app.goo.gl/wf47tvH2gYBBrvVG7" target="_blank"
                        class="text-sm  underline cursor-pointer">Tentrem Hotel, Yogyakarta</a>
                </div>
                <div class="col-span-12 md:col-span-5 flex justify-center items-center">
                    <div class="grid gap-4 md:gap-12 grid-cols-4">
                        <div class="text-center rounded-lg">
                            <div class="text-4xl font-bold text-background-merah">{{ days }}</div>
                            <div class="text-sm">Days</div>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl font-bold text-primary-coklat">{{ hours }}</div>
                            <div class="text-sm">Hours</div>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl font-bold text-primary-oren">{{ minutes }}</div>
                            <div class="text-sm">Minutes</div>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl font-bold text-primary-hijau">{{ seconds }}</div>
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
<template>
    <div class="max-w-screen-lg m-auto pt-24 pb-12 px-2" style="min-height: calc(100vh - 133px);">
        <div class="text-4xl font-bold mb-1 text-center mb-3">
            ACCOMMODATION
        </div>
        <div class="mb-6 text-center">
            Tentrem Hotel Yogyakarta, P. Mangkubumi St. No.72A, Cokrodiningratan, Jetis, Yogyakarta
        </div>
        <div class="rounded-xl shadow-sm bg-blue-100 grid grid-cols-12">
            <div
                class="col-span-12 md:col-span-5 min-h-[300px]  bg-blue-300 rounded-t-xl md:rounded-tr-none md:rounded-l-xl bg-center bg-cover bg-no-repeat"
                style="background-image: url('/storage/img/tentrem-hotel.webp')">
            </div>
            <div class="col-span-12 md:col-span-7 md:rounded-r-xl p-4">
                <div>
                    <div class="text-2xl font-bold">Get Special Room Prices </div>
                    <div class="italic text-blue-800 text-sm">for JCU 2023 participants</div>
                </div>
                <div class="ml-8 mt-4">
                    <ol class="list-decimal">
                        <li>
                            <router-link to="/register" class="font-semibold underline text-blue-700">Register</router-link>
                            yourself at the JCU 2023 Event
                        </li>
                        <li>
                            After registering, you will get a link to claim the special price for the
                            <a href="https://goo.gl/maps/4LjYCwk7Ny3v4bh88" target="_blank" class="underline text-blue-700 italic">Tentrem Hotel</a>
                            rooms
                        </li>
                    </ol>
                </div>
                <div class="mt-4">
                    For more detailed information
                    <a href="https://wa.me/6285865064280?text=Bagaimana cara mendapatkan harga Room khusus, peserta JCU 2023?"
                       target="_blank"
                       class="italic text-blue-700">https://wa.me/6285865064280</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 8,
            data_content: []
        }
    },
    methods: {
        loadSpeaker() {
            this.apiGet('pub/speakers')
                .then((data) => {
                    this.data_content = data.result
                })
        }
    },
    created() {
        this.loadSpeaker()
    }
}
</script>
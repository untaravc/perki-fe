<template>
    <div class="max-w-screen-lg m-auto pt-12 pb-12 px-2 mt-20" id="venue">
        <div class="text-4xl font-bold text-center mb-3">
            ACCOMMODATION
        </div>
        <div class="mb-6 text-center">
            Tentrem Hotel Yogyakarta, P. Mangkubumi St. No.72A, Cokrodiningratan, Jetis, Yogyakarta
        </div>
        <div class="rounded-xl shadow-sm bg-blue-100 grid grid-cols-12 mb-6">
            <div class="col-span-12 md:col-span-5 min-h-[300px]  bg-blue-300 rounded-t-xl md:rounded-tr-none md:rounded-l-xl bg-center bg-cover bg-no-repeat"
                style="background-image: url('/storage/img/tentrem-hotel.webp')">
            </div>
            <div class="col-span-12 md:col-span-7 md:rounded-r-xl p-6">
                <div class="mb-4">
                    <div class="text-2xl font-bold">Get Special Room Prices </div>
                    <div class="italic text-blue-800 text-sm">for JCU 2024 participants</div>
                </div>
                <div class="ml-8 mb-4">
                    <ol class="list-decimal">
                        <li>
                            <router-link to="/register"
                                class="font-semibold underline text-blue-700">Register</router-link>
                            yourself at the JCU 2024 Event
                        </li>
                        <li>
                            After registering, you will get a link to claim the special price for the
                            <a href="https://goo.gl/maps/4LjYCwk7Ny3v4bh88" target="_blank"
                                class="underline text-blue-700 italic">Tentrem Hotel</a>
                            rooms
                        </li>
                    </ol>
                </div>
                <div class="mb-4">
                    For more detailed information
                    <a href="https://wa.me/6285865064280?text=Bagaimana cara mendapatkan harga Room khusus, peserta JCU 2024?"
                        target="_blank" class="italic text-blue-700">https://wa.me/6285865064280</a>
                </div>
            </div>
        </div>

        <div class="rounded-xl shadow-sm bg-blue-100 p-6">
            <div class="text-lg mb-2">Special Price</div>
            <table class="w-full text-center table mb-3">
                <tr>
                    <th>Guest Room Category</th>
                    <th>Single/Double</th>
                </tr>
                <tr>
                    <td>Deluxe Room</td>
                    <td>IDR 1.500.000 Nett/Room/Night</td>
                </tr>
                <tr>
                    <td>Premier Room</td>
                    <td>IDR 2.400.000 Nett/Room/Night</td>
                </tr>
                <tr>
                    <td>Executive Suite Room</td>
                    <td>IDR 5.500.000 Nett/Room/Night</td>
                </tr>
                <tr>
                    <td>Extra Bed</td>
                    <td>IDR 750.000 Nett/Room/Night</td>
                </tr>
            </table>
            <div class="">
                <b>The room rates quoted above are :</b>
                <ul class="list-disc ml-4">
                    <li>Inclusive of twenty one percent (21%) service charge and prevailing government taxes</li>
                    <li>Buffet breakfast at Kayumanis Cofee Shop for two (2) adults</li>
                    <li>Complimentary Internet</li>
                    <li>Welcome amenities</li>
                    <li>Complimentary Minibar</li>
                    <li>Drop Off to Malioboro with priror arrangement (Subject to availability)</li>
                    <li>Sport & Recreation facilities of swimming poll, Fitness Center, Tennis Court, and Kids
                        Playground</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
table {
    border-collapse: separate;
}

table,
td,
th {
    border: 1px solid lightblue;
    padding-top: 2px;
    padding-bottom: 2px;
}

table {
    border-collapse: collapse;
    border-color: blue;
}
</style>
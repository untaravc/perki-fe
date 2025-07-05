<template>
    <div class="max-w-screen-lg m-auto pt-12 pb-12 px-2 mt-20" id="venue">
        <div class="text-4xl font-bold text-center mb-3">
            ROOM INFORMATION
        </div>
        <div class="text-center">
            Tentrem Hotel Yogyakarta, P. Mangkubumi St. No.72A, Cokrodiningratan, Jetis, Yogyakarta
        </div>
        <div class="max-w-screen-lg m-auto pt-12 pb-12 px-2" id="venue">
            <div class="shadow-sm bg-background-lightRed grid grid-cols-12">
                <div class="col-span-12 md:col-span-7 min-h-[300px] bg-center bg-cover bg-no-repeat">
                    <GoogleMap api-key="AIzaSyCoQyl6WwUyIgDQgaMpIbPF9tD-uT4VBJA" class=""
                        style="width: 100%; height: 100%" :center="center" :zoom="14">
                        <Marker :options="markerOptions" />
                    </GoogleMap>
                </div>
                <div class="col-span-12 md:col-span-5 min-h-[300px] bg-blue-300 bg-center bg-cover bg-no-repeat rounded-b-xl md:rounded-bl-none md:rounded-r-xl "
                    style=" background-image:
                    url('https://firebasestorage.googleapis.com/v0/b/unt-dev.firebasestorage.app/o/Perki%2FJCU25%2Ftentrem-hotel.webp?alt=media&token=fb80169e-7812-4906-ade3-35315c5441bf');">
                </div>
            </div>
        </div>

        <div class="rounded-xl shadow-sm bg-red-100 p-6 mb-4">
            <div class="">
                Hotel Tentrem Yogyakarta is the splendid choice for you who are seeking a luxurious treat for your
                holiday. Get pampered with the most excellent services and make your holiday memorable by staying
                here.
                <br>
                <b>Deluxe Room</b>
                <br>
                Facilities :
                <ul class="list-disc ml-4">
                    <li>40 m2 Room Area</li>
                    <li>King Bed Size 200 x 200 /Double Twin Bed Size 140 x 200</li>
                    <li>Free Minibar</li>
                    <li>Free Breakfast for 2 Person</li>
                    <li>Complimentary Bottled water</li>
                    <li>Television</li>
                    <li>Desk</li>
                    <li>Air Conditioning</li>
                    <li>In-room Safe</li>
                    <li>Bathroom Amenties: Shower, Toiletries, hairdryer, Bathrobes</li>
                </ul>
                <div class="mb-4">Spicial Price for JCU Participant : IDR 1.850.000/Days</div>
                <div class="">
                    Select the room in <router-link to="/register"
                        class="font-semibold underline text-red-700">registration</router-link> form
                </div>
            </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-1 gap-4">
            <img class="rounded-xl shadow-sm"
                src="https://firebasestorage.googleapis.com/v0/b/unt-dev.firebasestorage.app/o/Perki%2FJCU25%2Fdeluxe-room-1.jpeg?alt=media&token=f3fe6cce-eca8-466d-9f6d-4f2bac26fb2f"
                alt="deluxe-room-1">
            <img class="rounded-xl shadow-sm"
                src="https://firebasestorage.googleapis.com/v0/b/unt-dev.firebasestorage.app/o/Perki%2FJCU25%2Fdeluxe-room-2.jpeg?alt=media&token=253e3f7a-2ae8-4126-85b6-f9b9342a6f25"
                alt="deluxe-room-2">
        </div>
    </div>
</template>

<script>
import { GoogleMap, Marker } from 'vue3-google-map'

export default {
    components: { GoogleMap, Marker },
    setup() {
        const center = { lat: -7.7740034, lng: 110.3684772 }
        const markerOptions = { position: center, title: 'Tentrem Hotel' }

        window.scrollTo({ top: 0, behavior: 'smooth' })

        return { markerOptions, center }
    }
}
</script>
<style>
.mapdiv {
    border-radius: 10px 0 0 10px;
}

@media (max-width: 768px) {
    .mapdiv {
        border-radius: 10px 10px 0 0;
    }
}
</style>
<template>
    <div class="max-w-screen-lg m-auto pt-12 pb-12 px-2" id="venue">
        <div class="text-4xl font-bold text-center mb-4">
            VENUE
        </div>
        <div class="mb-6 text-center"> Tentrem Hotel Yogyakarta, P. Mangkubumi St. No.72A, Cokrodiningratan, Jetis,
            Yogyakarta </div>
        <div class="rounded-xl shadow-sm bg-background-lightRed grid grid-cols-12">
            <div class="col-span-12 md:col-span-7 min-h-[300px] bg-center bg-cover bg-no-repeat">
                <GoogleMap api-key="AIzaSyCoQyl6WwUyIgDQgaMpIbPF9tD-uT4VBJA" class="" style="width: 100%; height: 100%"
                    :center="center" :zoom="15">
                    <Marker :options="markerOptions" />
                </GoogleMap>
            </div>
            <div class="col-span-12 md:col-span-5 min-h-[300px] bg-blue-300 rounded-b-xl md:rounded-bl-none md:rounded-r-xl bg-center bg-cover bg-no-repeat"
                style="background-image: url('https://firebasestorage.googleapis.com/v0/b/unt-dev.firebasestorage.app/o/Perki%2FJCU25%2Ftentrem-hotel.webp?alt=media&token=fb80169e-7812-4906-ade3-35315c5441bf');">
            </div>
        </div>
    </div>
</template>

<script>
import { GoogleMap, Marker } from 'vue3-google-map'

export default {
    components: { GoogleMap, Marker },
    setup() {
        const center = { lat: -7.7743194, lng: 110.3689792 }
        const markerOptions = { position: center, title: 'Tentrem Hotel' }

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
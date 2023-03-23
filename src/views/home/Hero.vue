<template>
    <div class="max-w-screen-lg m-auto pt-16">
        <div class="grid md:grid-cols-5 lg:gap-6 mb-12 mt-20">
            <div class="md:order-2 rounded-lg md:col-span-2 relative bg-contain h-96 bg-center bg-no-repeat w-full bg-[url('/storage/img/1st_announcement.jpg')]"></div>
            <div class="md:col-span-3 md:order-1">
                <div class="m-5 bg-blue-300 rounded-full py-1 px-8 italic text-sm inline-block">
                    Yogyakarta, 1-3 September 2023
                </div>
                <div class="mx-5 mb-5 text-4xl lg:text-6xl  font-bold text-blue-900">
                    Jogja Cardiology <br> Update
                </div>
                <div class="mx-5 mb-5 lg:w-9/12 text-lg text-slate-600 italic">
                    Integrating Technology In Cardiovascular Disease Management: Towards A Harmonic Fusion
                </div>
                <div class="mx-5 flex">
                    <router-link to="/schedule"
                                 class="text-blue-900 mr-4 inline-block items-center border border-blue-900 hover:bg-blue-900 hover:text-white font-medium rounded-full text-lg px-9 py-3 text-center">
                        <div class="mr-2">Jadwal</div>
                    </router-link>
                    <router-link to="/register"
                                 class="text-white inline-block flex items-center bg-blue-900 hover:bg-blue-800 font-medium rounded-full text-lg px-9 py-3 text-center">
                        <div class="mr-2">Daftar</div>
                        <unicon name="arrow-right" fill="white"></unicon>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
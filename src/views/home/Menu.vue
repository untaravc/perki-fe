<template>
    <div class="max-w-screen-lg m-auto grid grid-cols-4 gap-2 md:grid-cols-4 mt-16 mb-8">
        <div
            class="flex justify-center col-span-2 md:col-span-1 shadow-sm p-4 rounded-lg bg-gradient-to-bl from-purple-100 to-cyan-100">
            <a href="#schedule">
                <div class="flex justify-center mx-auto items-center w-16 h-16 rounded-full mb-2 bg-white">
                    <!-- <v-icon name="bi-table" scale="1.5" fill="#7f1f28" /> -->
                    <unicon name="schedule" fill="#cf9fa0" width="36px" height="36px"></unicon>
                </div>
                <div class="text-sm font-semibold text-center">
                    Schedule
                </div>
            </a>
        </div>
        <div
            class="flex justify-center col-span-2 md:col-span-1 shadow-sm p-4 rounded-lg  bg-gradient-to-bl from-purple-100 to-cyan-100">
            <a href="#package">
                <div class="flex justify-center mx-auto items-center w-16 h-16 rounded-full mb-2 bg-white">
                    <unicon name="pricetag-alt" fill="#0f4d89" width="36px" height="36px"></unicon>
                </div>
                <div class="text-sm font-semibold text-center">
                    Pricing
                </div>
            </a>
        </div>
        <div
            class="flex justify-center col-span-2 md:col-span-1 shadow-sm p-4 rounded-lg bg-gradient-to-bl from-purple-100 to-cyan-100">
            <a href="#speaker">
                <div class="flex justify-center mx-auto items-center w-16 h-16 rounded-full mb-2 bg-white">
                    <unicon name="podium" fill="#97262e" width="36px" height="36px"></unicon>
                </div>
                <div class="text-sm font-semibold text-center">
                    Speakers
                </div>
            </a>
        </div>
        <!-- <div
            class="flex justify-center col-span-2 md:col-span-1 shadow-sm p-4 rounded-lg bg-gradient-to-bl from-purple-100 to-cyan-100">
            <a href="#venue">
                <div class="flex justify-center mx-auto items-center w-16 h-16 rounded-full mb-2 bg-white">
                    <unicon name="location-pin-alt" fill="#ab585a" width="36px" height="36px"></unicon>
                </div>
                <div class="text-sm font-semibold text-center">
                    Accommodation
                </div>
            </a>
        </div> -->
        <!-- <div
            class="flex justify-center col-span-2 md:col-span-1 shadow-sm p-4 rounded-lg bg-gradient-to-bl from-purple-100 to-cyan-100">
            <router-link to="/abstracts">
                <div class="flex justify-center mx-auto items-center w-16 h-16 rounded-full mb-2 bg-white">
                    <unicon name="file-upload" fill="#ab585a" width="36px" height="36px"></unicon>
                </div>
                <div class="text-sm font-semibold text-center">
                    Abstract <br> Submission
                </div>
            </router-link>
        </div> -->
        <div
            class="flex justify-center col-span-2 md:col-span-1 shadow-sm p-4 rounded-lg bg-gradient-to-bl from-purple-100 to-cyan-100">
            <router-link to="/posters">
                <div class="flex justify-center mx-auto items-center w-16 h-16 rounded-full mb-2 bg-white">
                    <unicon name="file-upload" fill="#ab585a" width="36px" height="36px"></unicon>
                </div>
                <div class="text-sm font-semibold text-center">
                    Poster <br> Board
                </div>
            </router-link>
        </div>
    </div>
</template>
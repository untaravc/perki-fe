<template>
    <div class="max-w-screen-lg m-auto grid grid-cols-6 gap-2 md:grid-cols-5 mt-16 mb-8 px-4">
        <div class="flex justify-center col-span-2 md:col-span-1 shadow-sm p-4 rounded-lg bg-white">
            <a href="#schedule">
                <div class="flex justify-center mx-auto items-center w-16 h-16 rounded-full mb-2 bg-blue-100">
                    <v-icon name="bi-table" scale="1.5" fill="blue" />
                    <!-- <unicon name="schedule" fill="lighblue" width="36px" height="36px"></unicon> -->
                </div>
                <div class="text-sm font-semibold text-center">
                    Schedule
                </div>
            </a>
        </div>
        <div class="flex justify-center col-span-2 md:col-span-1 shadow-sm p-4 rounded-lg bg-white">
            <a href="#package">
                <div class="flex justify-center mx-auto items-center w-16 h-16 rounded-full mb-2 bg-blue-100">
                    <unicon name="pricetag-alt" fill="green" width="36px" height="36px"></unicon>
                </div>
                <div class="text-sm font-semibold font-light text-center">
                    Package
                </div>
            </a>
        </div>
        <div class="flex justify-center col-span-2 md:col-span-1 shadow-sm p-4 rounded-lg bg-white">
            <a href="#speaker">
                <div class="flex justify-center mx-auto items-center w-16 h-16 rounded-full mb-2 bg-blue-100">
                    <unicon name="podium" fill="#5850ec" width="36px" height="36px"></unicon>
                </div>
                <div class="text-sm font-semibold font-light text-center">
                    Speakers
                </div>
            </a>
        </div>
        <div class="flex justify-center col-span-3 md:col-span-1 shadow-sm p-4 rounded-lg bg-white">
            <a href="#venue">
                <div class="flex justify-center mx-auto items-center w-16 h-16 rounded-full mb-2 bg-blue-100">
                    <unicon name="location-pin-alt" fill="#e02523" width="36px" height="36px"></unicon>
                </div>
                <div class="text-sm font-semibold font-light text-center">
                    Accommodation
                </div>
            </a>
        </div>
        <div class="flex justify-center col-span-3 md:col-span-1 shadow-sm p-4 rounded-lg bg-white">
            <router-link to="/abstracts">
                <div class="flex justify-center mx-auto items-center w-16 h-16 rounded-full mb-2 bg-blue-100">
                    <unicon name="file-upload" fill="purple" width="36px" height="36px"></unicon>
                </div>
                <div class="text-sm font-semibold font-light text-center">
                    Abstract <br> Submission
                </div>
            </router-link>
        </div>

    </div>
</template>
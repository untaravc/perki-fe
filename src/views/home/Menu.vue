<template>
    <div class="max-w-screen-lg m-auto grid grid-cols-5 mt-16 mb-8">
        <div class="flex justify-center">
            <a href="#schedule">
                <div class="flex justify-center items-center w-16 h-16 rounded-full mb-2 bg-blue-100">
                    <unicon name="schedule" fill="lighblue" width="36px" height="36px"></unicon>
                </div>
                <div class="text-sm font-semibold font-light text-center">
                    Schedule
                </div>
            </a>
        </div>
        <div class="flex justify-center">
            <a href="#package">
                <div class="flex justify-center items-center w-16 h-16 rounded-full mb-2 bg-blue-100">
                    <unicon name="pricetag-alt" fill="green" width="36px" height="36px"></unicon>
                </div>
                <div class="text-sm font-semibold font-light text-center">
                    Package
                </div>
            </a>
        </div>
        <div class="flex justify-center">
            <a href="#speaker">
                <div class="flex justify-center items-center w-16 h-16 rounded-full mb-2 bg-blue-100">
                    <unicon name="podium" fill="#5850ec" width="36px" height="36px"></unicon>
                </div>
                <div class="text-sm font-semibold font-light text-center">
                    Speaker
                </div>
            </a>
        </div>
        <div class="flex justify-center">
            <a href="#venue">
                <div class="flex justify-center items-center w-16 h-16 rounded-full mb-2 bg-blue-100">
                    <unicon name="location-pin-alt" fill="#e02523" width="36px" height="36px"></unicon>
                </div>
                <div class="text-sm font-semibold font-light text-center">
                    Venue
                </div>
            </a>
        </div>
        <div class="flex justify-center">
            <router-link to="/abstracts">
                <div class="flex justify-center items-center w-16 h-16 rounded-full mb-2 bg-blue-100">
                    <unicon name="file-upload" fill="purple" width="36px" height="36px"></unicon>
                </div>
                <div class="text-sm font-semibold font-light text-center">
                    Abstract <br> Submission
                </div>
            </router-link>
        </div>

    </div>
</template>
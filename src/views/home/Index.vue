<template>
    <div class="bg-cyan-50">
        <Header></Header>
        <div class="container mx-auto">
            <div id="controls-carousel" class="relative" data-carousel="static">
                <!-- Carousel wrapper -->
                <div class="relative h-96 overflow-hidden md:h-[42rem]">
                    <!-- Item 1 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <div class="flex h-full items-center p-10 justify-evenly">
                            <div>
                                <h1 class="text-5xl mb-4 font-semibold font-jkt-sans">Jogja Cardiology Update</h1>
                                <h1 class="text-base font-semibold font-jkt-sans">In the border of cardiology oncology
                                    updated
                                    values</h1>
                                <button type="button"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
                            </div>
                            <div class="py-10">
                                <img src="https://placeimg.com/420/580/any" class="h-full rounded" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <div class="flex h-full items-center p-10 justify-evenly">
                            <div>
                                <h1 class="text-5xl font-semibold">Jogja Cardiology Update 1</h1>
                            </div>
                            <div class="py-10">
                                <img src="https://placeimg.com/420/580/any" class="h-full rounded" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <div class="flex h-full items-center p-10 justify-evenly">
                            <div>
                                <h1 class="text-5xl font-semibold">Jogja Cardiology Update 2</h1>
                            </div>
                            <div class="py-10">
                                <img src="https://placeimg.com/420/580/any" class="h-full rounded" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <div class="flex h-full items-center p-10 justify-evenly">
                            <div>
                                <h1 class="text-5xl font-semibold">Jogja Cardiology Update 2</h1>
                            </div>
                            <div class="py-10">
                                <img src="https://placeimg.com/420/580/any" class="h-full rounded" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Slider controls -->
                <button type="button"
                    class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev>
                    <span
                        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7">
                            </path>
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button"
                    class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next>
                    <span
                        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../../components/Header.vue'

export default {
    components: { Header }
}
</script>
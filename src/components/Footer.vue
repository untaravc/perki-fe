<template>
    <footer class="p-3 shadow md:px-4 md:py-6 bg-no-repeat bg-cover bg-center"
        style="background-image: url('https://firebasestorage.googleapis.com/v0/b/unt-dev.firebasestorage.app/o/Perki%2FJCU25%2Fbg-bottom.png?alt=media&token=33592c4f-b8a7-497d-b72e-2d79b26feb3a');">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://jcu.perki-jogja.com/" class="flex items-center mb-4 sm:mb-0">
                <img src="https://firebasestorage.googleapis.com/v0/b/unt-dev.firebasestorage.app/o/Perki%2FJCU25%2Flogo-jcu25.webp?alt=media&token=0a3ec7ae-e39c-4a00-8393-1f49d6a22131"
                    class="h-8 mr-3" alt="Jogja Foot Ulcer Meeting 2025" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm sm:mb-0 dark:text-gray-400 ">
                <li>
                    <router-link to="/privacy-policy" class="mr-4 hover:underline md:mr-6">Privacy Policy</router-link>
                </li>
                <li>
                    <router-link to="/licensing" class="mr-4 hover:underline md:mr-6 ">Licensing</router-link>
                </li>
                <li>
                    <router-link to="/contact-us" class="hover:underline active:color-white">Contact</router-link>
                </li>
            </ul>
        </div>
        <hr class="my-2 border-cyan-900 sm:mx-auto lg:my-4" />
        <span class="block text-sm sm:text-center text-white">
            <a href="https://perki-jogja.com/" class="hover:underline">Perki Jogja</a>. All Rights Reserved.
        </span>
    </footer>
</template>
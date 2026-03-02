<template>
    <footer class="p-3 shadow md:px-4 md:py-6 bg-top bg-gradient-to-br from-slate-200 to-slate-300">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://carvep.perki-jogja.com/" class="flex items-center mb-4 sm:mb-0">
                <img src="https://firebasestorage.googleapis.com/v0/b/unt-dev.firebasestorage.app/o/Perki%2Fjvm26%2Flogo-jvm26-h500.png?alt=media&token=9c472860-bb97-4168-ba1d-a46db23f1d64" class="h-8 mr-3" alt="Jogja Cardiology Update" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <router-link to="/contact-us" class="hover:underline active:color-white">Contact</router-link>
                </li>
            </ul>
        </div>
        <hr class="my-2 border-cyan-900 sm:mx-auto lg:my-4" />
        <span class="block text-sm sm:text-center">
            <a href="https://perki-jogja.com/" class="hover:underline">Perki Jogja</a>. All Rights Reserved.
        </span>
    </footer>
</template>
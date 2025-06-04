<template>
    <footer class="p-3 shadow md:px-4 md:py-6 bg-no-repeat bg-cover bg-center"
        style="background-image: url('https://firebasestorage.googleapis.com/v0/b/unt-dev.firebasestorage.app/o/Perki%2FJCU25%2Fbg-bottom.png?alt=media&token=62df8be5-c074-4d77-96ba-451f1755526b');">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://jcu.perki-jogja.com/" class="flex items-center mb-4 sm:mb-0">
                <img src="https://firebasestorage.googleapis.com/v0/b/unt-dev.firebasestorage.app/o/Perki%2FJCU25%2Flogo-jcu-25.webp?alt=media&token=95ab8bb9-bdc7-49d6-a11c-dc7db56760ce"
                    class="h-8 mr-3" alt="Jogja Foot Ulcer Meeting 2025" />
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm sm:mb-0 text-white">
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
        <hr class="my-2 border-white sm:mx-auto lg:my-4" />
        <span class="block text-sm sm:text-center text-white">
            <a href="https://perki-jogja.com/" class="hover:underline">Perki Jogja</a>. All Rights Reserved.
        </span>
    </footer>
</template>
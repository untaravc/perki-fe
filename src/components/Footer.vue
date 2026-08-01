<template>
    <footer class="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 px-4 py-8 md:px-8">
        <div class="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
            <div class="absolute -top-20 left-1/4 h-64 w-64 rounded-full bg-violet-500 opacity-20 blur-3xl"></div>
            <div class="absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-teal-500 opacity-20 blur-3xl"></div>
        </div>

        <div class="relative max-w-screen-lg mx-auto">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="https://carvep.perki-jogja.com/" class="flex items-center mb-4 sm:mb-0">
                    <div class="bg-white rounded-xl p-1.5 mr-3">
                        <img src="https://firebasestorage.googleapis.com/v0/b/unt-dev.firebasestorage.app/o/Perki%2FJCU26%2Flogo_jcu26.png?alt=media&token=35d5c58c-1c43-47fc-8fe0-9b611950eaba"
                            class="h-8 w-auto object-contain" alt="Jogja Cardiology Update" />
                    </div>
                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-white"></span>
                </a>
                <ul class="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 text-sm sm:mb-0 text-slate-300">
                    <li>
                        <router-link to="/privacy-policy" class="hover:text-white transition-colors">Privacy Policy</router-link>
                    </li>
                    <li>
                        <router-link to="/terms-conditions" class="hover:text-white transition-colors">Terms &amp; Conditions</router-link>
                    </li>
                    <li>
                        <router-link to="/contact-us" class="hover:text-white transition-colors">Contact</router-link>
                    </li>
                </ul>
            </div>
            <hr class="my-4 border-white/10" />
            <span class="block text-sm text-slate-400 sm:text-center">
                <a href="https://perki-jogja.com/" class="hover:text-white transition-colors">Perki Jogja</a>. All Rights Reserved.
            </span>
        </div>
    </footer>
</template>

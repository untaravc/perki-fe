<template>
    <nav class="px-2 sm:px-4 py-4 dark:bg-gray-900 bg-blue-200 fixed w-full z-20 top-0 left-0 dark:border-gray-600"
         :class="scrollPosition > 60 ? 'bg-blue-200 border-b border-blue-100' : ''">
        <div class="max-w-screen-lg m-auto flex flex-wrap items-center justify-between mx-auto">
            <a href="/" class="flex items-center">
                <img src="/storage/logo/jcu_color.png" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo">
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <div class="flex md:order-2">
                <router-link to="/register"
                             class="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-base px-8 py-2.5 text-center mr-3 md:mr-0">
                    <div class="flex items-center">
                        <div class="mr-2">Register</div>
                        <unicon name="arrow-right" fill="white"></unicon>
                    </div>
                </router-link>
                <button data-collapse-toggle="navbar-sticky" type="button" ref="toggle_menu"
                        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul
                    class="flex flex-col p-4 mt-4 border border-gray-900 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700 bg-white md:bg-transparent">
                    <li>
                        <router-link to="/" @click="toggleMenu"
                                     class="block home py-2 pl-3 pr-4 text-blue-900 rounded md:bg-transparent md:p-0"
                                     aria-current="page">Home
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/abstracts" @click="toggleMenu"
                                     class="block home py-2 pl-3 pr-4 text-blue-900 rounded md:bg-transparent md:p-0"
                                     aria-current="page">Abstracts
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/committee" @click="toggleMenu"
                                     class="block home py-2 pl-3 pr-4 text-blue-900 rounded md:bg-transparent md:p-0"
                                     aria-current="page">Committee
                        </router-link>
                    </li>
                    <li v-if="has_token">
                        <router-link to="/profile/events" @click="toggleMenu"
                                     class="block py-2 pl-3 pr-4 text-blue-900 rounded md:bg-transparent md:p-0"
                                     aria-current="page">My Account
                        </router-link>
                    </li>
                    <li v-if="!has_token">
                        <router-link to="/login" @click="toggleMenu"
                                     class="block py-2 pl-3 pr-4 text-blue-900 rounded md:bg-transparent md:p-0"
                                     aria-current="page">Sign In
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            scrollPosition: null,
            has_token: false,
        }
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        },
        toggleMenu(){
            let menu_btn = this.$refs.toggle_menu

            menu_btn.click()
        },
        checkToken() {
            let token = localStorage.getItem('perki_user_token');
            if (token) {
                this.has_token = true;
            } else {
                this.has_token = false;
            }
        }
    },
    created() {
        this.checkToken()
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
        this.emitter.on("update-header", ()=>{
            this.checkToken()
        });
    }
}
</script>
<style scoped>
.router-link-active:not(.home) {
    font-weight: 600;
    text-decoration: underline;
}

.router-link-exact-active {
    font-weight: 600;
    text-decoration: underline;
}
</style>
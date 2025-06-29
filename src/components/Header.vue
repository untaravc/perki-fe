<template>
    <nav class="px-2 sm:px-4 py-2 bg-center bg-cover bg-no-repeat fixed w-full z-20 top-0 left-0"
        style="background-image: url('https://firebasestorage.googleapis.com/v0/b/unt-dev.firebasestorage.app/o/Perki%2FJCU25%2Fbg-orange.webp?alt=media&token=e6c9dad4-d521-4d75-bb4f-bf036f71459a');">
        <div class="max-w-screen-lg m-auto flex flex-wrap items-center justify-between mx-auto">
            <div class="flex">
                <a href="/" class="flex items-center ml-4 sm:ml-0">
                    <img src="https://firebasestorage.googleapis.com/v0/b/unt-dev.firebasestorage.app/o/Perki%2FJCU25%2Flogo-jcu-2025-icon.webp?alt=media&token=fd4a5663-8954-4920-9eb5-e497d7274fe8"
                        class="h-10 mr-3 sm:h-12" alt="Jogja Cardiology Update 2025">
                </a>
                <img src="https://firebasestorage.googleapis.com/v0/b/unt-dev.firebasestorage.app/o/Perki%2FJCU25%2Flogo-only-jincartos.webp?alt=media&token=7bdf3127-cf35-458e-a006-7b8721ed25f0"
                    class="h-10 mr-3 sm:h-12 hidden md:block" alt="The 8th Jincartos">
                <img src="https://firebasestorage.googleapis.com/v0/b/unt-dev.firebasestorage.app/o/Perki%2FJCU25%2Flogo-only-inaph.webp?alt=media&token=a74b7d5c-da7b-4aad-adef-9f259441c6ec"
                    class="h-10 mr-3 sm:h-12 hidden md:block" alt="The 1st InaPH">
            </div>
            <div class="flex md:order-2">
                <router-link to="/register"
                    class="text-white flex items-center bg-background-merah hover:bg-red-800 font-normal md:font-medium rounded-full text-sm md:text-base px-4 md:px-8 py-1 md:py-2.5 text-center mr-3">
                    <div class="flex items-center">
                        <div>Register</div>
                    </div>
                </router-link>

                <!-- <div
                    class="text-white flex items-center bg-red-400 font-normal md:font-medium rounded-full text-sm md:text-base px-4 md:px-8 py-1 md:py-2.5 text-center mr-3">
                    Register
                </div> -->

                <router-link to="/profile/info" v-if="has_token" class="text-white bg-background-merah hover:bg-red-800 focus:ring-4
                        focus:outline-none focus:ring-red-600 md:font-medium rounded-full
                        text-base px-2.5 py-2.5 text-center mr-3 md:mr-0">
                    <div class="flex items-center">
                        <unicon name="user-md" fill="#ffffff" height="20px"></unicon>
                    </div>
                </router-link>

                <router-link to="/login" v-if="!has_token"
                    class="text-white flex items-center bg-background-merah hover:bg-red-800 font-normal md:font-medium rounded-full text-sm md:text-base px-4 md:px-8 py-1 md:py-2.5 text-center mr-3">
                    <div class="flex items-center">
                        <div>Login</div>
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
                            class="block home py-2 pl-3 pr-4 text-red-900 rounded md:bg-transparent md:p-0"
                            aria-current="page">Home
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/guidance" @click="toggleMenu"
                            class="block home py-2 pl-3 pr-4 text-red-900 rounded md:bg-transparent md:p-0"
                            aria-current="page">Information
                        </router-link>
                    </li>
                    <!-- <li>
                        <router-link to="/ecg-championship-info" @click="toggleMenu"
                            class="block ecg py-2 pl-3 pr-4 text-red-900 rounded md:bg-transparent md:p-0"
                            aria-current="page">ECG Championship
                        </router-link>
                    </li> -->
                    <!-- <li v-if="has_token">
                        <router-link to="/profile/events" @click="toggleMenu"
                            class="block py-2 pl-3 pr-4 text-red-900 rounded md:bg-transparent md:p-0"
                            aria-current="page">My Account
                        </router-link>
                    </li>
                    <li v-if="!has_token">
                        <router-link to="/login" @click="toggleMenu"
                            class="block py-2 pl-3 pr-4 text-red-900 rounded md:bg-transparent md:p-0"
                            aria-current="page">Sign In
                        </router-link>
                    </li> -->
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
        toggleMenu() {
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
        },
        randGuest(length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            let counter = 0;
            while (counter < length) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                counter += 1;
            }
            return result;
        },
        guestLog() {
            let guest_token = localStorage.getItem('perki_app_guest_token');
            if (!guest_token) {
                guest_token = this.randGuest(20)
                localStorage.setItem('perki_app_guest_token', guest_token);
            }

            this.authPost('pub/guest', {
                perki_app_guest_token: guest_token
            })
        }
    },
    created() {
        this.checkToken()
        this.guestLog()
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
        this.emitter.on("update-header", () => {
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
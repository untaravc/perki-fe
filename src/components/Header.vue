<template>
    <nav class="px-2 sm:px-4 py-2 bg-white/90 backdrop-blur-md border-b border-slate-100 fixed w-full z-20 top-0 left-0">
        <div class="max-w-screen-lg m-auto flex flex-wrap items-center justify-between mx-auto">
            <a href="/" class="flex items-center ml-2 sm:ml-0 transition-opacity hover:opacity-80">
                <img src="https://firebasestorage.googleapis.com/v0/b/unt-dev.firebasestorage.app/o/Perki%2FJCU26%2Flogo_jcu26.png?alt=media&token=35d5c58c-1c43-47fc-8fe0-9b611950eaba"
                    class="h-12 md:h-20 w-auto object-contain mr-3"
                    alt="Jogja Cardiology Update 2026 Logo">
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <div class="flex md:order-2 items-center">
                <router-link to="/register"
                    class="flex items-center text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none
                    focus:ring-blue-200 font-semibold uppercase tracking-wide rounded-full text-sm md:text-base px-4 md:px-8 py-1 md:py-2.5 text-center mr-3 transition-colors duration-200">
                    Register
                </router-link>
                <router-link to="/profile/info" v-if="has_token"
                    class="flex items-center justify-center h-9 w-9 md:h-11 md:w-11 text-violet-700 bg-violet-50 hover:bg-violet-100 focus:ring-4
                        focus:outline-none focus:ring-violet-200 rounded-full text-center mr-3 md:mr-0 transition-colors">
                    <unicon name="user-md" fill="currentColor" height="20px"></unicon>
                </router-link>
                <router-link to="/login" v-if="!has_token"
                    class="text-slate-700 bg-white border border-slate-200 hover:border-violet-300 hover:text-violet-700 focus:ring-4 focus:outline-none focus:ring-violet-100 font-medium rounded-full text-base px-8 py-2.5 text-center mr-3 md:mr-0 transition-colors">
                    <div class="flex items-center">
                        <div>Login</div>
                    </div>
                </router-link>
                <button data-collapse-toggle="navbar-sticky" type="button" ref="toggle_menu"
                    class="inline-flex items-center p-2 text-sm text-slate-500 rounded-lg md:hidden hover:bg-violet-50 hover:text-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-200"
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
                    <!-- <li>
                        <router-link to="/" @click="toggleMenu"
                            class="block home py-2 pl-3 pr-4 text-blue-900 rounded md:bg-transparent md:p-0"
                            aria-current="page">Home
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/guidance" @click="toggleMenu"
                            class="block home py-2 pl-3 pr-4 text-blue-900 rounded md:bg-transparent md:p-0"
                            aria-current="page">Guidance
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

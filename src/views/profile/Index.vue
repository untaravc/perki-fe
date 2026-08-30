<template>
    <div class="relative overflow-hidden max-w-screen-lg mx-auto pt-16 px-4">
        <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div
                class="absolute -top-24 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-violet-200 to-teal-200 opacity-60 blur-3xl">
            </div>
            <div
                class="absolute top-72 -left-32 h-80 w-80 rounded-full bg-gradient-to-br from-teal-200 to-sky-200 opacity-50 blur-3xl">
            </div>
        </div>

        <div class="py-8" style="min-height: calc(100vh - 195px);">
            <div class="flex py-6">
                <div class="text-2xl font-bold text-indigo-900">
                    My Account
                </div>
            </div>
            <div class="grid gap-4 md:grid-cols-4">
                <div>
                    <div class="p-4 bg-white rounded-3xl shadow-xl shadow-slate-200/70 ring-1 ring-slate-100">
                        <router-link to="/profile/info" @click="active = 'info'"
                            class="flex items-center gap-2 my-1 px-3 py-2.5 rounded-xl cursor-pointer transition-colors"
                            :class="active === 'info' ? 'bg-violet-50 text-violet-700 font-medium' : 'text-slate-600 hover:bg-slate-50'">
                            <unicon name="user" height="20px" :fill="active === 'info' ? '#7c3aed' : '#94a3b8'"></unicon>
                            <div>Profil</div>
                        </router-link>
                        <!-- <router-link to="/profile/events" class="flex my-3 cursor-pointer" @click="active = 'events'">
                            <unicon name="youtube" height="20px" :fill="active === 'events' ? '#7f1f28' : ''"></unicon>
                            <div class="ml-2">My Event</div>
                        </router-link> -->
                        <router-link to="/profile/transactions" @click="active = 'transactions'"
                            class="flex items-center justify-between my-1 px-3 py-2.5 rounded-xl cursor-pointer transition-colors"
                            :class="active === 'transactions' ? 'bg-violet-50 text-violet-700 font-medium' : 'text-slate-600 hover:bg-slate-50'">
                            <div class="flex items-center gap-2">
                                <unicon name="shopping-cart" height="20px"
                                    :fill="active === 'transactions' ? '#7c3aed' : '#94a3b8'"></unicon>
                                <div>Transaction</div>
                            </div>
                            <div class="bg-slate-100 text-slate-500 text-xs flex items-center py-0.5 px-2 rounded-full">
                                {{ pending_transaction }}
                            </div>
                        </router-link>

                        <router-link to="/profile/abstracts" @click="active = 'abstracts'"
                            class="flex items-center justify-between my-1 px-3 py-2.5 rounded-xl cursor-pointer transition-colors"
                            :class="active === 'abstracts' ? 'bg-violet-50 text-violet-700 font-medium' : 'text-slate-600 hover:bg-slate-50'">
                            <div class="flex items-center gap-2">
                                <unicon name="file-upload" height="20px" :fill="active === 'abstracts' ? '#7c3aed' : '#94a3b8'">
                                </unicon>
                                <div>Abstracts</div>
                            </div>
                            <div class="bg-slate-100 text-slate-500 text-xs flex items-center py-0.5 px-2 rounded-full">
                                {{ abstracts }}
                            </div>
                        </router-link>

                        <div class="border-t border-slate-100 mt-2 pt-2">
                            <div class="flex items-center gap-2 px-3 py-2.5 rounded-xl cursor-pointer text-red-500 hover:bg-red-50 transition-colors"
                                @click="logout">
                                <unicon name="signout" height="20px" fill="currentColor"></unicon>
                                <div>Logout</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md:col-span-3">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            active: '',
            pending_transaction: 0,
            abstracts: 0,
        }
    },
    methods: {
        logout() {
            if (confirm('Logout?')) {
                this.authPost('pub/logout')
                    .then((data) => {
                        if (data.success) {
                            localStorage.removeItem('perki_user_token')
                            this.$router.push('/')
                        }
                        this.emitter.emit("update-header");
                    })
            }
        },
        loadData() {
            this.authGet('pub/pending-transaction-count?section=jcu26')
                .then((data) => {
                    this.pending_transaction = data.result.pending_transaction
                    this.abstracts = data.result.abstracts
                })
        }
    },
    created() {
        this.loadData()
        this.emitter.emit("update-header");
    },
    mounted() {
        this.emitter.on("update-sidebar-counter", () => {
            this.loadData()
        });
    }
}
</script>
<style>
.router-link-exact-active {
    color: #7c3aed;
    font-weight: 500;
}
</style>

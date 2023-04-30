<template>
    <div class="max-w-screen-lg m-auto pt-16">
        <div class="py-8 px-2" style="min-height: calc(100vh - 195px);">
            <div class="flex py-6">
                <div>
                    My Account
                </div>
            </div>
            <div class="grid gap-4 md:grid-cols-4">
                <div>
                    <div class="p-6 border-slate-100 bg-white rounded-xl">
                        <router-link to="/profile/info" class="flex my-3 cursor-pointer" @click="active = 'info'">
                            <unicon name="user" height="20px" :fill="active === 'info' ? 'darkblue' : ''"></unicon>
                            <div class="ml-2">Profil</div>
                        </router-link>
                        <router-link to="/profile/events" class="flex my-3 cursor-pointer" @click="active = 'events'">
                            <unicon name="youtube" height="20px" :fill="active === 'events' ? 'blue' : ''"></unicon>
                            <div class="ml-2">My Event</div>
                        </router-link>
                        <router-link to="/profile/transactions" class="flex justify-between my-3 cursor-pointer"
                                     @click="active = 'transactions'">
                            <div class="flex">
                                <unicon name="shopping-cart" height="20px"
                                        :fill="active === 'transactions' ? 'darkblue' : ''"></unicon>
                                <div class="ml-2">Transaction</div>
                            </div>
                            <div class="bg-slate-200 text-xs flex items-center py-0 px-2 rounded-full">{{pending_transaction}}</div>
                        </router-link>
                        <div class="flex my-3 cursor-pointer" @click="logout">
                            <unicon name="signout" height="20px"></unicon>
                            <div class="ml-2">Logout</div>
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
        }
    },
    methods: {
        logout() {
            if (confirm('Logout?')) {
                this.authPost('pub/logout')
                    .then((data) => {
                        if (data.status) {
                            localStorage.removeItem('perki_user_token')
                            this.$router.push('/')
                        }
                        this.emitter.emit("update-header");
                    })
            }
        },
        loadData() {
            this.authGet('pub/pending-transaction-count')
                .then((data) => {
                    this.pending_transaction = data.result.pending_transaction
                })
        }
    },
    created() {
        this.loadData()
    }
}
</script>
<style>
.router-link-exact-active {
    color: darkblue;
    font-weight: 500;
}
</style>
<template>
    <div class="max-w-screen-lg m-auto pt-24 pb-12 px-2" id="package">
        <div class="text-4xl text-blue-900 font-bold mb-1 text-center">
            PACKAGE
        </div>
        <div class="text-small text-slate-600 mb-5 text-center">
            Register yourself and get a special Early Bird price until <b>31st of August</b>
        </div>
        <div class="grid grid-cols-3 bg-gradient-to-bl from-purple-100 to-cyan-100">
            <div class="md:col-span-2 col-span-3 shadow  p-5 rounded-l-none md:rounded-l-lg">
                <div class="text-lg mb-2">
                    Packages:
                </div>
                <div class="grid grid-cols-3 mb-3 text-white">
                    <div @click="select(pricing.platinum, 1)"
                        :class="selected_index === 1 ? 'from-cyan-400 to-purple-400' : 'from-purple-800 to-cyan-800'"
                        class="shadow p-3 col-span-3 font-medium md:col-span-1 bg-gradient-to-r cursor-pointer md:rounded-l-lg">
                        {{ pricing.platinum.name }}
                    </div>
                    <div @click="select(pricing.gold, 2)"
                        :class="selected_index === 2 ? 'from-cyan-500 to-purple-500' : 'from-purple-800 to-cyan-800'"
                        class="shadow p-3 col-span-3 font-medium md:col-span-1 bg-gradient-to-r cursor-pointer">
                        {{ pricing.gold.name }}
                    </div>
                    <div @click="select(pricing.bronze, 3)"
                        :class="selected_index === 3 ? 'from-cyan-500 to-purple-500' : 'from-purple-800 to-cyan-800'"
                        class="shadow p-3 col-span-3 font-medium md:col-span-1 bg-gradient-to-r cursor-pointer md:rounded-r-lg">
                        {{ pricing.bronze.name }}
                    </div>
                </div>
                <div>
                    {{ selected.name }} detail:
                    <div class="disc" v-html="selected.desc"></div>
                </div>
            </div>
            <div
                class="md:col-span-1  col-span-3 border-l  border-slate-500 shadow p-5 rounded-r-none md:rounded-r-lg ">
                <div class="text-lg font-bold mb-3">{{ selected.name }} </div>
                <div v-if="selected.price_stdn">
                    <div class="text-base mb-1 italic">Medical Student</div>
                    <div class="text-3xl font-bold text-blue-700 mb-2">
                        Rp {{ $filters.currency(selected.price_stdn) }}
                    </div>
                </div>
                <div class="text-base mb-1 italic">General Practitioner</div>
                <div class="text-3xl font-bold text-blue-700 mb-2">
                    Rp {{ $filters.currency(selected.price_drgn) }}
                </div>
                <div class="italic border-b mb-3 border-slate-500" v-if="selected.price_drgn_eb > 0">
                    Early Bird:
                    <span class="font-bold text-lime-700">Rp {{ $filters.currency(selected.price_drgn_eb) }}</span>
                </div>
                <div class="text-base mb-1 italic">Specialist</div>
                <div class="text-3xl font-bold text-slate-900 mb-2">
                    Rp {{ $filters.currency(selected.price_drsp) }}
                </div>
                <div class="italic mb-4" v-if="selected.price_drsp_eb > 0">
                    Early Bird:
                    <span class="font-bold text-lime-500">Rp {{ $filters.currency(selected.price_drsp_eb) }}</span>
                </div>
                <router-link to="/register" class="rounded-lg bg-pos-0 block text-white 
                bg-gradient-to-r from-purple-600 to-cyan-600 p-3 mt-3 w-full font-semibold text-center
                    hover:from-cyan-500 hover:to-purple-500 cursor-pointer">
                    Register Now
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pricing: {
                platinum: {},
                gold: {},
                bronze: {},
            },
            selected: {},
            selected_index: 1,
        }
    },
    methods: {
        loadData() {
            this.apiGet('pub/pricing', { ref: 2024 })
                .then((data) => {
                    this.pricing = data.result

                    this.selected = this.pricing.platinum
                    this.selected_index = 1
                })
        },
        select(data, idx) {
            this.selected = data
            this.selected_index = idx
        }
    },
    created() {
        this.loadData()
    }
}
</script>

<style>
.disc ul li {
    list-style-type: disc;
    margin-left: 16px;
}
</style>
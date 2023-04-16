<template>
    <div class="max-w-screen-lg m-auto pt-24 pb-12">
        <div class="text-4xl text-blue-900 font-bold mb-1 text-center">
            PAKET HARGA
        </div>
        <div class="text-small text-slate-600 mb-5 text-center">
            Segera daftarkan diri anda dan dapatkan harga spesial Early Bird hingga 31 Juli 2023
        </div>
        <div class="grid grid-cols-3">
            <div class="col-span-2 shadow bg-blue-900 p-5 rounded-l-lg text-white">
                <div class="text-lg mb-2">
                    Pilihan Paket
                </div>
                <div class="grid grid-cols-3 mb-3">
                    <div @click="select(pricing.ws_fd, 1)" :class="selected_index === 1 ? 'bg-blue-600' : 'bg-blue-800'"
                        class="shadow p-3 border-blue-600 border cursor-pointer first:rounded-l-lg">
                        {{ pricing.ws_fd.name }}
                    </div>
                    <div @click="select(pricing.sympo_ws, 2)" :class="selected_index === 2 ? 'bg-blue-600' : 'bg-blue-800'"
                        class="shadow p-3 border-blue-600 border cursor-pointer">
                        {{ pricing.sympo_ws.name }}
                    </div>
                    <div @click="select(pricing.all_event, 3)" :class="selected_index === 3 ? 'bg-blue-600' : 'bg-blue-800'"
                        class="shadow p-3 border-blue-600 border cursor-pointer last:rounded-r-lg">
                        {{ pricing.all_event.name }}
                    </div>
                </div>
                <div>
                    {{selected.name}} detail:
                    <div class="text-slate-300">
                        {{selected.desc}}
                    </div>
                </div>
            </div>
            <div class="col-span-1 border-l  border-slate-500 shadow bg-blue-900 p-5 rounded-r-lg text-white">
                <div class="text-lg mb-3">{{selected.name}} </div>
                <div class="text-base mb-1 italic">Dokter Umum</div>
                <div class="text-3xl font-bold text-blue-200 mb-2">
                    Rp {{$filters.currency(selected.price_drgn)}}
                </div>
                <div class="italic border-b mb-3 border-slate-500" v-if="selected.price_drgn_eb > 0">
                    Early Bird:
                    <span class="font-bold text-lime-400">Rp {{$filters.currency(selected.price_drgn_eb)}}</span>
                </div>
                <div class="text-base mb-1 italic">Dokter Spesialis</div>
                <div class="text-3xl font-bold text-slate-300 mb-2">
                    Rp {{$filters.currency(selected.price_drsp)}}
                </div>
                <div class="italic mb-4" v-if="selected.price_drsp_eb > 0">
                    Early Bird:
                    <span class="font-bold text-lime-400">Rp {{$filters.currency(selected.price_drsp_eb)}}</span>
                </div>
                <div class="rounded-lg bg-blue-700 p-3 font-semibold text-center hover:bg-blue-600 cursor-pointer">
                    Daftar Sekarang
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pricing: {
                ws_fd: {},
                sympo_ws: {},
                all_event: {},
            },
            selected:{},
            selected_index: 1,
        }
    },
    methods: {
        loadData() {
            this.apiGet('pub/pricing')
                .then((data) => {
                    this.pricing = data.result

                    this.selected = this.pricing.ws_fd
                    this.selected_index = 1
                })
        },
        select(data, idx){
            this.selected = data
            this.selected_index = idx
        }
    },
    created() {
        this.loadData()
    }
}
</script>
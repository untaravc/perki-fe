<template>
    <div class="max-w-screen-lg m-auto pt-24">
        <div class="p-6 border-slate-100 bg-white rounded-xl">
            <div class="grid gap-4 md:grid-cols-3">
                <div class="">
                    <div class="font-semibold text-lg min-h-[56px]">
                        Symposium & <br>
                        Saturday Workshop
                    </div>
                    <div class="rounded-tl-lg rounded-tr-lg bg-blue-50 p-4 border cursor-pointer hover:bg-blue-100"
                         @click="selectSympo(events.symposium.id)">
                        <div class="mb-3">
                            <div class="font-semibold text-blue-900 flex">
                                {{ events.symposium.name }}
                            </div>
                            <div class="text-xs mb-1">
                                Friday-Saturday, Sep 1st - 2nd, 08:00
                            </div>
                            <div class="text-xs mb-1 italic">
                                {{ events.symposium.title }}
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="text-sm font-semibold text-blue-700 text-right">
                                Rp {{ $filters.currency(events.symposium.price) }}
                            </div>
                            <div>
                                <unicon v-if="form.symposium === events.symposium.id " name="check-square" width="35"
                                        height="35"></unicon>
                                <unicon v-if="form.symposium == null" name="square" width="35" height="35"></unicon>
                            </div>
                        </div>
                        <div class="text-xs text-red-600"
                             v-if="form.workshop_half_day == null && form.symposium != null">
                            * Please select Saturday Workshop
                        </div>
                    </div>
                    <div v-for="half_day in events.half_day" @click="selectHalfDay(half_day.id, events.symposium.id)"
                         class="bg-blue-50 p-4 border last:rounded-bl-lg last:rounded-br-lg cursor-pointer hover:bg-blue-100 ">
                        <div class="mb-3">
                            <div class="font-semibold text-blue-900 flex">
                                <unicon v-if="form.workshop_half_day === half_day.id" name="check-square" width="20"
                                        height="20"
                                        fill="#243776"></unicon>
                                <unicon v-if="form.workshop_half_day !== half_day.id" name="square" width="20"
                                        height="20"
                                        fill="#243776"></unicon>
                                <div class="ml-1">{{ half_day.name }}</div>
                            </div>
                            <div class="text-xs mb-1">
                                {{ $filters.formatDayDateTime(half_day.date_start) }}
                            </div>
                            <div class="text-xs mb-1 italic">
                                {{ half_day.title }}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="">
                    <div class="font-semibold text-lg min-h-[56px]">Sunday Workshop</div>
                    <div v-for="full_day in events.full_day" @click="selectFullDay(full_day.id)"
                         class="rounded-lg bg-blue-50 p-4 border cursor-pointer hover:bg-blue-100 mb-3">
                        <div class="mb-3">
                            <div class="font-semibold text-blue-900 flex">
                                {{ full_day.name }}
                            </div>
                            <div class="text-xs mb-1">
                                {{ $filters.formatDayDateTime(full_day.date_start) }}
                            </div>
                            <div class="text-xs mb-1 italic">
                                {{ full_day.title }}
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="text-sm font-semibold text-blue-700 text-right">
                                Rp {{ $filters.currency(full_day.price) }}
                            </div>
                            <div>
                                <unicon v-if="form.workshop_full_day === full_day.id" name="check-square" width="35"
                                        height="35"></unicon>
                                <unicon v-if="form.workshop_full_day !== full_day.id" name="square" width="35"
                                        height="35"></unicon>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="font-semibold text-lg min-h-[56px]">Pembayaran</div>
                    <div class="px-3 py-4 border rounded-lg">
                        <div class="border-b">
                            <div class="text-xs">
                                Transaction Number:
                            </div>
                            <div class="text-sm italic mb-2">
                                {{ pricing.transaction.number }}
                            </div>
                            <div class="text-xs">
                                Name:
                            </div>
                            <div class="text-sm italic mb-2">
                                {{ pricing.transaction.user_name }}
                            </div>
                            <div class="text-xs">
                                Phone:
                            </div>
                            <div class="text-sm italic mb-2">
                                {{ pricing.transaction.user_phone }}
                            </div>
                            <div class="text-xs">
                                Email:
                            </div>
                            <div class="text-sm italic mb-2">
                                {{ pricing.transaction.user_email }}
                            </div>
                        </div>

                        <div class="font-semibold mt-5 mb-2">
                            Voucher Code
                        </div>
                        <input type="text" id="institution" placeholder="input voucher code"
                               v-model="voucher"
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                        <div class="text-right mt-3">
                            <div @click="calculatePrice('check')" class="text-white cursor-pointer inline-block mb-2 bg-slate-500 hover:bg-slate-600 rounded-lg text-base px-3 py-1 text-center">
                                Check
                            </div>
                        </div>

                        <div class="font-semibold mt-5 mb-2">
                            Transaction Details
                        </div>
                        <div class="text-sm" v-if="pricing.count > 0">
                            <div v-for="price in pricing.items">
                                <div class="flex justify-between" v-if="price.price !== 0"
                                     :class="price.name === 'Total' ? 'border-t border-slate-800 font-semibold' : ''">
                                    <div>{{ price.name }}</div>
                                    <div>{{ $filters.currency(price.price) }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="text-sm" v-if="pricing.count === 0">
                            <div class="flex justify-between">
                                <div>Event</div>
                                <div>0</div>
                            </div>
                            <div class="flex justify-between border-t border-slate-800 font-semibold">
                                <div>Total</div>
                                <div>0</div>
                            </div>
                        </div>
                        <div class="mt-5">
                            <button @click="toPayment"
                                    class="text-white w-full mb-2 bg-blue-900 hover:bg-blue-800 font-medium rounded-full text-base px-8 py-2.5 text-center">
                                Process to Payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: 2,
            voucher:'',
            form: {
                symposium: null,
                workshop_full_day: null,
                workshop_half_day: null,
            },
            events: {
                full_day: [],
                half_day: [],
                symposium: [],
            },
            pricing: {
                transaction: '',
                items: '',
                count: '',
            }
        }
    },
    methods: {
        loadData() {
            this.authGet('pub/events-list', {
                transaction_number: this.$route.query.transaction_number
            })
                .then((data) => {
                    this.events = data.result
                })
        },
        calculatePrice(mode = 'calculate') {
            this.authPost('pub/calculate-price', {
                items: this.form,
                voucher: this.voucher,
                transaction_number: this.$route.query.transaction_number
            })
                .then((data) => {
                    this.pricing = data.result
                    if(data.message){
                        if(mode === "check"){
                            this.toaster({title: data.message, icon: 'none'})
                        }
                    }
                })
        },
        selectSympo(id) {
            this.form.symposium === id ? this.form.symposium = null : this.form.symposium = id
            if (this.form.symposium == null) {
                this.form.workshop_half_day = null
            }
            this.calculatePrice()
        },
        selectFullDay(id) {
            this.form.workshop_full_day === id ? this.form.workshop_full_day = null : this.form.workshop_full_day = id
            this.calculatePrice()
        },
        selectHalfDay(id, symposium_id){
            this.form.symposium = symposium_id
            this.form.workshop_half_day = id
            this.calculatePrice()
        },
        toPayment(){
            this.authPost('pub/create-payment',{
                items: this.form,
                voucher: this.voucher,
                transaction_number: this.$route.query.transaction_number
            }).then((data)=>{
                    if(data.status){
                        this.$router.push('/payment?transaction_number=' + this.$route.query.transaction_number)
                        this.emitter.emit("update-header");
                    } else {
                        this.toaster({title: data.message, icon: 'warning'})
                    }
                })
        }
    },
    created() {
        this.loadData()
        this.calculatePrice()
    }
}
</script>
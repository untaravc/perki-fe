<template>
    <div class="max-w-screen-lg m-auto pt-24" style="min-height: calc(100vh - 133px);">
        <div class="p-6 border-slate-100 bg-white rounded-xl">
            <div class="mb-4 grid grid-cols-3 gap-4">
                <div @click="selectPackage('platinum')" v-if="data_raw.job_type !== 'MHSA'"
                     class="bg-blue-800 p-4 rounded-lg flex justify-between items-center cursor-pointer">
                    <div class="font-bold text-white">Platinum</div>
                    <unicon v-if="package === 'platinum'" fill="white" name="check-square" width="30"
                            height="30"></unicon>
                    <unicon v-else fill="white" name="square" width="30" height="30"></unicon>
                </div>
                <div @click="selectPackage('gold')"
                     class="bg-yellow-300 p-4 rounded-lg flex justify-between items-center  cursor-pointer">
                    <div class="font-bold">Gold</div>
                    <unicon v-if="package === 'gold'" name="check-square" width="30"
                            height="30"></unicon>
                    <unicon v-else name="square" width="30" height="30"></unicon>
                </div>
                <div @click="selectPackage('add-on')"
                     class="border border-blue-800 p-4 rounded-lg flex justify-between items-center cursor-pointer">
                    <div class="font-bold text-blue-800">Add-On</div>
                    <unicon v-if="package === 'add-on'" name="check-square" width="30"
                            height="30"></unicon>
                    <unicon v-else fill="darkblue" name="square" width="30" height="30"></unicon>
                </div>
            </div>
            <div class="grid gap-4 md:grid-cols-3">
                <div class="col-span-2">
                    <div v-if="data_raw.symposium"
                         class="rounded-lg bg-blue-200 p-4 border cursor-pointer hover:bg-blue-100 mb-2">
                        <div class="mb-3">
                            <div class="font-semibold text-blue-900 flex">
                                <unicon name="check-square" width="20"
                                        height="20"
                                        fill="#243776"></unicon>
                                <div class="ml-1">{{ events.symposium.name }}</div>
                            </div>
                            <div class="text-xs mb-1">
                                Saturday-Sunday, Sep 2nd - 3rd, 08:00-15:00
                            </div>
                            <div class="text-xs mb-1 italic">
                                {{ events.symposium.title }}
                            </div>
                        </div>
                    </div>

                    <div class="col-span-2 grid gap-2 md:grid-cols-2" v-if="data_raw.workshop">
                        <div>
                            <div v-for="morning in events.morning_workshop" @click="selectMorning(morning.id)"
                                 :class="form.morning_workshop === morning.id ? 'bg-blue-200' : 'bg-blue-50'"
                                 class="p-4 border first:rounded-t-lg last:rounded-bl-lg last:rounded-br-lg cursor-pointer hover:bg-blue-200 ">
                                <div class="mb-3">
                                    <div class="font-semibold text-blue-900 flex">
                                        <unicon v-if="form.morning_workshop === morning.id" name="check-square"
                                                width="20"
                                                height="20"
                                                fill="#243776"></unicon>
                                        <unicon v-if="form.morning_workshop !== morning.id" name="square" width="20"
                                                height="20"
                                                fill="#243776"></unicon>
                                        <div class="ml-1">{{ morning.name }}</div>
                                    </div>
                                    <div class="text-xs mb-1">
                                        {{ $filters.formatDayDateTime(morning.date_start) }}
                                    </div>
                                    <div class="text-xs mb-1 italic">
                                        {{ morning.title }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div v-for="afternoon in events.afternoon_workshop" @click="selectAfternoon(afternoon.id)"
                                 :class="form.afternoon_workshop === afternoon.id ? 'bg-blue-200' : 'bg-blue-50'"
                                 class="p-4 border first:rounded-t-lg last:rounded-bl-lg last:rounded-br-lg cursor-pointer hover:bg-blue-200 ">
                                <div class="mb-3">
                                    <div class="font-semibold text-blue-900 flex">
                                        <unicon v-if="form.afternoon_workshop === afternoon.id" name="check-square"
                                                width="20"
                                                height="20"
                                                fill="#243776"></unicon>
                                        <unicon v-if="form.afternoon_workshop !== afternoon.id" name="square" width="20"
                                                height="20"
                                                fill="#243776"></unicon>
                                        <div class="ml-1">{{ afternoon.name }}</div>
                                    </div>
                                    <div class="text-xs mb-1">
                                        {{ $filters.formatDayDateTime(afternoon.date_start) }}
                                    </div>
                                    <div class="text-xs mb-1 italic">
                                        {{ afternoon.title }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="font-semibold text-lg mb-2">Payment</div>
                    <div class="px-3 py-4 border rounded-lg">
                        <div class="border-b">
                            <div class="text-xs">
                                Transaction Number:
                            </div>
                            <div class="text-sm italic mb-2">
                                <span>{{ transaction.number }}</span>
                            </div>
                            <div class="text-xs">
                                Name:
                            </div>
                            <div class="text-sm italic mb-2">
                                <span>{{ transaction.user_name }}</span>
                            </div>
                            <div class="text-xs">
                                Phone:
                            </div>
                            <div class="text-sm italic mb-2">
                                <span>{{ transaction.user_phone }}</span>
                            </div>
                            <div class="text-xs">
                                Email:
                            </div>
                            <div class="text-sm italic mb-2">
                                <span>{{ transaction.user_email }}</span>
                            </div>
                        </div>

<!--                        <div class="font-semibold mt-5 mb-2">-->
<!--                            Voucher Code-->
<!--                        </div>-->
<!--                        <input type="text" id="institution" placeholder="input voucher code"-->
<!--                               v-model="voucher"-->
<!--                               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">-->
<!--                        <div class="text-right mt-3">-->
<!--                            <div @click="calculatePrice('check')"-->
<!--                                 class="text-white cursor-pointer inline-block mb-2 bg-slate-500 hover:bg-slate-600 rounded-lg text-base px-3 py-1 text-center">-->
<!--                                Check-->
<!--                            </div>-->
<!--                        </div>-->

                        <div class="font-semibold mt-5 mb-2">
                            Transaction Details
                        </div>
                        <div class="text-sm border-b">
                            <div v-for="price in pricing.items">
                                <div class="flex justify-between my-1" v-if="price.price !== 0"
                                     :class="price.name === 'Total' ? 'border-t border-slate-800 font-semibold' : ''">
                                    <div>{{ price.name }}</div>
                                    <div>{{ $filters.currency(price.price) }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="text-sm">
                            <div class="flex justify-between  my-1">
                                <div class="text-slate-600">Subtotal</div>
                                <div class="font-semibold">{{ $filters.currency(pricing.subtotal) }}</div>
                            </div>
                        </div>
                        <div class="text-sm" v-if="pricing.package_discount !== 0">
                            <div class="flex justify-between  my-1">
                                <div class="text-slate-500">Package Discount</div>
                                <div class="text-slate-500">{{ $filters.currency(pricing.package_discount) }}</div>
                            </div>
                        </div>
                        <div class="text-sm border-t border-black">
                            <div class="flex justify-between  my-1">
                                <div class="font-semibold">TOTAL</div>
                                <div class="font-semibold">{{ $filters.currency(pricing.total) }}</div>
                            </div>
                        </div>
                        <!--                        <div class="text-sm" v-if="pricing.count === 0">-->
                        <!--                            <div class="flex justify-between">-->
                        <!--                                <div>Event</div>-->
                        <!--                                <div>0</div>-->
                        <!--                            </div>-->
                        <!--                            <div class="flex justify-between border-t border-slate-800 font-semibold">-->
                        <!--                                <div>Total</div>-->
                        <!--                                <div>0</div>-->
                        <!--                            </div>-->
                        <!--                        </div>-->
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
            voucher: '',
            form: {
                symposium: null,
                morning_workshop: null,
                afternoon_workshop: null,
            },
            events: {
                symposium: [],
                morning_workshop: [],
                afternoon_workshop: [],
            },
            data_raw: {
                symposium: true,
                workshop: true,
                job_type: '',
            },
            transaction: '',
            package: '',
            pricing: {
                items:'',
                subtotal:'',
                package_discount:'',
                total:'',
            }
        }
    },
    methods: {
        loadData() {
            this.authGet('pub/events-list-2', {
                transaction_number: this.$route.query.transaction_number
            })
                .then((data) => {
                    this.events = data.result.items
                    this.form.symposium = this.events.symposium['id'];

                    this.transaction = data.result.transaction

                    this.calculatePrice()
                })
        },
        loadPackage() {
            this.authGet('pub/packages-active')
                .then((data) => {
                    this.data_raw.job_type = data.result
                    if (this.data_raw.job_type === 'MHSA') {
                        this.package = 'gold';
                        this.selectPackage(this.package)
                    } else {
                        this.package = 'platinum';
                        this.selectPackage(this.package)
                    }
                })
        },
        calculatePrice(mode = 'calculate') {
            this.authPost('pub/calculate-price-2', {
                items: this.form,
                voucher: this.voucher,
                transaction_number: this.$route.query.transaction_number,
                package: this.package,
            })
                .then((data) => {
                    this.pricing = data.result

                    if (data.message) {
                        if (mode === "check") {
                            this.toaster({title: data.message, icon: 'none'})
                        }
                    }
                })
        },
        selectPackage(name) {
            this.package = name;
            switch (name) {
                case 'platinum':
                    this.data_raw.symposium = true;
                    this.data_raw.workshop = true;
                    break;
                case 'gold':
                    this.data_raw.symposium = true;
                    this.data_raw.workshop = false;
                    break;
                case 'add-on':
                    this.data_raw.symposium = false;
                    this.data_raw.workshop = true;
                    break;
            }

            this.calculatePrice()
        },
        selectMorning(id) {
            if (this.form.morning_workshop !== id) {
                this.form.morning_workshop = id
            } else {
                this.form.morning_workshop = ''
            }
            this.calculatePrice()
        },
        selectAfternoon(id) {
            if (this.form.afternoon_workshop !== id) {
                this.form.afternoon_workshop = id
            } else {
                this.form.afternoon_workshop = ''
            }
            this.calculatePrice()
        },
        toPayment() {
            this.authPost('pub/create-payment-2', {
                items: this.form,
                voucher: this.voucher,
                transaction_number: this.$route.query.transaction_number,
                package: this.package,
            }).then((data) => {
                if (data.status) {
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
        this.loadPackage()
    }
}
</script>
<template>
    <div class="max-w-screen-lg m-auto pt-24" style="min-height: calc(100vh - 133px);">
        <div class="p-6 border-red-100 bg-white rounded-xl">
            <div class="grid gap-4 md:grid-cols-3 col-span-2">
                <div class="col-span-2">
                    <div class="font-semibold text-lg mb-2">Events</div>
                    <div class="rounded-lg p-4 border cursor-pointer hover:bg-red-100 mb-3 bg-red-200">
                        <div class="mb-3">
                            <div class="flex justify-between">
                                <div class="font-semibold text-red-900 flex items-center">
                                    <unicon name="check-square" width="20" height="20" fill="#243776"></unicon>
                                    <div class="ml-1">{{ events.symposium.name }}</div>
                                </div>
                                <div class="flex items-center">

                                </div>
                            </div>
                            <div class="text-xs mb-1">
                                Saturday, August 2nd 08:00 - Sunday, August 3rd 16:00 (GMT+7)
                            </div>
                            <div class="text-xs mb-1 italic">
                                {{ events.symposium.title }}
                            </div>
                        </div>
                    </div>
                    <div class="grid gap-2 grid-cols-2 mb-2" v-if="data_raw.workshop && events.workshop.length > 0 && count < 1">
                        <div v-for="ws in events.workshop" @click="selectWorkshop(ws)"
                            :class="form.workshop_first === ws.slug || form.workshop_second === ws.slug ? 'bg-red-200' : 'bg-background-lightRed', ws.grid === 1 ? 'col-span-1  ' : 'col-span-2'"
                            class="p-4 border rounded-lg cursor-pointer hover:bg-red-200">
                            <div class="mb-3">
                                <div class="flex justify-between items-center">
                                    <div>
                                        <div class="text-sm italic" v-if="!ws.available">Full Booked</div>
                                        <div class="text-sm italic" v-if="ws.available">{{ ws.quota -
                                            ws.transactions_count }} available</div>
                                    </div>
                                    <div class="flex items-center">
                                        <!-- <span class="text-xs">Min. 22 SKP</span>
                                        <unicon name="bookmark" width="20" height="20" style="rotate: -90deg;"
                                            fill="#243776"></unicon> -->
                                    </div>
                                </div>

                                <div class="font-semibold text-red-900 flex">
                                    <div v-if="ws.available" class="flex items-center">
                                        <unicon
                                            v-if="form.workshop_first === ws.slug || form.workshop_second === ws.slug"
                                            name="check-square" width="20" height="20" fill="#243776"></unicon>
                                        <unicon
                                            v-if="form.workshop_first !== ws.slug && form.workshop_second !== ws.slug"
                                            name="square" width="20" height="20" fill="#243776"></unicon>
                                    </div>
                                    <div class="ml-1">
                                        {{ ws.name }}
                                    </div>
                                </div>
                                <div class="text-xs mb-1">
                                    {{ $filters.formatDayDateTime(ws.date_start) }}
                                    -
                                    {{ $filters.formatTime(ws.date_end) }} (GMT+7)
                                </div>
                                <div class="text-xs mb-1 italic">
                                    {{ ws.title }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="events.accommodations.length > 0">
                        <div class="font-semibold text-lg mb-2" v-if="count < 1">Hotel Room</div>
                        <div class="text-xs mb-2 font-semibold" v-if="count < 1">All bookings are subject to room
                            availability at the time of
                            reservation.
                        </div>
                        <div class="grid gap-2 grid-cols-2" v-if="events.accommodations && count < 1">
                            <div v-for="(acm, a) in events.accommodations" class="col-span-2">
                                <div :class="form.acm_first === acm.slug || form.acm_second === acm.slug || form.acm_third === acm.slug || form.acm_fourth === acm.slug ? 'bg-red-200' : 'bg-background-lightRed'"
                                    class="p-4 border rounded-lg cursor-pointer">
                                    <div class="mb-3">
                                        <div class="flex justify-between items-center">
                                            <div>
                                                <div class="text-sm italic" v-if="!acm.available">Full Booked</div>
                                                <div class="text-sm italic" v-if="acm.available">{{ acm.quota -
                                                    acm.transactions_count }} available</div>
                                            </div>
                                        </div>

                                        <div class="font-semibold text-red-900 flex">
                                            <div v-if="acm.available" class="flex items-center">
                                                <unicon
                                                    v-if="form.acm_first === acm.slug || form.acm_second === acm.slug || form.acm_third === acm.slug || form.acm_fourth === acm.slug"
                                                    name="check-square" width="20" height="20" fill="#243776"></unicon>
                                                <unicon
                                                    v-if="form.acm_first !== acm.slug && form.acm_second !== acm.slug && form.acm_third !== acm.slug && form.acm_fourth !== acm.slug"
                                                    name="square" width="20" height="20" fill="#243776"></unicon>
                                            </div>
                                            <div class="ml-1">
                                                {{ acm.name }}
                                            </div>
                                        </div>
                                        <div class="text-xs mb-1">
                                            {{ $filters.formatDayDateTime(acm.date_start) }}
                                            -
                                            {{ $filters.formatDayDateTime(acm.date_end) }} (GMT+7)
                                        </div>
                                        <div class="text-xs mb-1">
                                            <b>{{ acm.title }}</b> {{ acm.subtitle }}
                                        </div>
                                        <div class="text-xs mb-1 italic">
                                            {{ acm.body }}
                                        </div>
                                    </div>
                                    <div class="grid gap-2 grid-cols-2">
                                        <!-- <button :class="isSelectedKing(a, acm) ? 'bg-red-500' : 'bg-red-100 text-black'"
                                        class="px-2 rounded-full  hover:bg-red-400 font-semibold "
                                        @click="selectAcm(a, acm, 'king')">
                                        King Bed Size
                                    </button> -->
                                        <button :class="isSelectedTwin(a, acm) ? 'bg-red-500' : 'bg-red-100 text-black'"
                                            class="px-2 rounded-full  hover:bg-red-400 font-semibold"
                                            @click="selectAcm(a, acm, 'twin')">
                                            Double Twin Bed Size
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-span-2 md:col-span-1">
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
                                NIK:
                            </div>
                            <div class="text-sm italic mb-2">
                                <span>{{ transaction.nik }}</span>
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

                        <div class="font-semibold mt-5 mb-2">
                            Plataran Sehat (Screen Shoot)
                        </div>
                        <div>
                            <input type="file" accept="image/*" id="file-upload" @change="uploadFile" ref="file_upload">
                        </div>

                        <div class="mb-2 p-2" v-if="form.plataran_img">
                            <a target="_blank" :href="form.plataran_img">
                                <div class="w-full h-32 bg-center bg-cover bg-no-repeat"
                                    :style="'background-image:url(' + form.plataran_img + ')'" alt=""></div>
                            </a>
                        </div>
                        <div class="font-semibold mt-5 mb-2">
                            Voucher Code
                        </div>
                        <input type="text" id="institution" placeholder="input voucher code" v-model="voucher"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-900 focus:border-red-500 block w-full p-2.5">
                        <small class="text-red-800" v-if="pricing.voucher_validation">
                            {{ pricing.voucher_validation }}
                        </small>
                        <small v-if="transaction.job_type_code === 'PRKI'" style="color: #ed9292;">
                            <i>
                                only applies to non-sponsored participants
                            </i>
                        </small>
                        <div class="text-right mt-3">
                            <div @click="calculatePrice('check')"
                                class="text-white cursor-pointer inline-block mb-2 bg-red-500 hover:bg-red-600 rounded-lg text-base px-3 py-1 text-center">
                                Check
                            </div>
                        </div>
                        <div class="font-semibold mt-5 mb-2">
                            Collective Registration
                        </div>
                        <div v-if="count >= 1" class="mb-4">
                            <div v-for="user in users">
                                <b>{{ user.name }}</b>
                                <div class="flex justify-between">
                                    <span class="text-sm">{{ user.nik }}</span>
                                    <span class="text-sm">{{ user.email }}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button @click="memberModal"
                                class="w-full mb-2 bg-red-200 hover:bg-red-100 font-medium rounded-full text-base px-8 py-2.5 text-center">
                                Add Member
                            </button>
                        </div>

                        <div class="relative">
                            <PageLoading v-model:active="loader" loader="dots" :is-full-page="false" />
                            <div class="font-semibold mt-5 mb-2">
                                Transaction Details
                            </div>
                            <div class="text-sm border-b">
                                <div v-for="price in pricing.items">
                                    <div class="flex justify-between my-1" v-if="price.price !== 0"
                                        :class="price.name === 'Total' ? 'border-t border-red-800 font-semibold' : ''">
                                        <div>{{ price.name }}</div>
                                        <div>{{ $filters.currency(price.price) }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-sm">
                                <div class="flex justify-between  my-1">
                                    <div class="text-red-600">Subtotal</div>
                                    <div class="font-semibold">{{ $filters.currency(pricing.subtotal) }}</div>
                                </div>
                            </div>
                            <div class="text-sm" v-if="pricing.discount_amount !== 0">
                                <div class="flex justify-between  my-1">
                                    <div class="text-red-500">Voucher Discount</div>
                                    <div class="text-red-500">{{ $filters.currency(pricing.discount_amount) }}</div>
                                </div>
                            </div>
                            <div class="text-sm" v-if="pricing.package_discount !== 0">
                                <div class="flex justify-between  my-1">
                                    <div class="text-red-500">Package Discount</div>
                                    <div class="text-red-500">{{ $filters.currency(pricing.package_discount) }}</div>
                                </div>
                            </div>
                            <div class="text-sm border-t border-black">
                                <div class="flex justify-between  my-1">
                                    <div class="font-semibold">TOTAL</div>
                                    <div class="font-semibold">{{ $filters.currency(pricing.total) }}</div>
                                </div>
                            </div>

                            <div class="mt-5">
                                <button @click="toPayment" :disabled="disabled"
                                    class="text-white w-full mb-2 bg-red-900 hover:bg-red-800 font-medium rounded-full text-base px-8 py-2.5 text-center">
                                    <BtnLoader v-if="disabled"></BtnLoader>
                                    <span v-if="!disabled">Process to Payment</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div id="memberModal" tabindex="-1" aria-hidden="true" data-modal-placement="top-center"
            class="fixed top-0 left-0 right-0 z-50 w-full p-4 hidden overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-4xl max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-3 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900">
                            Add Collective Registration
                        </h3>
                        <button type="button" @click="member_modal.hide()"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg p-1 ml-auto inline-flex items-center">
                            <unicon name="times"></unicon>
                        </button>
                    </div>
                    <div class="p-6">
                        <div class="grid mb-2 gap-1 grid-cols-3">
                            <div>Email</div>
                            <div>Name</div>
                            <div>NIK</div>
                        </div>
                        <div class="grid mb-2 gap-1 grid-cols-3" v-for="(user, i) in users">
                            <div>
                                <input v-model="user.email" type="text" :placeholder="'email [' + (i + 1) + ']'"
                                    class="block w-full rounded-lg focus:ring-red-500 focus:border-red-500" />
                            </div>
                            <div>
                                <input v-model="user.name" type="text" :placeholder="'Name [' + (i + 1) + ']'"
                                    class="block w-full rounded-lg focus:ring-red-500 focus:border-red-500" />
                            </div>
                            <div>
                                <input v-model="user.nik" type="text" :placeholder="'NIK [' + (i + 1) + ']'"
                                    class="block w-full rounded-lg focus:ring-red-500 focus:border-red-500" />
                            </div>
                        </div>
                        <div>
                            <button @click="addMember"
                                class="w-full mb-2 bg-red-200 hover:bg-red-100 font-medium rounded-full text-base px-8 py-2.5 text-center">
                                Add Member
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="confirmModal" tabindex="-1" aria-hidden="true" data-modal-placement="top-center"
            class="fixed top-0 left-0 right-0 z-50 w-full p-4 hidden overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-2xl max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900">
                            Confirmation
                        </h3>
                        <button type="button" @click="confirm_modal.hide()"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg p-1.5 ml-auto inline-flex items-center">
                            <unicon name="times"></unicon>
                        </button>
                    </div>
                    <div class="p-6 space-y-6">
                        Do you already have a "Plataran Sehat" account? If not, please click the link below to create
                        one.
                        <div class="text-right">
                            <button @click="goToPlataran"
                                class="text-black bg-yellow-300 hover:bg-yellow-200 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-full text-base px-6 py-1.5 text-center mx-1 my-2 md:mr-0">
                                Guidance
                            </button>
                            <a href="http://satusehat.kemkes.go.id/sdmk/register" target="_blank"
                                class="text-white bg-red-900 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-full text-base px-6 py-1.5 text-center mx-1 my-2 md:mr-0">
                                Create Account
                            </a>
                            <button @click="confirm_modal.hide()"
                                class="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-200 rounded-full text-base px-6 py-1.5 text-center mx-1 my-2 md:mr-0">
                                I have an Account
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { upload, generateFileName } from '../../firebase_upload';
import PageLoading from 'vue-loading-overlay';
export default {
    components: {
        PageLoading
    },
    data() {
        return {
            count: 0,
            selected: 2,
            voucher: '',
            disabled: false,
            loader: true,
            member_modal: '',
            confirm_modal: '',
            form: {
                symposium: 'jcu25-sympo',
                workshop_first: null,
                workshop_second: null,
                plataran_img: '',
                acm_first: null,
                acm_first_tag: null,
                acm_second: null,
                acm_second_tag: null,
                acm_third: null,
                acm_third_tag: null,
                acm_fourth: null,
                acm_fourth_tag: null,
            },
            users: [
                { name: '', email: '', nik: '' },
                { name: '', email: '', nik: '' },
                { name: '', email: '', nik: '' },
                { name: '', email: '', nik: '' },
                { name: '', email: '', nik: '' },
            ],
            events: {
                symposium: [],
                workshop: [],
                accommodations: [],
            },
            data_raw: {
                symposium: true,
                workshop: true,
                job_type: '',
                has_symposium: true,
            },
            transaction: '',
            package: 'platinum',
            pricing: {
                items: '',
                subtotal: '',
                package_discount: '',
                voucher_validation: '',
                discount_amount: 0,
                total: '',
            }
        }
    },
    methods: {
        loadData() {
            this.authGet('pub/events-list-jcu25', {
                transaction_number: this.$route.query.transaction_number
            })
                .then((data) => {
                    this.events = data.result.items
                    // this.form.symposium = this.events.symposium['id'];

                    this.transaction = data.result.transaction

                    this.calculatePrice()

                    let users = data.result.transaction.users
                    if (users.length > 0) {
                        this.users = [];
                        this.count = users.length;
                        users.forEach(item => {
                            this.users.push({
                                id: item.id,
                                name: item.user_name,
                                email: item.user_email,
                            })
                        })
                    }

                })
        },
        goToPlataran() {
            this.confirm_modal.hide()
            this.$router.push('/plataran')
        },
        calculatePrice(mode = 'calculate') {
            this.loader = true
            this.authPost('pub/calculate-price-jcu25', {
                items: this.form,
                voucher: this.voucher,
                transaction_number: this.$route.query.transaction_number,
                users: this.users,
            })
                .then((data) => {
                    this.loader = false
                    this.pricing = data.result

                    if (data.message) {
                        if (mode === "check") {
                            this.toaster({ title: data.message, icon: 'none' })
                        }
                    }
                }).catch(() => {
                    this.loader = false
                })
        },
        selectWorkshop(ws) {
            // first: jcu25-ws-1, jcu25-ws-2, jcu25-ws-3, jcu25-ws-5,jcu25-ws-4,jcu25-ws-6
            // second: jcu25-ws-4,jcu25-ws-6
            let slug = ws.slug
            if (ws.available) {
                if (slug === 'jcu25-ws-1' || slug === 'jcu25-ws-2' || slug === 'jcu25-ws-3' || slug === 'jcu25-ws-5') {
                    this.form.workshop_first === ws.slug ? this.form.workshop_first = null : this.form.workshop_first = ws.slug
                } else {
                    this.form.workshop_second === ws.slug ? this.form.workshop_second = null : this.form.workshop_second = ws.slug
                }

                if (slug === 'jcu25-ws-1' || slug === 'jcu25-ws-2') {
                    this.form.workshop_second = null
                }

                if (slug === 'jcu25-ws-4' || slug === 'jcu25-ws-6') {
                    if (this.form.workshop_first === 'jcu25-ws-1' || this.form.workshop_first === 'jcu25-ws-2') {
                        this.form.workshop_first = null
                    }
                }
            }
            this.calculatePrice()
        },
        memberModal() {
            this.member_modal.show()
        },
        selectAcm(idx, acm, size) {
            if (acm.available === false) return
            if (idx === 0) {
                this.form.acm_first === acm.slug ? this.form.acm_first = null : this.form.acm_first = acm.slug
                this.form.acm_first_tag = size
            } if (idx === 1) {
                this.form.acm_second === acm.slug ? this.form.acm_second = null : this.form.acm_second = acm.slug
                this.form.acm_second_tag = size
            } else if (idx === 2) {
                this.form.acm_third === acm.slug ? this.form.acm_third = null : this.form.acm_third = acm.slug
                this.form.acm_third_tag = size
            } else if (idx === 3) {
                this.form.acm_fourth === acm.slug ? this.form.acm_fourth = null : this.form.acm_fourth = acm.slug
                this.form.acm_fourth_tag = size
            }
            this.calculatePrice()
        },
        isSelectedKing(idx, acm) {
            if (idx === 0) {
                return this.form.acm_first === acm.slug && this.form.acm_first_tag === 'king'
            } else if (idx === 1) {
                return this.form.acm_second === acm.slug && this.form.acm_second_tag === 'king'
            } else if (idx === 2) {
                return this.form.acm_third === acm.slug && this.form.acm_third_tag === 'king'
            } else if (idx === 3) {
                return this.form.acm_fourth === acm.slug && this.form.acm_fourth_tag === 'king'
            }
            return false
        },
        isSelectedTwin(idx, acm) {
            if (idx === 0) {
                return this.form.acm_first === acm.slug && this.form.acm_first_tag === 'twin'
            } else if (idx === 1) {
                return this.form.acm_second === acm.slug && this.form.acm_second_tag === 'twin'
            } else if (idx === 2) {
                return this.form.acm_third === acm.slug && this.form.acm_third_tag === 'twin'
            } else if (idx === 3) {
                return this.form.acm_fourth === acm.slug && this.form.acm_fourth_tag === 'twin'
            }
            return false
        },
        toPayment() {
            // if (!this.form.plataran_img && this.transaction.job_type_code !== "MHSA") {
            //     this.toaster({ title: "Please upload Plataran Sehat (Screen Shoot)", icon: 'warning' })
            //     return
            // }

            if (this.form.workshop_first === 'jcu25-ws-3' || this.form.workshop_first === 'jcu25-ws-5') {
                if (!this.form.workshop_second) {
                    this.toaster({ title: "Please select 2 Workshops", icon: 'warning' })
                    return
                }
            }

            if (this.form.workshop_second === 'jcu25-ws-4' || this.form.workshop_second === 'jcu25-ws-6') {
                if (!this.form.workshop_first) {
                    this.toaster({ title: "Please select 2 Workshops", icon: 'warning' })
                    return
                }
            }

            this.disabled = true;
            this.authPost('pub/create-payment-jcu25', {
                items: this.form,
                props: {
                    nik: this.form.nik,
                    plataran_img: this.form.plataran_img,
                },
                voucher: this.voucher,
                transaction_number: this.$route.query.transaction_number,
                package: this.package,
                users: this.users,
            }).then((data) => {
                if (data.success) {
                    this.$router.push('/payment?transaction_number=' + this.$route.query.transaction_number)
                    this.emitter.emit("update-header");
                } else {
                    this.toaster({ title: data.message, icon: 'warning' })
                }
                this.disabled = false;
            }).catch(() => {
                this.disabled = false;
            })
        },
        addMember() {
            this.count = 0;
            this.users.forEach((item, i) => {
                if (item.name !== '' && item.email !== '') {
                    this.count++
                }
            })

            if (this.count < 1) {
                if (confirm("Member less than 1, add more member?")) {

                } else {
                    this.member_modal.hide()
                    this.users = [
                        { name: '', email: '', nik: '' },
                        { name: '', email: '', nik: '' },
                        { name: '', email: '', nik: '' },
                        { name: '', email: '', nik: '' },
                        { name: '', email: '', nik: '' },
                        { name: '', email: '', nik: '' },
                        { name: '', email: '', nik: '' },
                        { name: '', email: '', nik: '' },
                        { name: '', email: '', nik: '' },
                        { name: '', email: '', nik: '' },
                    ];
                }
            } else {
                this.member_modal.hide()
                this.calculatePrice()
            }
        },
        async uploadFile() {
            const input = this.$refs.file_upload;
            if (input && input.files.length > 0) {
                this.upload_loader = true
                const file_name = generateFileName('PlataranSehat', input.files[0])
                this.form.plataran_img = await upload(file_name, input.files[0])
                this.upload_loader = false
            }
        },
    },
    created() {
        this.loadData()
    },
    mounted() {
        this.member_modal = new Modal(document.getElementById('memberModal'), {
            closable: false
        });

        this.confirm_modal = new Modal(document.getElementById('confirmModal'));

        // this.confirm_modal.show()
    },
}
</script>
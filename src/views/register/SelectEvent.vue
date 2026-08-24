<template>
    <div class="max-w-screen-lg m-auto pt-24" style="min-height: calc(100vh - 133px);">
        <div class="p-6 border-slate-100 bg-white rounded-xl">
            <div class="grid gap-4 md:grid-cols-3 col-span-2">
                <div class="col-span-2">
                    <div v-if="!registration_available"
                        class="rounded-lg p-4 border bg-slate-50 text-slate-700 mb-3">
                        <div class="font-semibold">registration not available</div>
                    </div>
                    <div v-if="data_raw.symposium" @click="selectSymposium"
                        :class="form.symposium ? 'bg-blue-200' : 'bg-blue-50'"
                        class="rounded-lg p-4 border cursor-pointer hover:bg-blue-100 mb-3">
                        <div class="mb-3">
                            <div class="flex justify-between">
                                <div class="font-semibold text-blue-900 flex items-center">
                                    <unicon v-if="form.symposium" name="check-square" width="20" height="20"
                                        fill="#7f1f28"></unicon>
                                    <unicon v-if="!form.symposium" name="square" width="20" height="20"
                                        fill="#7f1f28"></unicon>
                                    <div class="ml-1">{{ events.symposium.name }}</div>
                                </div>
                                <div class="flex items-center">
                                    <div class="text-xs text-blue-900" v-if="events.symposium.skp_tag">
                                        {{ events.symposium.skp_tag }}
                                    </div>
                                </div>
                            </div>

                            <div class="text-xs mb-1">
                                Friday, May 1st, 08:00-12:00
                            </div>
                            <div class="text-xs mb-1 italic">
                                {{ events.symposium.title }}
                            </div>
                        </div>
                    </div>
                    <div v-if="data_raw.workshop && count < 1" class="mb-4">
                        <div class="font-semibold text-indigo-900 mb-1">Workshops</div>
                        <div class="text-xs text-slate-600 mb-3">
                            The two sessions run <span class="font-semibold text-blue-700">in parallel</span> — within
                            one session all workshops happen at the same time, so you can only attend one of them.
                            Pick one workshop from each session.
                        </div>

                        <div class="grid gap-3 md:grid-cols-2">
                            <div v-for="session in workshopSessions" :key="session.slot"
                                class="rounded-xl border border-indigo-100 bg-white/60 overflow-hidden">
                                <div class="flex items-center justify-between bg-indigo-800 px-4 py-2 text-white">
                                    <div>
                                        <div class="text-sm font-bold uppercase tracking-wide">{{ session.name }}</div>
                                        <div class="text-xs text-white/80">{{ session.time }}</div>
                                    </div>
                                    <div class="text-xs rounded-full bg-white/15 px-2 py-1">
                                        {{ form[session.slot] ? '1 selected' : 'choose 1' }}
                                    </div>
                                </div>

                                <div class="p-2 space-y-2">
                                    <div v-for="ws in session.items" :key="ws.id" @click="selectWorkshop(ws)"
                                        :class="[
                                            isWorkshopSelected(ws) ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-500' : 'border-slate-200 bg-white',
                                            ws.available ? 'cursor-pointer hover:border-blue-400' : 'opacity-50 cursor-not-allowed'
                                        ]"
                                        class="rounded-lg border p-3 transition-colors">
                                        <div class="flex items-start gap-2">
                                            <div class="pt-0.5 shrink-0" v-if="ws.available">
                                                <unicon v-if="isWorkshopSelected(ws)" name="check-square" width="18" height="18" fill="#a5121f"></unicon>
                                                <unicon v-else name="square" width="18" height="18" fill="#94a3b8"></unicon>
                                            </div>
                                            <div class="min-w-0">
                                                <div class="font-semibold text-sm text-indigo-900">{{ ws.name }}</div>
                                                <div class="text-xs text-slate-600 mt-0.5">{{ ws.title }}</div>
                                                <div class="mt-1 flex items-center gap-2 text-xs">
                                                    <span v-if="!ws.available" class="italic text-slate-500">Full Booked</span>
                                                    <span v-else class="text-slate-500">{{ ws.quota - ws.transactions_count }} available</span>
                                                    <span class="text-indigo-700" v-if="ws.skp_tag">{{ ws.skp_tag }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="events.accommodations && events.accommodations.length" class="mb-3">
                        <div class="font-semibold text-blue-900 mb-1">Add on: Deluxe Room</div>
                        <div class="text-xs text-slate-600 mb-2">
                            Royal Ambarukmo Hotel Yogyakarta &mdash; 1&ndash;2 persons, non-smoking.
                        </div>

                        <div class="mb-2">
                            <div class="text-sm font-semibold text-slate-700 mb-1">Bed type</div>
                            <div class="flex gap-2">
                                <div v-for="bed in bed_types" :key="bed.value" @click="form.accommodation_tag = bed.value"
                                    :class="form.accommodation_tag === bed.value ? 'bg-blue-200 border-blue-400' : 'bg-blue-50'"
                                    class="px-3 py-2 border rounded-lg cursor-pointer hover:bg-blue-100 text-sm">
                                    <div class="font-semibold text-blue-900">{{ bed.label }}</div>
                                    <div class="text-xs text-slate-600">{{ bed.quota }} quota left</div>
                                </div>
                            </div>
                        </div>

                        <div class="grid gap-2 md:grid-cols-1">
                            <div v-for="acm in events.accommodations" :key="acm.id" @click="selectAccommodation(acm)"
                                :class="form.accommodation === acm.slug ? 'bg-blue-200' : 'bg-blue-50'"
                                class="p-4 border first:rounded-t-lg last:rounded-bl-lg last:rounded-br-lg cursor-pointer hover:bg-blue-200">
                                <div class="flex justify-between items-center">
                                    <div class="font-semibold text-blue-900 flex items-center">
                                        <unicon v-if="form.accommodation === acm.slug" name="check-square" width="20" height="20" fill="#7f1f28"></unicon>
                                        <unicon v-else name="square" width="20" height="20" fill="#7f1f28"></unicon>
                                        <div class="ml-1">{{ acm.name }}</div>
                                    </div>
                                    <div class="font-semibold text-blue-900 text-sm">{{ $filters.currency(acm.price) }}</div>
                                </div>
                                <div class="text-xs mt-1 italic">{{ acm.subtitle }}</div>
                                <div class="text-sm italic" v-if="!acm.available">Full Booked</div>
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

                        <!-- <div class="font-semibold mt-5 mb-2">
                            Plataran Sehat (Screen Shoot)
                        </div>
                        <div>
                            <input type="file" accept="image/*" id="file-upload" @change="uploadFile">
                        </div>

                        <div class="mb-2 p-2" v-if="form.plataran_img">
                            <a target="_blank" :href="form.plataran_img">
                                <div class="w-full h-32 bg-center bg-cover bg-no-repeat"
                                    :style="'background-image:url(' + form.plataran_img + ')'" alt=""></div>
                            </a>
                        </div> -->


                        <div class="font-semibold mt-5 mb-2">
                            Voucher Code
                        </div>
                        <input type="text" id="institution" placeholder="input voucher code" v-model="voucher"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
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
                                class="text-white cursor-pointer inline-block mb-2 bg-slate-500 hover:bg-slate-600 rounded-lg text-base px-3 py-1 text-center">
                                Check
                            </div>
                        </div>

                        <!-- <div class="font-semibold mt-5 mb-2">
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
                        </div> -->
                        <!-- <div>
                            <button @click="memberModal"
                                class="w-full mb-2 bg-slate-200 hover:bg-slate-100 font-medium rounded-full text-base px-8 py-2.5 text-center">
                                Add Member
                            </button>
                        </div> -->

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
                        <div class="text-sm" v-if="pricing.discount_amount !== 0">
                            <div class="flex justify-between  my-1">
                                <div class="text-slate-500">Voucher Discount</div>
                                <div class="text-slate-500">{{ $filters.currency(pricing.discount_amount) }}</div>
                            </div>
                        </div>
                        <div class="text-sm" v-if="pricing.package_discount !== 0">
                            <div class="flex justify-between  my-1">
                                <div class="text-slate-500">Package Discount</div>
                                <div class="text-slate-500">{{ $filters.currency(pricing.package_discount) }}</div>
                            </div>
                        </div>
                        <div class="text-sm" v-if="pricing.corlimpiade_discount">
                            <div class="flex justify-between  my-1">
                                <div class="text-slate-500">CORLIMPIADE Discount (20%)</div>
                                <div class="text-slate-500">{{ $filters.currency(pricing.corlimpiade_discount) }}</div>
                            </div>
                        </div>
                        <div class="text-sm border-t border-black">
                            <div class="flex justify-between  my-1">
                                <div class="font-semibold">TOTAL</div>
                                <div class="font-semibold">{{ $filters.currency(pricing.total) }}</div>
                            </div>
                        </div>
                        <div class="mt-5">
                            <button v-if="registration_available" @click="toPayment" :disabled="disabled"
                                class="text-white w-full mb-2 bg-blue-900 hover:bg-blue-800 font-medium rounded-full text-base px-8 py-2.5 text-center">
                                <BtnLoader v-if="disabled"></BtnLoader>
                                <span v-if="!disabled">Process to Payment</span>
                            </button>
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
                                    class="block w-full rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <input v-model="user.name" type="text" :placeholder="'Name [' + (i + 1) + ']'"
                                    class="block w-full rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <input v-model="user.nik" type="text" :placeholder="'NIK [' + (i + 1) + ']'"
                                    class="block w-full rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                        </div>
                        <div>
                            <button @click="addMember"
                                class="w-full mb-2 bg-slate-200 hover:bg-slate-100 font-medium rounded-full text-base px-8 py-2.5 text-center">
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
                                class="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base px-6 py-1.5 text-center mx-1 my-2 md:mr-0">
                                Create Account
                            </a>
                            <button @click="confirm_modal.hide()"
                                class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-200 rounded-full text-base px-6 py-1.5 text-center mx-1 my-2 md:mr-0">
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
export default {
    data() {
        return {
            count: 0,
            selected: 2,
            voucher: '',
            disabled: false,
            registration_available: true,
            member_modal: '',
            confirm_modal: '',
            form: {
                symposium: null,
                workshop_first: null,
                workshop_second: null,
                accommodation: null,
                accommodation_tag: 'twin',
                plataran_img: '',
            },
            bed_types: [
                { value: 'twin', label: 'Twin Bed', quota: 10 },
                { value: 'double', label: 'Double Bed', quota: 5 },
            ],
            users: [
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
                corlimpiade_discount: 0,
                voucher_validation: '',
                discount_amount: 0,
                total: '',
            }
        }
    },
    computed: {
        // Specialist price tier — the only tier the registration fee poster sells a
        // "Workshop Only (2 Workshops)" SKU to, so only these can skip the Symposium.
        isWorkshopOnlyEligible() {
            return ['DRSP', 'PRKI', 'SPOG', 'SPPD', 'OTHR'].includes(this.transaction.job_type_code)
        },
        // The eight workshops run as two parallel blocks of four. Everything inside a
        // block is simultaneous, so only one workshop per block can be attended.
        workshopSessions() {
            let all = this.events.workshop || []
            return [
                {
                    slot: 'workshop_first',
                    name: 'Session 1 — Morning',
                    time: '08.00 – 11.00, 1 October 2026',
                    items: all.filter(ws => ws.session === 'morning'),
                },
                {
                    slot: 'workshop_second',
                    name: 'Session 2 — Afternoon',
                    time: '13.00 – 16.00, 1 October 2026',
                    items: all.filter(ws => ws.session === 'afternoon'),
                },
            ]
        },
    },
    methods: {
        loadData() {
            this.authGet('pub/events-list-jcu26', {
                transaction_number: this.$route.query.transaction_number
            })
                .then((data) => {
                    if (!data || data.success === false) {
                        this.registration_available = false
                        this.events = { symposium: null, workshop: [], accommodations: [] }
                        this.data_raw.symposium = false
                        this.data_raw.workshop = false
                        this.pricing = {
                            items: [],
                            subtotal: 0,
                            package_discount: 0,
                            corlimpiade_discount: 0,
                            voucher_validation: '',
                            discount_amount: 0,
                            total: 0,
                        }
                        return
                    }

                    this.registration_available = true
                    this.events = data.result.items
                    if(this.events.symposium){
                        this.form.symposium = this.events.symposium['slug'];
                    } else {
                        this.data_raw.symposium = false
                    }

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
            this.authPost('pub/calculate-price-jcu26', {
                items: this.form,
                voucher: this.voucher,
                transaction_number: this.$route.query.transaction_number,
                users: this.users,
            })
                .then((data) => {
                    this.pricing = data.result

                    if (data.message) {
                        if (mode === "check") {
                            this.toaster({ title: data.message, icon: 'none' })
                        }
                    }
                })
        },
        workshopSlot(ws) {
            return ws.session === 'morning' ? 'workshop_first' : 'workshop_second'
        },
        isWorkshopSelected(ws) {
            return this.form[this.workshopSlot(ws)] === ws.slug
        },
        selectWorkshop(ws) {
            if (!ws.available) {
                return
            }

            // one workshop per session — picking another in the same slot replaces it
            let slot = this.workshopSlot(ws)
            this.form[slot] = this.form[slot] === ws.slug ? null : ws.slug

            this.calculatePrice()
        },
        selectAccommodation(acm) {
            if (!acm.available) {
                return
            }

            this.form.accommodation = this.form.accommodation === acm.slug ? null : acm.slug
            this.calculatePrice()
        },
        selectSymposium() {
            if (this.form.symposium) {
                this.form.symposium = ''
            } else {
                this.form.symposium = this.events.symposium.slug
            }
            this.calculatePrice()
        },
        memberModal() {
            this.member_modal.show()
        },
        toPayment() {
            let workshops = [this.form.workshop_first, this.form.workshop_second].filter(Boolean)

            if (!this.form.symposium && workshops.length === 0) {
                this.toaster({ title: "Please select at least one event", icon: 'warning', dismissible: true })
                return
            }

            // Workshops without the Symposium ("Workshop Only") is a Specialist-tier SKU —
            // every other job type still needs the Symposium alongside its workshops.
            if (workshops.length > 0 && !this.form.symposium && !this.isWorkshopOnlyEligible) {
                this.toaster({ title: "Workshops are only available together with the Symposium", icon: 'warning', dismissible: true })
                return
            }

            if (workshops.length === 1) {
                this.toaster({ title: "Please select one morning and one afternoon workshop", icon: 'warning', dismissible: true })
                return
            }

            this.disabled = true;
            this.authPost('pub/create-payment-jcu26', {
                items: {
                    symposium: this.form.symposium,
                    workshop_first: this.form.workshop_first,
                    workshop_second: this.form.workshop_second,
                    accommodation: this.form.accommodation,
                    accommodation_tag: this.form.accommodation_tag,
                },
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
        uploadFile() {
            this.upload_loader = true;
            let file = document.getElementById("file-upload").files[0];
            if (file) {
                let form_data = new FormData();

                form_data.append('file', file)

                this.apiPost('pub/upload-file', form_data)
                    .then((data) => {
                        this.form.plataran_img = data.result.link;
                        this.upload_loader = false;
                        document.getElementById("file-upload").value = ''
                    }).catch((e) => {
                        this.upload_loader = false;
                    });
            } else {
                this.upload_loader = false;
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

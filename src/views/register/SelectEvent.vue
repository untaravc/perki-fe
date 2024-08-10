<template>
    <div class="max-w-screen-lg m-auto pt-24" style="min-height: calc(100vh - 133px);">
        <div class="p-6 border-slate-100 bg-white rounded-xl">
            <div class="grid gap-4 md:grid-cols-3 col-span-2">
                <div class="col-span-2">
                    <div v-if="data_raw.symposium"
                        class="rounded-lg bg-blue-200 p-4 border cursor-pointer hover:bg-blue-100 mb-3">
                        <div class="mb-3">
                            <div class="font-semibold text-blue-900 flex">
                                <unicon name="check-square" width="20" height="20" fill="#243776"></unicon>
                                <div class="ml-1">{{ events.symposium.name }}</div>
                            </div>
                            <div class="text-xs mb-1">
                                Saturday-Sunday, Oct 19th - 20th, 08:00-16:00
                            </div>
                            <div class="text-xs mb-1 italic">
                                {{ events.symposium.title }}
                            </div>
                        </div>
                    </div>
                    <div class="col-span-2 grid gap-2 md:grid-cols-2" v-if="data_raw.workshop">
                        <div>
                            <div v-for="first in events.first_workshop" @click="selectFirst(first.id, first)"
                                :class="form.first_workshop === first.id ? 'bg-blue-200' : 'bg-blue-50'"
                                class="p-4 border first:rounded-t-lg last:rounded-bl-lg last:rounded-br-lg cursor-pointer hover:bg-blue-200 ">
                                <div class="mb-3">
                                    <div class="text-sm italic" v-if="!first.available">Full Booked</div>
                                    <div class="text-sm italic" v-if="first.available">{{ first.quota -
                                        first.transactions_count }} available</div>
                                    <div class="font-semibold text-blue-900 flex">
                                        <unicon v-if="form.first_workshop === first.id" name="check-square" width="20"
                                            height="20" fill="#243776"></unicon>
                                        <unicon v-if="form.first_workshop !== first.id" name="square" width="20"
                                            height="20" fill="#243776"></unicon>
                                        <div class="ml-1">{{ first.name }}</div>
                                    </div>
                                    <div class="text-xs mb-1">
                                        {{ $filters.formatDayDateTime(first.date_start) }}
                                    </div>
                                    <div class="text-xs mb-1 italic">
                                        {{ first.title }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div v-for="second in events.second_workshop" @click="selectSecond(second.id, second)"
                                :class="form.second_workshop === second.id ? 'bg-blue-200' : 'bg-blue-50'"
                                class="p-4 border first:rounded-t-lg last:rounded-bl-lg last:rounded-br-lg cursor-pointer hover:bg-blue-200 ">
                                <div class="mb-3">
                                    <div class="text-sm italic" v-if="!second.available">Full Booked</div>
                                    <div class="text-sm italic" v-if="second.available">{{ second.quota -
                                        second.transactions_count }} available</div>
                                    <div class="font-semibold text-blue-900 flex">
                                        <unicon v-if="form.second_workshop === second.id" name="check-square" width="20"
                                            height="20" fill="#243776"></unicon>
                                        <unicon v-if="form.second_workshop !== second.id" name="square" width="20"
                                            height="20" fill="#243776"></unicon>
                                        <div class="ml-1">{{ second.name }}</div>
                                    </div>
                                    <div class="text-xs mb-1">
                                        {{ $filters.formatDayDateTime(second.date_start) }}
                                    </div>
                                    <div class="text-xs mb-1 italic">
                                        {{ second.title }}
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
                            <input type="file" accept="image/*" id="file-upload" @change="uploadFile">
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
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                        <small class="text-red-800" v-if="pricing.voucher_validation">
                            {{ pricing.voucher_validation }}
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
                        <div v-if="count >= 5">
                            <span v-for="user in users">{{ user.name }}, </span>
                        </div>
                        <div>
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
                        <div class="text-sm border-t border-black">
                            <div class="flex justify-between  my-1">
                                <div class="font-semibold">TOTAL</div>
                                <div class="font-semibold">{{ $filters.currency(pricing.total) }}</div>
                            </div>
                        </div>
                        <div class="mt-5">
                            <button @click="toPayment" :disabled="disabled"
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
            <div class="relative w-full max-w-2xl max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-3 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900">
                            Add Member
                        </h3>
                        <button type="button" @click="member_modal.hide()"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg p-1 ml-auto inline-flex items-center">
                            <unicon name="times"></unicon>
                        </button>
                    </div>
                    <div class="p-6">
                        <p class="mb-3">
                            <i>Buy 5 get 1 Free.</i> Add five other <b>General Practitioner</b> to get special Symposium
                            price (IDR 5.000.000)
                        </p>
                        <div class="grid mb-2 gap-1 grid-cols-2">
                            <div>Email</div>
                            <div>Name</div>
                        </div>
                        <div class="grid mb-2 gap-1 grid-cols-2" v-for="(user, i) in users">
                            <div>
                                <input v-model="user.email" type="text" :placeholder="'email_' + (i + 1) + '@mail.com'"
                                    class="block w-full rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <input v-model="user.name" type="text" :placeholder="'User name ' + (i + 1)"
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
            member_modal: '',
            confirm_modal: '',
            form: {
                symposium: null,
                first_workshop: null,
                second_workshop: null,
                plataran_img: '',
            },
            users: [
                { name: '', email: '' },
                { name: '', email: '' },
                { name: '', email: '' },
                { name: '', email: '' },
                { name: '', email: '' },
                { name: '', email: '' },
            ],
            events: {
                symposium: [],
                first_workshop: [],
                second_workshop: [],
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
            this.authGet('pub/events-list-24', {
                transaction_number: this.$route.query.transaction_number
            })
                .then((data) => {
                    this.events = data.result.items
                    this.form.symposium = this.events.symposium['id'];

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
            this.authPost('pub/calculate-price-24', {
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
        selectFirst(id, first) {
            if (first.available) {
                if (this.form.first_workshop !== id) {
                    this.form.first_workshop = id
                } else {
                    this.form.first_workshop = ''
                }
            } else {
                this.form.first_workshop = ''
            }
            this.calculatePrice()
        },
        selectSecond(id, second) {
            if (second.available) {
                if (this.form.second_workshop !== id) {
                    this.form.second_workshop = id
                } else {
                    this.form.second_workshop = ''
                }
            } else {
                this.form.second_workshop = ''
            }
            this.calculatePrice()
        },
        memberModal() {
            this.member_modal.show()
        },
        toPayment() {
            if (
                (this.form.first_workshop && !this.form.second_workshop) ||
                (!this.form.first_workshop && this.form.second_workshop)
            ) {
                this.toaster({ title: "Please select second workshop", icon: 'warning' })
                return
            }

            if (!this.form.plataran_img && this.transaction.job_type_code !== "MHSA") {
                this.toaster({ title: "Please upload Plataran Sehat (Screen Shoot)", icon: 'warning' })
                return
            }

            this.disabled = true;
            this.authPost('pub/create-payment-24', {
                items: {
                    symposium: this.form.symposium,
                    first_workshop: this.form.first_workshop,
                    second_workshop: this.form.second_workshop,
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
                if (data.status) {
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

            if (this.count < 5) {
                if (confirm("Member less than 5, add more member?")) {

                } else {
                    this.member_modal.hide()
                    this.users = [
                        { name: '', email: '' },
                        { name: '', email: '' },
                        { name: '', email: '' },
                        { name: '', email: '' },
                        { name: '', email: '' },
                        { name: '', email: '' },
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
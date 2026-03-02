<template>
    <div class="max-w-screen-lg m-auto pt-20 pb-12">
        <div class="flex justify-center items-center" style="min-height: calc(100vh - 195px);">
            <div class="p-6 border-red-100 bg-white rounded-xl text-center min-w-[425px] lg:min-w-[450px]">
                <div v-if="transaction.status < 200">
                    <div class="text-xl mb-4">Complete the Payment</div>
                    <div class="text-2xl text-[#97262e] mb-2 font-semibold">
                        Rp {{ $filters.currency(transaction.total) }}
                    </div>
                    <div class="text-md">before</div>
                    <div class="text-xl mb-4">{{ $filters.formatDayDateTime(transaction.last_time) }}</div>
                    <div class="border rounded-tr-md flex justify-between rounded-tl-md p-3 bg-red-50">
                        <div class="text-base font-semibold">Transfer Bank</div>
                        <div>
                            <img style="max-height: 25px"
                                src="https://firebasestorage.googleapis.com/v0/b/unt-dev.firebasestorage.app/o/Perki%2Fmandiri-logo.png?alt=media&token=bbf6e2b5-27a1-41ff-b78b-7b1d4ddc6565"
                                alt="">
                        </div>
                    </div>
                </div>
                <div class="border rounded-br-md rounded-bl-md text-left p-3 mb-4">
                    <div class="mb-3">
                        <div class="text-sm mb-1">Transaction Number</div>
                        <div class="mb-1 font-semibold">{{ transaction.number }}</div>
                        <div class="text-sm mb-1">Account Number</div>
                        <div class="rounded border-orange-400 border-2 justify-between shadow-inner flex px-3 py-2">
                            <div>1370 0013 3133 5</div>
                            <div class="cursor-pointer" @click="copyText('1370001331335', 'Nomor Rekening')">
                                <unicon name="copy" height="18px"></unicon>
                            </div>
                        </div>
                        <div class="text-sm mt-1 italic">Bank Mandiri an. <b>PERKI Yogyakarta</b></div>
                    </div>
                    <div class="mb-3">
                        <div class="text-sm mb-1">Nominal</div>
                        <div class="rounded border-orange-400 border-2 justify-between shadow-inner flex px-3 py-2">
                            <div>Rp {{ $filters.currency(transaction.total) }}</div>
                            <div class="cursor-pointer" @click="copyText(transaction.total, 'Nominal')">
                                <unicon name="copy" height="18px"></unicon>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-3 p-2 border rounded">
                    <div class="text-xs my-1 p-1 bg-red-100 text-red-500 rounded grid grid-cols-2">
                        <div>
                            <div class="flex">
                                <unicon name="user" fill="grey" height="15px" width="15px"></unicon>
                                <div class="ml-1">{{ transaction.user_name }}</div>
                            </div>
                        </div>
                        <div>
                            <div class="flex">
                                <unicon name="envelope" fill="grey" height="15px" width="15px"></unicon>
                                <div class="ml-1">{{ transaction.user_email }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="ml-4 text-left">
                        <ul class="list-disc">
                            <li class="text-sm" v-for="detail in transaction.transaction_details">
                                {{ detail.event_name }}
                                <span class="italic text-rose-500">{{ $filters.formatDateTime(detail.event.date_start)
                                    }}</span>
                                <div class="text-xs" v-if="detail.event">{{ detail.event.title }}</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="border-b pb-2">
                    <div class="text-left font-bold">Upload Transfer Proof</div>
                    <div v-show="!show_proof">
                        <label for="file_upload">
                            <div
                                class="bg-red-200 h-36 w-full cursor-pointer rounded flex justify-center items-center relative">
                                <PageLoading v-model:active="upload_loader" loader="dots" :is-full-page="false" />
                                <div v-if="!upload_loader">
                                    <unicon name="file" fill="grey"></unicon>
                                    <div class="text-sm italic text-red-600">Select transfer proof</div>
                                </div>
                            </div>
                        </label>
                        <input type="file" accept="application/pdf,image/*" hidden id="file_upload" ref="file_upload"
                            @change="uploadPhoto">
                    </div>
                    <div v-show="show_proof" class="flex justify-center bg-red-200 p-2">
                        <div class="relative">
                            <a :href="transaction.transfer_proof" target="_blank">
                                <img :src="transaction.transfer_proof" alt="" class="max-h-52">
                            </a>
                        </div>
                    </div>
                    <div v-if="transaction.status === 120" class="italic">
                        Proof of transfer successfully uploaded. Waiting for admin confirmation.
                    </div>
                    <div v-if="transaction.status === 200" class="italic">
                        Payment <b>confirmed</b> <span class="">at {{ transaction.paid_at }}</span>
                    </div>
                    <label for="file_upload" v-show="show_proof && transaction.status === 120" class="relative">
                        <div
                            class="border font-semibold cursor-pointer rounded-full py-2 mt-3 w-full bg-red-800 border-red-800 hover:bg-red-900 text-white">
                            <span v-if="!upload_loader">Re-upload Transfer Proof</span>
                            <span v-if="upload_loader">loading...</span>
                        </div>
                    </label>
                </div>

                <div class="border-b pb-2">
                    <div class="text-left font-bold">Upload Guarantee Letter</div>
                    <div v-show="!show_proof_gl">
                        <label for="file_upload_gl">
                            <div
                                class="bg-slate-200 h-36 w-full cursor-pointer rounded flex justify-center items-center relative">
                                <PageLoading v-model:active="upload_loader_gl" loader="dots" :is-full-page="false" />
                                <div v-if="!upload_loader">
                                    <unicon name="file" fill="grey"></unicon>
                                    <div class="text-sm italic text-slate-700">Select Guarantee Letter</div>
                                </div>
                            </div>
                        </label>
                        <input type="file" accept="application/pdf,image/*" hidden id="file_upload_gl"
                            ref="file_upload_gl" @change="uploadGl">
                    </div>
                    <div v-show="show_proof_gl" class="flex justify-center bg-slate-200 p-2">
                        <div class="relative">
                            <a :href="transaction.transfer_proof_gl" target="_blank">
                                <img :src="transaction.transfer_proof_gl" alt="" class="max-h-52">
                            </a>
                        </div>
                    </div>
                    <div v-if="transaction.status === 119" class="italic">
                        Guarantee Letter successfully uploaded.
                    </div>
                    <label for="file_upload" v-show="show_proof_gl && transaction.status === 120" class="relative">
                        <div
                            class="border font-semibold cursor-pointer rounded-full py-2 mt-3 w-full bg-red-800 border-red-800 hover:bg-red-900 text-white">
                            <span v-if="!upload_loader_gl">Re-upload Guarantee Letter</span>
                            <span v-if="upload_loader_gl">loading...</span>
                        </div>
                    </label>
                </div>

                <router-link to="/profile/transactions"
                    class="block font-semibold cursor-pointer rounded-full py-2 mt-3 w-full bg-red-100 border-red-800 hover:bg-red-200 text-red-800">
                    Back to Transaction
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import PageLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { upload, generateFileName } from '../../firebase_upload';

export default {
    components: {
        PageLoading
    },
    data() {
        return {
            modal: '',
            show_proof: false,
            upload_loader: false,
            show_proof_gl: false,
            upload_loader_gl: false,
            transaction: {
                transaction_details: [],
                transfer_proof: '',
                transfer_proof_gl: '',
            },
        }
    },
    methods: {
        toggleModal() {
            this.modal.toggle();
        },
        loadData() {
            this.authGet('pub/transaction/' + this.$route.query.transaction_number)
                .then((data) => {
                    this.transaction = data.result
                    if (this.transaction.transfer_proof) {
                        this.show_proof = true
                    }
                    if (this.transaction.transfer_proof_gl) {
                        this.show_proof_gl = true
                    }
                })
        },
        copyText(copy_text, text = null) {
            navigator.clipboard.writeText(copy_text);
            this.toaster({ title: text + ' disalin' })
        },
        async uploadTransferProof() {
            await this.authPost('pub/transaction-transfer-proof', {
                transaction_id: this.transaction.id,
                transfer_proof_link: this.transaction.transfer_proof
            })
                .then((data) => {
                    if (data.success) {
                        this.upload_loader = false;
                        this.loadData()
                    }
                }).catch(() => { })
        },
        async uploadTransferProofGl() {
            await this.authPost('pub/transaction-transfer-proof', {
                transaction_id: this.transaction.id,
                transfer_proof_gl_link: this.transaction.transfer_proof_gl
            })
                .then((data) => {
                    if (data.success) {
                        this.upload_loader = false;
                        this.loadData()
                    }
                }).catch(() => { })
        },
        async uploadPhoto() {
            const input = this.$refs.file_upload;
            if (input && input.files.length > 0) {
                this.upload_loader = true
                const file_name = generateFileName('TransferProof', input.files[0])
                this.transaction.transfer_proof = await upload(file_name, input.files[0])

                await this.uploadTransferProof()
                this.upload_loader = false
                this.show_proof = true
            }
        },
        async uploadGl() {
            const input = this.$refs.file_upload_gl;
            if (input && input.files.length > 0) {
                this.upload_loader_gl = true
                const file_name = generateFileName('TransferProofGl', input.files[0])
                this.transaction.transfer_proof_gl = await upload(file_name, input.files[0])

                await this.uploadTransferProofGl()
                this.upload_loader_gl = false
                this.show_proof_gl = true
            }
        },
    },
    mounted() {
        this.modal = new Modal(document.getElementById('defaultModal'));
    },
    created() {
        this.loadData()
    }
}
</script>
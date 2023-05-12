<template>
    <div class="max-w-screen-lg m-auto pt-20 pb-12">
        <div class="flex justify-center items-center" style="min-height: calc(100vh - 195px);">
            <div class="p-6 border-slate-100 bg-white rounded-xl text-center min-w-[425px] lg:min-w-[450px]">
                <div class="text-xl mb-4">complete the payment</div>
                <div class="text-2xl text-[#F78F2D] mb-2 font-semibold">
                    Rp {{ $filters.currency(transaction.total) }}
                </div>
                <div class="text-md">before</div>
                <div class="text-xl mb-4">{{ $filters.formatDayDateTime(transaction.last_time) }}</div>
                <div class="border rounded-tr-md flex justify-between rounded-tl-md p-3 bg-slate-50">
                    <div class="text-base font-semibold">Transfer Bank</div>
                    <div>
                        <img style="max-height: 25px" src="/storage/logo/Mandiri_logo.png" alt="">
                    </div>
                </div>
                <div class="border rounded-br-md rounded-bl-md text-left p-3 mb-4">
                    <div class="mb-3">
                        <div class="text-sm mb-1">Account Number</div>
                        <div
                            class="rounded border-orange-400 border-2 justify-between shadow-inner flex px-3 py-2 border">
                            <div>1370 0013 3133 5</div>
                            <div class="cursor-pointer" @click="copyText('1370001331335', 'Nomor Rekening')">
                                <unicon name="copy" height="18px"></unicon>
                            </div>
                        </div>
                        <div class="text-sm mt-1 italic">Bank Mandiri an. <b>PERKI Yogyakarta</b></div>
                    </div>
                    <div class="mb-3">
                        <div class="text-sm mb-1">Nominal</div>
                        <div
                            class="rounded border-orange-400 border-2 justify-between shadow-inner flex px-3 py-2 border">
                            <div>Rp {{ $filters.currency(transaction.total) }}</div>
                            <div class="cursor-pointer" @click="copyText(transaction.total, 'Nominal')">
                                <unicon name="copy" height="18px"></unicon>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <button @click="toggleModal"
                            class="border font-semibold rounded-full py-2 w-full border-slate-800 hover:bg-blue-800 hover:text-white">
                        Item Detail
                    </button>
                </div>
                <div v-show="!show_proof">
                    <label for="file_upload">
                        <div
                            class="bg-slate-200 h-36 w-full cursor-pointer rounded flex justify-center items-center relative">
                            <page-loader v-model:active="upload_loader" loader="dots" :is-full-page="false"/>
                            <div v-if="!upload_loader">
                                <unicon name="file" fill="grey"></unicon>
                                <div class="text-sm italic text-slate-600">Select transfer proof</div>
                            </div>
                        </div>
                    </label>
                    <input type="file" accept="application/pdf,image/*" hidden id="file_upload" @change="uploadFile">
                </div>
                <div v-show="show_proof" class="flex justify-center bg-slate-200 p-2">
                    <div class="relative">
                        <a :href="transaction.transfer_proof" target="_blank">
                            <img :src="transaction.transfer_proof" alt="" class="max-h-52">
                        </a>
                    </div>
                </div>
                <div v-if="transaction.status === 120" class="italic">
                    Proof of transfer successfully uploaded. Waiting for admin confirmation.
                </div>
                <label for="file_upload" v-show="show_proof" class="relative">
                    <div
                        class="border font-semibold cursor-pointer rounded-full py-2 mt-3 w-full bg-blue-800 border-slate-800 hover:bg-blue-900 text-white">
                        <span v-if="!upload_loader">Re-upload</span>
                        <span v-if="upload_loader">loading...</span>
                    </div>
                </label>
            </div>
        </div>
        <div id="defaultModal" tabindex="-1" aria-hidden="true"
             class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-2xl max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900">
                            Detail Event
                        </h3>
                        <button type="button" @click="toggleModal"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg p-1.5 ml-auto inline-flex items-center"
                                data-modal-hide="defaultModal">
                            <unicon name="times"></unicon>
                        </button>
                    </div>
                    <div class="p-6 space-y-6">
                        <div class="p-2" v-for="detail in transaction.transaction_details">
                            <div>
                                {{ detail.event_name }}
                            </div>
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
            modal: '',
            show_proof: false,
            upload_loader: false,
            transaction: {
                transaction_details: [],
                transfer_proof: '',
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
                })
        },
        copyText(copy_text, text = null) {
            navigator.clipboard.writeText(copy_text);
            this.toaster({title: text + ' disalin'})
        },
        uploadFile() {
            let file = document.getElementById("file_upload").files[0];
            if (file) {
                this.upload_loader = true;
                let form_data = new FormData();

                form_data.append('file', file)
                form_data.append('model', 'transaction')
                form_data.append('model_id', this.transaction.id)
                form_data.append('title', 'Bukti Transfer ' + this.transaction.number)

                this.authPost('pub/upload-file', form_data)
                    .then((data) => {
                        if (data.status) {
                            this.transaction.transfer_proof = data.result.link;
                            this.uploadTransferProof()
                            this.show_proof = true
                        }
                        this.upload_loader = false;
                    }).catch((e) => {
                    this.upload_loader = false;
                });
            }
        },
        uploadTransferProof() {
            this.authPost('pub/transaction-transfer-proof', {
                transaction_id: this.transaction.id,
                transfer_proof_link: this.transaction.transfer_proof
            })
                .then((data) => {
                    if (data.status) {
                        this.upload_loader = false;
                        this.loadData()
                    }
                }).catch(() => {

            })
        }
    },
    mounted() {
        this.modal = new Modal(document.getElementById('defaultModal'));
    },
    created() {
        this.loadData()
    }
}
</script>
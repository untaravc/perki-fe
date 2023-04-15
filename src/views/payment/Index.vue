<template>
    <div class="max-w-screen-lg m-auto pt-20">
        <div class="flex justify-center items-center" style="min-height: calc(100vh - 195px);">
            <div class="p-6 border-slate-100 bg-white rounded-xl text-center min-w-[375px] lg:min-w-[450px]">
                <div class="text-xl mb-4">Selesaikan Pembayaran</div>
                <div class="text-2xl text-[#F78F2D] mb-2 font-semibold">
                    Rp {{$filters.currency(transaction.total)}}
                </div>
                <div class="text-md">Batas akhir pembayaran</div>
                <div class="text-xl mb-4">{{ $filters.formatDayDateTime(transaction.last_time)}}</div>
                <div class="border rounded-tr-md flex justify-between rounded-tl-md p-3 bg-slate-50">
                    <div class="text-base">Transfer Bank</div>
                    <div>
                        Img
                    </div>
                </div>
                <div class="border rounded-br-md rounded-bl-md text-left p-3 mb-4">
                    <div class="mb-3">
                        <div class="text-sm mb-1">Nomor Rekening</div>
                        <div
                            class="rounded border-orange-400 border-2 justify-between shadow-inner flex px-3 py-2 border">
                            <div>282983928</div>
                            <div class="cursor-pointer">
                                <unicon name="copy" height="18px"></unicon>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="text-sm mb-1">Nominal</div>
                        <div
                            class="rounded border-orange-400 border-2 justify-between shadow-inner flex px-3 py-2 border">
                            <div>Rp {{ $filters.currency(transaction.total) }}</div>
                            <div class="cursor-pointer">
                                <unicon name="copy" height="18px"></unicon>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-2 mb-3">
                    <button @click="toggleModal"
                            class="border font-semibold rounded-full py-3 border-slate-800 hover:bg-blue-800 hover:text-white">
                        Lihat Detail
                    </button>
                    <button @click="show_proof = true"
                            class="border font-semibold rounded-full py-3 bg-blue-800 border-slate-800 hover:bg-blue-900 text-white">
                        Kirim Bukti Transfer
                    </button>
                </div>
                <div v-show="show_proof">
                    <label for="file_upload">
                        <div class="bg-slate-200 h-36 w-full cursor-pointer rounded flex justify-center items-center">
                            <div>
                                <unicon name="file" fill="grey"></unicon>
                                <div class="text-sm italic text-slate-600">Pilih file bukti transfer</div>
                            </div>
                        </div>
                    </label>
                    <input type="file" hidden id="file_upload">
                </div>
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
                                {{detail.event_name}}
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
            show_proof: true,
            transaction: {
                transaction_details: []
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
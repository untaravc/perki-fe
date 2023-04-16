<template>
    <div>
        <div class="text-2xl font-semibold mb-3">Transaksi</div>
        <div class="border-slate-200 border bg-white rounded mb-2" v-for="trx in data_content">
            <div class="bg-slate-100 rounded-t py-3 px-4 flex justify-between">
                <div class="flex">
                    <unicon name="clock" width="15" height="15"></unicon>
                    <div class="text-xs ml-1">{{ $filters.formatDateTime(trx.created_at) }}</div>
                </div>
                <div class="text-xs text-blue-500 font-semibold">
                    {{ trx.status_label }}
                </div>
            </div>
            <div class="p-5 flex justify-between">
                <div>
                    <div class="font-semibold">{{ trx.number }}</div>
                    <div class="ml-4">
                        <ul class="list-disc">
                            <li class="text-sm" v-for="detail in trx.transaction_details">
                                {{ detail.event_name }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="font-semibold text-blue-700">
                        {{ $filters.currency(trx.total) }}
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
            data_content: [],
        }
    },
    methods: {
        loadData() {
            this.authGet('pub/transaction-list')
                .then((data) => {
                    this.data_content = data.result;
                })
        }
    },
    created() {
        this.loadData()
    }
}
</script>
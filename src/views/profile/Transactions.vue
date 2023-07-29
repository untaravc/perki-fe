<template>
    <div>
        <div class="text-2xl font-semibold mb-3">Transaction</div>
        <div v-if="data_content.length === 0" class="p-3 italic text-slate-500">
            no data
        </div>
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
                    <div class="font-semibold cursor-pointer underline text-blue-700 hover:text-blue-800">
                        <router-link v-if="trx.status === 100"
                                     :to="'/register/event?transaction_number=' + trx.number">
                            {{ trx.number }}
                        </router-link>
                        <router-link v-else="trx.status === 110 || trx.status === 120"
                                     :to="'/payment?transaction_number=' + trx.number">
                            {{ trx.number }}
                        </router-link>
                        <span class="font-semibold" v-else>{{ trx.number }}</span>
                    </div>
                    <div class="text-xs my-1 p-1 bg-blue-100 text-slate-500 rounded grid grid-cols-2">
                        <div>
                            <div class="flex">
                                <unicon name="user" fill="grey" height="15px" width="15px"></unicon>
                                <div class="ml-1">{{trx.user_name}}</div>
                            </div>
                        </div>
                        <div>
                            <div class="flex">
                                <unicon name="envelope" fill="grey" height="15px" width="15px"></unicon>
                                <div class="ml-1">{{trx.user_email}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="ml-4">
                        <ul class="list-disc">
                            <li class="text-sm" v-for="detail in trx.transaction_details">
                                {{ detail.event_name }}
                                <span class="italic text-slate-500">{{$filters.formatDateTime(detail.event.date_start)}}</span>
                                <div class="text-xs" v-if="detail.event">{{detail.event.title}}</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="font-semibold text-blue-700 text-right">
                        {{ $filters.currency(trx.total) }}
                    </div>
                    <router-link v-if="trx.status === 100"
                                 class="bg-green-700 flex mx-1 cursor-pointer hover:bg-green-800 items-center text-white px-4 py-1 text-sm rounded-lg"
                                 :to="'/register/event?transaction_number=' + trx.number">
                        Detail
                        <unicon name="angle-right" fill="white" height="14px" width="14px"></unicon>
                    </router-link>
                    <router-link v-else="trx.status === 110 || trx.status === 120"
                                 class="bg-green-700 flex mx-1 cursor-pointer hover:bg-green-800 items-center text-white px-4 py-1 text-sm rounded-lg"
                                 :to="'/payment?transaction_number=' + trx.number">
                        Detail
                        <unicon name="angle-right" fill="white" height="14px" width="14px"></unicon>
                    </router-link>
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
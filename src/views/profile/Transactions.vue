<template>
    <div>
        <div class="text-2xl font-bold text-slate-900 mb-3">Transaction</div>
        <div v-if="data_content.length === 0" class="p-6 text-center italic text-slate-400 bg-white rounded-3xl shadow-xl shadow-slate-200/70 ring-1 ring-slate-100">
            no data
        </div>
        <div class="bg-white rounded-2xl shadow-sm shadow-slate-200/60 ring-1 ring-slate-100 mb-3 overflow-hidden" v-for="trx in data_content">
            <div class="bg-slate-50 py-3 px-4 flex justify-between">
                <div class="flex items-center text-slate-500">
                    <unicon name="clock" width="15" height="15" fill="currentColor"></unicon>
                    <div class="text-xs ml-1">{{ $filters.formatDateTime(trx.created_at) }}</div>
                </div>
                <div class="text-xs text-violet-600 font-semibold">
                    {{ trx.status_label }}
                </div>
            </div>
            <div class="p-5 flex justify-between">
                <div>
                    <div class="font-semibold cursor-pointer underline text-violet-600 hover:text-violet-700">
                        <router-link v-if="trx.status === 100" :to="'/register/event?transaction_number=' + trx.number">
                            {{ trx.number }}
                        </router-link>
                        <router-link v-else-if="trx.status === 110 || trx.status === 120"
                            :to="'/payment?transaction_number=' + trx.number">
                            {{ trx.number }}
                        </router-link>
                        <span class="font-semibold" v-else>{{ trx.number }}</span>
                    </div>
                    <div class="text-xs my-2 p-2 bg-slate-50 text-slate-500 rounded-lg grid grid-cols-2">
                        <div>
                            <div class="flex items-center">
                                <unicon name="user" fill="#94a3b8" height="15px" width="15px"></unicon>
                                <div class="ml-1">{{ trx.user_name }}</div>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center">
                                <unicon name="envelope" fill="#94a3b8" height="15px" width="15px"></unicon>
                                <div class="ml-1">{{ trx.user_email }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="ml-4 mb-3">
                        <ul class="list-disc" v-if="trx.transaction_details">
                            <li class="text-sm" v-for="detail in trx.transaction_details">
                                {{ detail.event_name }}
                                <span class="italic text-slate-500" v-if="detail.event">{{
                                    $filters.formatDateTime(detail.event.date_start) }}</span>
                                <div class="text-xs" v-if="detail.event">{{ detail.event.title }}</div>
                            </li>
                        </ul>
                    </div>
<!--                    <div v-if="trx.transaction_children && trx.transaction_children.length > 0">-->
<!--                        <div class="font-semibold">Collective Registration</div>-->
<!--                        <div class="text-sm" v-for="child in trx.transaction_children">-->
<!--                            <i>{{ child.user_name }}</i>-->
<!--                            <div class="flex justify-between text-slate-500">-->
<!--                                <div>{{ child.user_email }}</div>-->
<!--                                <div>{{ child.nik }}</div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
                </div>
                <div>
                    <div class="font-bold text-slate-900 text-right mb-2">
                        {{ $filters.currency(trx.total) }}
                    </div>
                    <router-link v-if="trx.status === 100"
                        class="bg-gradient-to-r from-violet-600 to-teal-500 hover:shadow-lg hover:shadow-violet-200 flex mx-1 cursor-pointer items-center text-white px-4 py-1 text-sm rounded-full transition-shadow duration-200"
                        :to="'/register/event?transaction_number=' + trx.number">
                        Detail
                        <unicon name="angle-right" fill="white" height="14px" width="14px"></unicon>
                    </router-link>
                    <router-link v-else="trx.status === 110 || trx.status === 120"
                        class="bg-gradient-to-r from-violet-600 to-teal-500 hover:shadow-lg hover:shadow-violet-200 flex mx-1 cursor-pointer items-center text-white px-4 py-1 text-sm rounded-full transition-shadow duration-200"
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
            this.authGet('pub/transaction-list?ref=jcu26',)
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

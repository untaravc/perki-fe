<template>
    <div class="max-w-screen-lg m-auto pt-24 pb-16 px-4" style="min-height: calc(100vh - 165px);">
        <div v-if="loading" class="text-center text-slate-400 italic py-10">Loading...</div>

        <div v-else-if="!event.id" class="text-center text-slate-400 italic py-10">Event not found.</div>

        <div v-else class="grid gap-6 md:grid-cols-3">
            <div class="md:col-span-2">
                <div class="text-sm font-bold uppercase tracking-wide text-blue-700 mb-1" v-if="event.name">
                    {{ event.name }}
                </div>
                <h1 class="text-3xl font-bold text-indigo-900 mb-2">{{ event.title }}</h1>
                <div class="text-sm text-slate-500 mb-4" v-if="event.date_start">
                    {{ $filters.formatDate(event.date_start) }}
                    <span v-if="event.date_start && event.date_end">
                        &middot; {{ $filters.formatTime(event.date_start) }} - {{ $filters.formatTime(event.date_end) }}
                    </span>
                </div>

                <div class="text-slate-700 mb-6" style="white-space: pre-line;" v-if="event.body">{{ event.body }}</div>

                <div v-if="sessionItems.length">
                    <div class="text-lg font-semibold text-indigo-900 mb-2">Sessions</div>
                    <div class="divide-y divide-slate-100 border border-slate-100 rounded-xl">
                        <div v-for="item in sessionItems" :key="item.id" class="p-3 flex flex-col md:flex-row md:justify-between gap-1">
                            <div class="font-medium text-slate-800">{{ item.title }}</div>
                            <div class="text-slate-500 text-sm text-right" v-if="item.speaker">{{ item.speaker.name }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="md:col-span-1" v-if="event.image">
                <a target="_blank" :href="base_url + event.image">
                    <img class="w-full rounded-xl border border-slate-100" :src="base_url + event.image" :alt="event.title">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { applyRouteMeta } from '../../utils/seo'

export default {
    data() {
        return {
            loading: true,
            event: {},
        }
    },
    computed: {
        sessionItems() {
            return this.event.schedule_details && this.event.schedule_details.length
                ? this.event.schedule_details
                : (this.event.schedules || [])
        },
    },
    methods: {
        loadEvent() {
            this.loading = true
            this.apiGet('pub/event/' + this.$route.params.id)
                .then((data) => {
                    this.event = (data.success && data.result) ? data.result : {}
                    this.loading = false

                    if (this.event.title) {
                        applyRouteMeta({
                            title: `${this.event.title} | Jogja Cardiology Update 2026`,
                            description: this.event.body || this.$route.meta.description,
                        }, this.$route.path)
                    }
                })
        },
    },
    created() {
        this.loadEvent()
    },
}
</script>

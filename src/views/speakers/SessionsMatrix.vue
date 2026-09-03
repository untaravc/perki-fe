<template>
    <div class="max-w-screen-lg m-auto pt-28 sm:pt-32 pb-16 px-3">
        <div class="text-4xl font-bold text-blue-900 mb-1 text-center">Speakers &amp; Sessions</div>
        <div class="text-sm text-slate-600 mb-6 text-center">
            Every speaker and moderator in the Jogja Cardiology Update 2026 programme, with the sessions they take part in.
        </div>

        <div v-if="loading" class="text-center text-slate-500 py-16">Loading&hellip;</div>

        <template v-else>
            <!-- Filters -->
            <div class="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                <input v-model="q" type="text" placeholder="Search speaker&hellip;"
                    class="w-full sm:w-64 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200" />
                <div class="flex gap-1">
                    <button v-for="t in trackTabs" :key="t.key" @click="track = t.key"
                        :class="track === t.key ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'"
                        class="text-xs font-semibold px-3 py-2 rounded-lg transition">
                        {{ t.label }}
                    </button>
                </div>
                <div class="text-xs text-slate-400 sm:ml-auto">
                    {{ filtered.length }} {{ filtered.length === 1 ? 'speaker' : 'speakers' }}
                </div>
            </div>

            <div v-if="!filtered.length" class="text-center text-slate-500 py-16">
                No speakers match your search.
            </div>

            <!-- Matrix: one row per speaker -->
            <ul v-else class="divide-y divide-slate-200 border-y border-slate-200">
                <li v-for="sp in filtered" :key="sp.slug"
                    class="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 py-5">
                    <!-- Speaker identity -->
                    <div class="flex items-start gap-3 md:sticky md:top-24 md:self-start">
                        <img v-if="sp.image && !failed[sp.slug]" :src="sp.image" :alt="sp.name"
                            @error="failed[sp.slug] = true"
                            class="h-12 w-12 rounded-full object-cover bg-slate-200 shrink-0" />
                        <div v-else
                            class="h-12 w-12 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200 flex items-center justify-center text-blue-800 text-sm font-bold shrink-0">
                            {{ initials(sp.name) }}
                        </div>
                        <div class="min-w-0">
                            <router-link :to="{ name: 'speaker-sessions', params: { slug: param(sp.slug) } }"
                                class="font-bold text-blue-900 hover:underline leading-tight block">
                                {{ sp.name }}
                            </router-link>
                            <div v-if="sp.desc" class="text-xs text-slate-500 mt-0.5">{{ sp.desc }}</div>
                            <div class="text-[11px] font-semibold text-slate-400 mt-1">
                                {{ visibleSessions(sp).length }}
                                {{ visibleSessions(sp).length === 1 ? 'session' : 'sessions' }}
                            </div>
                        </div>
                    </div>

                    <!-- Related sessions -->
                    <ul class="space-y-1.5 md:col-span-2">
                        <li v-for="(s, i) in visibleSessions(sp)" :key="i"
                            class="rounded-lg border border-slate-200 bg-white/70 px-3 py-2">
                            <div class="flex flex-wrap items-center gap-1.5 text-[11px] mb-0.5">
                                <span class="font-bold uppercase tracking-wide px-1.5 py-0.5 rounded"
                                    :class="s.role === 'Moderator' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'">
                                    {{ s.role }}
                                </span>
                                <span class="px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 font-semibold">{{ s.track }}</span>
                                <span class="font-semibold text-slate-700">{{ s.session }}</span>
                                <span class="text-slate-400">&middot; {{ dayTime(s.date_start) }}</span>
                            </div>
                            <div class="text-sm text-slate-700">{{ s.title }}</div>
                        </li>
                    </ul>
                </li>
            </ul>
        </template>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    data() {
        return {
            loading: true,
            speakers: [],
            failed: {},
            q: '',
            track: 'all',
            trackTabs: [
                { key: 'all', label: 'All' },
                { key: 'Symposium', label: 'Symposium' },
                { key: 'Workshop', label: 'Workshop' },
            ],
        }
    },
    computed: {
        filtered() {
            const q = this.q.trim().toLowerCase()
            return this.speakers.filter((sp) => {
                if (q && !(sp.name || '').toLowerCase().includes(q)) {
                    return false
                }
                return this.visibleSessions(sp).length > 0
            })
        },
    },
    methods: {
        load() {
            this.apiGet('pub/speaker-sessions', { section: 'jcu26' })
                .then((data) => {
                    this.speakers = (data && data.success && Array.isArray(data.result)) ? data.result : []
                    this.loading = false
                })
        },
        // Sessions left after the track filter.
        visibleSessions(sp) {
            const list = sp.sessions || []
            if (this.track === 'all') {
                return list
            }
            return list.filter((s) => s.track === this.track)
        },
        param(slug) {
            // URLs use dashes; slugs use dots (see Sessions.vue).
            return (slug || '').replace(/\./g, '-')
        },
        initials(name) {
            return (name || '')
                .replace(/^(prof\.?|dr\.?|dr\.?\s*med\.?)\s*/i, '')
                .trim()
                .split(/\s+/)
                .slice(0, 2)
                .map((w) => w[0])
                .join('')
                .toUpperCase()
        },
        dayTime(value) {
            return value ? moment(value).format('ddd D MMM · HH:mm') : ''
        },
    },
    created() {
        this.load()
    },
}
</script>

<template>
    <div class="max-w-screen-md m-auto pt-28 sm:pt-32 pb-16 px-3">
        <router-link :to="{ path: '/', hash: '#schedule' }"
            class="inline-flex items-center gap-1 text-sm text-blue-700 hover:underline mb-6">
            &larr; Back to schedule
        </router-link>

        <div v-if="loading" class="text-center text-slate-500 py-16">Loading&hellip;</div>

        <div v-else-if="!speaker" class="text-center text-slate-500 py-16">
            This speaker is not part of the programme.
        </div>

        <template v-else>
            <div class="flex flex-col sm:flex-row gap-5 items-start mb-8">
                <img v-if="speaker.image && !imgFailed" :src="speaker.image" :alt="speaker.name"
                    @error="imgFailed = true"
                    class="h-28 w-28 rounded-full object-cover bg-slate-200 shrink-0" />
                <div v-else
                    class="h-28 w-28 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200 flex items-center justify-center text-blue-800 text-2xl font-bold shrink-0">
                    {{ initials(speaker.name) }}
                </div>
                <div class="min-w-0">
                    <h1 class="text-2xl font-bold text-blue-900">{{ speaker.name }}</h1>
                    <div v-if="speaker.desc" class="text-sm text-slate-500 mt-1">{{ speaker.desc }}</div>
                    <div class="mt-2 text-xs font-semibold text-slate-600">
                        {{ speaker.sessions.length }}
                        {{ speaker.sessions.length === 1 ? 'session' : 'sessions' }} in the programme
                    </div>
                </div>
            </div>

            <div v-if="speaker.biography" class="text-sm text-slate-600 leading-relaxed mb-8"
                v-html="speaker.biography"></div>

            <div v-for="group in grouped" :key="group.day" class="mb-6">
                <div class="text-xs font-bold uppercase tracking-wide text-slate-400 mb-2">{{ group.day }}</div>
                <ul class="space-y-2">
                    <li v-for="(s, i) in group.items" :key="i"
                        class="rounded-lg border border-slate-200 bg-white/70 p-3">
                        <div class="flex flex-wrap items-center gap-1.5 text-[11px] mb-1">
                            <span class="font-bold uppercase tracking-wide px-1.5 py-0.5 rounded"
                                :class="s.role === 'Moderator' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'">
                                {{ s.role }}
                            </span>
                            <span class="text-slate-400">{{ s.track }}</span>
                            <span class="font-semibold text-slate-700">{{ s.session }}</span>
                            <span class="text-slate-400">&middot; {{ time(s.date_start) }}</span>
                        </div>
                        <div class="text-sm text-slate-700">{{ s.title }}</div>
                    </li>
                </ul>
            </div>
        </template>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    data() {
        return {
            loading: true,
            speaker: null,
            imgFailed: false,
        }
    },
    computed: {
        // Sessions bucketed by calendar day, in programme order.
        grouped() {
            if (!this.speaker) {
                return []
            }
            const order = []
            const map = {}
            for (const s of this.speaker.sessions) {
                const key = moment(s.date_start).format('dddd, D MMMM YYYY')
                if (!map[key]) {
                    map[key] = []
                    order.push(key)
                }
                map[key].push(s)
            }
            return order.map((day) => ({ day, items: map[day] }))
        },
    },
    watch: {
        '$route.params.slug'() {
            this.load()
        },
    },
    methods: {
        load() {
            // URLs use dashes (see SchedulesSingleDay.speakerParam); slugs use dots.
            const slug = (this.$route.params.slug || '').replace(/-/g, '.')
            if (!slug) {
                this.loading = false
                return
            }
            this.loading = true
            this.imgFailed = false
            this.apiGet('pub/speaker-sessions', { section: 'jcu26', slug })
                .then((data) => {
                    this.speaker = (data && data.success && data.result && data.result.slug)
                        ? data.result
                        : null
                    this.loading = false
                    this.applyTitle()
                })
        },
        applyTitle() {
            if (this.speaker) {
                document.title = `${this.speaker.name} | Jogja Cardiology Update 2026`
            }
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
        time(value) {
            return value ? moment(value).format('HH:mm') : ''
        },
    },
    created() {
        this.load()
    },
}
</script>

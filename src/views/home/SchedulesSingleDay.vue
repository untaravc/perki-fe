<template>
    <div class="max-w-screen-lg m-auto pt-4 px-2" id="schedule">
        <div class="jcu-heading text-4xl md:text-5xl mb-1">
            Schedule
        </div>
        <div class="text-small text-slate-600 mb-3 text-center">
            Jogja Cardiology Update 2026 in conjunction with The 9th Jogja International Cardiovascular Topic Series and 6th Intension Summit
        </div>
        <div class="text-center mb-5">
            <span class="inline-block rounded-full bg-blue-100 text-blue-900 text-sm font-semibold px-4 py-1.5">
                {{ displayDate }}
            </span>
        </div>

        <div class="grid grid-cols-3">
            <div v-for="tab in tabs" :key="tab.key" @click="selected = tab.key"
                :class="[
                    selected === tab.key ? 'from-indigo-800 to-blue-700' : 'from-slate-400 to-slate-500',
                    tab.rounded,
                ]"
                class="text-white py-3 px-1 text-center cursor-pointer hover:brightness-110 bg-gradient-to-r group transition duration-200">
                <div class="text-base md:text-2xl font-bold inline-block leading-tight">
                    {{ tab.label }}
                    <span :class="selected === tab.key ? 'max-w-full' : 'max-w-0'"
                        class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                </div>
            </div>
        </div>

        <!-- Explains the side-by-side layout once, up front -->
        <div class="flex items-start gap-2 mt-4 mb-5 text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
            <span class="text-blue-600 font-extrabold leading-none mt-px">&#8646;</span>
            <span>Cards shown <b>side by side</b> run at the <b>same time</b> in different halls &mdash; you can attend only one.</span>
        </div>

        <!-- Symposium day (D-1 = 2 Oct, D-2 = 3 Oct) -->
        <div v-if="selected === 'd1' || selected === 'd2'">
            <div v-if="!symposiumSlots.length" class="text-center text-slate-500 py-8 text-sm">
                Schedule for this day is being finalised.
            </div>

            <div v-for="(slot, i) in symposiumSlots" :key="'sy-' + i" class="mb-6">
                <!-- Slot header: time + parallel badge -->
                <div class="flex flex-wrap items-center gap-2 mb-2">
                    <span class="inline-flex items-center bg-indigo-800 text-white text-sm font-bold px-3 py-1 rounded-full">
                        {{ $filters.formatTime(slot.date_start) }} &ndash; {{ $filters.formatTime(slot.date_end) }}
                    </span>
                    <span v-if="slot.rooms.length > 1"
                        class="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                        &#8646; {{ slot.rooms.length }} sessions in parallel &middot; attend one
                    </span>
                </div>

                <div :class="slot.rooms.length > 1 ? 'rounded-2xl bg-blue-50/60 border border-blue-200 p-3' : ''">
                    <div class="grid gap-3" :class="slotColumns(slot.rooms.length)">
                        <div v-for="(room, r) in slot.rooms" :key="room.id || room.slug || r"
                            class="rounded-xl border border-slate-200 bg-white p-4">
                            <div v-if="slot.rooms.length > 1 && r > 0"
                                class="sm:hidden text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-2 text-center">
                                &darr; at the same time
                            </div>
                            <div class="flex items-start justify-between gap-3">
                                <div class="min-w-0">
                                    <span class="inline-block bg-blue-100 text-blue-800 text-[11px] font-bold uppercase tracking-wide px-2 py-0.5 rounded mb-1">
                                        {{ room.name }}
                                    </span>
                                    <div class="text-base font-semibold text-slate-800 leading-snug">
                                        {{ room.title }}
                                    </div>
                                </div>
                                <a v-if="room.image" target="_blank" :href="room.image" class="shrink-0">
                                    <img class="h-16 w-16 object-cover rounded-lg bg-slate-100" :src="room.image" alt="">
                                </a>
                            </div>
                            <ul class="list-disc text-sm my-2 pl-5 space-y-1" v-if="getRoomItems(room).length">
                                <li v-for="item in getRoomItems(room)" :key="item.id || item.slug || item.title">
                                    {{ item.title || item.name }}
                                    <template v-if="getSpeakerName(item)">
                                        <br>
                                        <router-link v-if="speakerSlug(item)"
                                            :to="{ name: 'speaker-sessions', params: { slug: speakerParam(item) } }"
                                            class="font-semibold text-blue-700 hover:underline">{{ getSpeakerName(item) }}</router-link>
                                        <span v-else class="font-semibold">{{ getSpeakerName(item) }}</span>
                                    </template>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Workshops (1 Oct) -->
        <div v-if="selected === 'ws'">
            <div v-if="!(schedule.workshops && schedule.workshops.length)" class="text-center text-slate-500 py-8 text-sm">
                Schedule for this day is being finalised.
            </div>

            <div v-for="(slot, i) in schedule.workshops" :key="'ws-' + (slot.date_start || i)" class="mb-6">
                <div class="flex flex-wrap items-center gap-2 mb-2">
                    <span class="inline-flex items-center bg-indigo-800 text-white text-sm font-bold px-3 py-1 rounded-full">
                        {{ $filters.formatTime(slot.date_start) }} &ndash; {{ $filters.formatTime(slot.date_end) }}
                    </span>
                    <span v-if="slot.rooms && slot.rooms.length > 1"
                        class="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                        &#8646; {{ slot.rooms.length }} workshops in parallel &middot; choose one
                    </span>
                </div>

                <div :class="(slot.rooms && slot.rooms.length > 1) ? 'rounded-2xl bg-indigo-50/60 border border-indigo-200 p-3' : ''">
                    <div class="grid gap-3" :class="slotColumns(slot.rooms ? slot.rooms.length : 1)">
                        <div v-for="(room, r) in slot.rooms" :key="room.id || room.slug || r"
                            class="rounded-xl border border-slate-200 bg-white p-4">
                            <div v-if="slot.rooms.length > 1 && r > 0"
                                class="sm:hidden text-[10px] font-bold uppercase tracking-widest text-indigo-500 mb-2 text-center">
                                &darr; at the same time
                            </div>
                            <span class="inline-block bg-indigo-100 text-indigo-800 text-[11px] font-bold uppercase tracking-wide px-2 py-0.5 rounded mb-1">
                                {{ room.name }}
                            </span>
                            <div class="text-base font-semibold text-indigo-900 leading-snug">{{ room.title }}</div>
                            <ul class="list-disc text-sm my-2 pl-5 space-y-1" v-if="getRoomItems(room).length > 1">
                                <li v-for="item in getRoomItems(room)" :key="item.id || item.slug || item.title">
                                    {{ item.title || item.name }}
                                    <template v-if="getSpeakerName(item)">
                                        <br>
                                        <router-link v-if="speakerSlug(item)"
                                            :to="{ name: 'speaker-sessions', params: { slug: speakerParam(item) } }"
                                            class="font-semibold text-indigo-700 hover:underline">{{ getSpeakerName(item) }}</router-link>
                                        <span v-else class="font-semibold">{{ getSpeakerName(item) }}</span>
                                    </template>
                                </li>
                            </ul>
                            <div class="text-sm font-semibold text-slate-700 mt-1" v-else-if="getSpeakerName(room)">
                                <router-link v-if="speakerSlug(room)"
                                    :to="{ name: 'speaker-sessions', params: { slug: speakerParam(room) } }"
                                    class="text-indigo-700 hover:underline">{{ getSpeakerName(room) }}</router-link>
                                <span v-else>{{ getSpeakerName(room) }}</span>
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
            // 'ws' = Workshops 1 Oct, 'd1' = Symposium 2 Oct, 'd2' = Symposium 3 Oct
            selected: 'ws',
            show: false,
            tabs: [
                { key: 'ws', label: 'WORKSHOP', rounded: 'rounded-tl-lg' },
                { key: 'd1', label: 'SYMPOSIUM D-1', rounded: '' },
                { key: 'd2', label: 'SYMPOSIUM D-2', rounded: 'rounded-tr-lg' },
            ],
            schedule: {
                symposium: [],
                workshops: [],
            },
        }
    },
    computed: {
        displayDate() {
            const map = {
                d1: 'Friday, 2 October 2026',
                d2: 'Saturday, 3 October 2026',
                ws: 'Thursday, 1 October 2026',
            }
            return map[this.selected]
        },
        // Symposium rows split by calendar day.
        activeSymposium() {
            const day = this.selected === 'd2' ? '2026-10-03' : '2026-10-02'
            return (this.schedule.symposium || []).filter((s) => {
                return (s.date_start || '').slice(0, 10) === day
            })
        },
        // Symposium rows that share a start+end are concurrent sessions in
        // different halls — bucket them into one slot so the UI can put them
        // side by side and label the slot as parallel.
        symposiumSlots() {
            const slots = []
            const index = {}
            for (const row of this.activeSymposium) {
                const key = (row.date_start || '') + '|' + (row.date_end || '')
                if (!index[key]) {
                    index[key] = { date_start: row.date_start, date_end: row.date_end, rooms: [] }
                    slots.push(index[key])
                }
                index[key].rooms.push(row.room_a)
            }
            return slots
        },
    },
    methods: {
        // Grid track count for a slot's parallel rooms. Literal class strings so
        // Tailwind keeps them in the build.
        slotColumns(count) {
            if (count >= 4) {
                return 'sm:grid-cols-2 lg:grid-cols-4'
            }
            if (count === 3) {
                return 'sm:grid-cols-2 lg:grid-cols-3'
            }
            if (count === 2) {
                return 'sm:grid-cols-2'
            }
            return ''
        },
        getRoomItems(room) {
            if (!room) {
                return []
            }
            if (Array.isArray(room.schedule_details) && room.schedule_details.length > 0) {
                return room.schedule_details
            }
            if (Array.isArray(room.schedules) && room.schedules.length > 0) {
                return room.schedules
            }
            if (room.title || room.name) {
                return [room]
            }
            return []
        },
        getSpeakerName(item) {
            if (!item) {
                return ''
            }
            if (item.speaker && item.speaker.name) {
                return item.speaker.name
            }
            return item.speakers || ''
        },
        // Slug of the resolved speaker. Empty when the row only carries a
        // free-text name (no user record).
        speakerSlug(item) {
            return (item && item.speaker && item.speaker.slug) ? item.speaker.slug : ''
        },
        // URL-safe form for /speaker-sessions/:slug — dots in a path segment make
        // dev servers and some hosts treat it as a file request, so use dashes.
        speakerParam(item) {
            return this.speakerSlug(item).replace(/\./g, '-')
        },
        getSchedule() {
            this.apiGet('pub/schedule', { section: 'jcu26' })
                .then((data) => {
                    this.schedule = data.result
                })
        }
    },
    created() {
        this.getSchedule()
    }
}

</script>

<template>
    <div class="max-w-screen-lg m-auto pt-4 px-2" id="schedule">
        <div class="jcu-heading text-4xl md:text-5xl mb-1">
            Schedule
        </div>
        <div class="text-small text-slate-600 mb-5 text-center">
            Jogja Cardiology Update 2026 in conjunction with The 9th Jogja International Cardiovascular Topic Series and 6th Intension Summit
        </div>
        <div class="grid grid-cols-2">
            <div @click="selected = 1"
                :class="selected === 1 ? 'from-indigo-800 to-blue-700' : 'from-slate-400 to-slate-500'"
                class="text-white py-3 text-center rounded-tl-lg cursor-pointer hover:brightness-110 bg-gradient-to-r group transition duration-200">
                <div class="text-2xl font-bold inline-block">
                    SYMPOSIUM
                    <span :class="selected === 1 ? 'max-w-full' : 'max-w-0'"
                        class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                </div>
            </div>
            <div @click="selected = 2"
                :class="selected === 2 ? 'from-indigo-800 to-blue-700' : 'from-slate-400 to-slate-500'"
                class="text-white py-3 text-center cursor-pointer  rounded-tr-lg hover:brightness-110 bg-gradient-to-r group transition duration-200">
                <div class="text-2xl font-bold inline-block">
                    WORKSHOP
                    <span :class="selected === 2 ? 'max-w-full' : 'max-w-0'"
                        class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                </div>
            </div>
        </div>
        <div v-if="selected === 1" class="p-2 border-b border-slate-900">
            <div class="grid grid-cols-7" v-for="sympo in schedule.symposium" :key="sympo.id || sympo.slug || sympo.date_start">
                <div class="md:col-span-1 col-span-7 row-span-4 text-center">
                    <div class="inline-block bg-blue-200 px-2 py-1 rounded">
                        {{ $filters.formatTime(sympo.date_start) }}
                        -
                        {{ $filters.formatTime(sympo.date_end) }}
                    </div>
                </div>
                <div class="col-span-7 md:col-span-6 mb-4 border-b border-slate-300">
                    <div class="grid grid-cols-4">
                        <div class="col-span-3">
                            <div class="text-blue-800 font-bold">{{ sympo.room_a.name }}</div>
                            <div class="text-base font-semibold">
                                {{ sympo.room_a.title }}
                            </div>
                            <div class="text-sm my-2 pl-6">
                                <ul class="list-disc">
                                    <li v-for="item in getRoomItems(sympo.room_a)" :key="item.id || item.slug || item.title">
                                        {{ item.title || item.name }}
                                        <span class="font-semibold" v-if="getSpeakerName(item)"><br>{{ getSpeakerName(item) }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-span-1">
                            <a target="_blank" :href="sympo.room_a.image">
                                <img class="w-full" :src="sympo.room_a.image" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="selected === 2" class="p-2">
            <div v-for="(slot, s) in schedule.workshops" :key="slot.date_start || s" class="mb-6">
                <div class="flex flex-wrap items-center gap-2 mb-2">
                    <div class="inline-block bg-indigo-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {{ $filters.formatTime(slot.date_start) }} &ndash; {{ $filters.formatTime(slot.date_end) }}
                    </div>
                    <div class="text-xs font-semibold uppercase tracking-wide text-blue-700"
                        v-if="slot.rooms && slot.rooms.length > 1">
                        {{ slot.rooms.length }} workshops running in parallel &mdash; choose one
                    </div>
                </div>

                <div class="grid gap-3 md:grid-cols-2">
                    <div v-for="room in slot.rooms" :key="room.id || room.slug"
                        class="rounded-xl border border-indigo-100 bg-white/70 p-4">
                        <div class="text-indigo-800 font-bold">{{ room.name }}</div>
                        <div class="text-base font-semibold text-indigo-900">{{ room.title }}</div>
                        <div class="text-sm my-2 pl-6" v-if="getRoomItems(room).length > 1">
                            <ul class="list-disc">
                                <li v-for="item in getRoomItems(room)" :key="item.id || item.slug || item.title">
                                    {{ item.title || item.name }}
                                    <span class="font-semibold" v-if="getSpeakerName(item)"><br>{{ getSpeakerName(item) }}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="text-sm font-semibold text-slate-700" v-else-if="getSpeakerName(room)">
                            {{ getSpeakerName(room) }}
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
            selected: 1,
            show: false,
            schedule: {
                symposium: [],
                workshops: [],
            },
        }
    },
    methods: {
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

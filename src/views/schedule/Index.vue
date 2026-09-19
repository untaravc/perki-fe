<template>
    <div class="max-w-screen-lg m-auto pt-24 pb-16 px-2" style="min-height: calc(100vh - 165px);">
        <div class="text-4xl text-blue-900 font-bold mb-1 text-center">
            SCHEDULE
        </div>
        <div class="text-small text-slate-600 mb-5 text-center">
            Jogja Cardiology Update 2026 in conjunction with The 9th Jogja International Cardiovascular Topic Series and 6th Intension Summit
        </div>

        <div v-if="loading" class="text-center text-slate-400 italic py-10">Loading...</div>

        <div v-else>
            <div class="grid grid-cols-3">
                <div @click="selected = 1"
                    :class="selected === 1 ? 'from-cyan-400 to-purple-400' : 'from-purple-800 to-cyan-800'"
                    class="text-white py-3 text-center rounded-tl-lg cursor-pointer hover:brightness-110 bg-gradient-to-r group transition duration-200">
                    <div class="text-2xl font-bold inline-block">
                        WORKSHOPS
                        <span :class="selected === 1 ? 'max-w-full' : 'max-w-0'"
                            class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                    </div>
                    <div class="text-xs opacity-80">Thursday, 1 October</div>
                </div>
                <div @click="selected = 2"
                    :class="selected === 2 ? 'from-cyan-400 to-purple-400' : 'from-purple-800 to-cyan-800'"
                    class="text-white py-3 text-center cursor-pointer hover:brightness-110 bg-gradient-to-r group transition duration-200">
                    <div class="text-2xl font-bold inline-block">
                        SYMPOSIUM DAY 1
                        <span :class="selected === 2 ? 'max-w-full' : 'max-w-0'"
                            class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                    </div>
                    <div class="text-xs opacity-80">Friday, 2 October</div>
                </div>
                <div @click="selected = 3"
                    :class="selected === 3 ? 'from-cyan-400 to-purple-400' : 'from-purple-800 to-cyan-800'"
                    class="text-white py-3 text-center cursor-pointer rounded-tr-lg hover:brightness-110 bg-gradient-to-r group transition duration-200">
                    <div class="text-2xl font-bold inline-block">
                        SYMPOSIUM DAY 2
                        <span :class="selected === 3 ? 'max-w-full' : 'max-w-0'"
                            class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                    </div>
                    <div class="text-xs opacity-80">Saturday, 3 October</div>
                </div>
            </div>

            <!-- Workshops (parallel morning/afternoon blocks) -->
            <div v-if="selected === 1" class="p-2 border-b border-slate-900">
                <div class="grid grid-cols-7 mb-4 border-b border-slate-300 pb-4" v-for="(slot, i) in schedule.workshops"
                    :key="'ws-' + i">
                    <div class="md:col-span-1 col-span-7 row-span-4 text-center">
                        <div class="inline-block bg-blue-200 px-2 py-1 rounded">
                            {{ $filters.formatTime(slot.date_start) }}
                            -
                            {{ $filters.formatTime(slot.date_end) }}
                        </div>
                    </div>
                    <div class="col-span-7 md:col-span-6">
                        <div class="col-span-7 mb-4" v-for="room in slot.rooms" :key="room.id">
                            <div class="grid grid-cols-4">
                                <div class="col-span-3">
                                    <div class="text-blue-800 font-bold">{{ room.name }}</div>
                                    <router-link :to="'/event/' + room.id"
                                        class="text-base font-semibold text-indigo-900 hover:underline">
                                        {{ room.title }}
                                    </router-link>
                                    <div class="text-sm my-2 pl-6">
                                        <ul class="list-disc">
                                            <li v-for="item in room.schedule_details" :key="item.id">
                                                {{ item.title }}
                                                <span class="font-semibold" v-if="item.speaker"><br>{{ item.speaker.name
                                                    }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-span-1" v-if="room.image">
                                    <router-link :to="'/event/' + room.id">
                                        <img class="w-full rounded-md" :src="base_url + room.image" :alt="room.title">
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Symposium, split into day 1 / day 2 by date -->
            <div v-if="selected === 2 || selected === 3" class="p-2 border-b border-slate-900">
                <div class="grid grid-cols-7 gap-2 mb-4 border-b border-slate-300 pb-4"
                    v-for="(slot, i) in symposiumDay(selected)" :key="'sympo-' + i">
                    <div class="col-span-7 md:col-span-1 text-center">
                        <div class="inline-block bg-blue-200 px-2 py-1 rounded">
                            {{ $filters.formatTime(slot.date_start) }} - {{ $filters.formatTime(slot.date_end) }}
                        </div>
                    </div>
                    <div class="col-span-7 md:col-span-4" v-if="slot.room_a">
                        <div class="text-blue-800 font-bold">{{ slot.room_a.name }}</div>
                        <router-link :to="'/event/' + slot.room_a.id"
                            class="text-lg font-semibold text-indigo-900 hover:underline">
                            {{ slot.room_a.title }}
                        </router-link>
                        <div class="text-sm my-2 pl-6">
                            <ul class="list-disc">
                                <li v-for="item in slot.room_a.schedule_details" :key="item.id">
                                    {{ item.title }}
                                    <span class="font-semibold" v-if="item.speaker"><br>{{ item.speaker.name }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-span-7 md:col-span-2" v-if="slot.room_a && slot.room_a.image">
                        <router-link :to="'/event/' + slot.room_a.id">
                            <img class="w-full rounded-md" :src="base_url + slot.room_a.image" :alt="slot.room_a.title">
                        </router-link>
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
            loading: true,
            selected: 1,
            schedule: {
                symposium: [],
                workshops: [],
            },
        }
    },
    methods: {
        loadSchedule() {
            this.loading = true
            this.apiGet('pub/schedule', { section: 'jcu26' })
                .then((data) => {
                    if (data.success && data.result) {
                        this.schedule = data.result
                    }
                    this.loading = false
                })
        },
        // Symposium runs across two days (2 & 3 October) — split by date_start
        // so tab 2 / tab 3 each show their own day.
        symposiumDay(tab) {
            let day = tab === 2 ? '2026-10-02' : '2026-10-03'
            return this.schedule.symposium.filter((slot) => (slot.date_start || '').startsWith(day))
        },
    },
    created() {
        this.loadSchedule()
    },
}
</script>

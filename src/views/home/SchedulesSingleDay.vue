<template>
    <div class="max-w-screen-lg m-auto pt-4 px-2" id="schedule">
        <div class="text-4xl text-blue-900 font-bold mb-1 text-center tracking-tight">
            SCHEDULE
        </div>
        <div class="text-small text-slate-600 mb-5 text-center">
            Jogja Cardiology Update 2024 in conjunction with The Seventh Jogja International Cardiovascular Topic Series
        </div>
        <div class="grid grid-cols-2">
            <div @click="selected = 1"
                :class="selected === 1 ? 'from-cyan-400 to-purple-400' : 'from-purple-800 to-cyan-800'"
                class="text-white py-3 text-center rounded-tl-lg cursor-pointer hover:brightness-110 bg-gradient-to-r group transition duration-200">
                <div class="text-2xl font-bold inline-block">
                    SYMPOSIUM
                    <span :class="selected === 1 ? 'max-w-full' : 'max-w-0'"
                        class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                </div>
            </div>
            <div @click="selected = 2"
                :class="selected === 2 ? 'from-cyan-400 to-purple-400' : 'from-purple-800 to-cyan-800'"
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
                        <!-- <div class="col-span-1">
                            <a target="_blank" :href="base_url + ws_hd.image">
                                <img class="w-full" :src="base_url + ws_hd.image" alt="">
                            </a>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
        <div v-if="selected === 2" class="p-2 border-b border-slate-900">
            <div class="grid grid-cols-2 gap-2 md:grid-cols-7 mb-4 border-b border-slate-300"
                v-for="(workshop, s) in schedule.workshops" :key="workshop.id || workshop.slug || s">
                <div class="col-span-2 text-center md:col-span-1">
                    <div class="inline-block bg-blue-200 px-2 py-1 rounded">
                        {{ $filters.formatTime(workshop.date_start) }}
                        -
                        {{ $filters.formatTime(workshop.date_end) }}
                    </div>
                </div>
                <div :class="workshop.room_b ? 'col-span-2 md:col-span-3' : 'col-span-2 md:col-span-6'">
                    <div v-if="workshop.room_a">
                        <div class="text-blue-800 font-bold">
                            {{ workshop.room_a.name }}
                        </div>
                        <div class="text-base font-semibold">
                            {{ workshop.room_a.title }}
                        </div>
                        <div class="text-sm my-2 pl-6">
                            <ul class="list-disc">
                                <li v-for="item in getRoomItems(workshop.room_a)" :key="item.id || item.slug || item.title">
                                    {{ item.title || item.name }}
                                    <span class="font-semibold" v-if="getSpeakerName(item)"><br>{{ getSpeakerName(item) }}</span>
                                </li>
                            </ul>
                        </div>
                        <!-- <div>
                            <div class="text-center hover:bg-slate-100 cursor-pointer"
                                @click="() => { workshop.room_a.show = !workshop.room_a.show }">
                                <unicon name="angle-down" height="25px" v-if="!workshop.room_a.show">
                                </unicon>
                                <unicon name="angle-up" height="25px" v-if="workshop.room_a.show"></unicon>
                            </div>
                            <a target="_blank" :href="base_url + saturday.room_a.image"
                                v-if="saturday.room_a.show && saturday.room_a.image">
                                <img class="w-full" :src="base_url + saturday.room_a.image" alt="">
                            </a>
                        </div> -->
                    </div>
                </div>
                <div class="col-span-2 md:col-span-3">
                    <div v-if="workshop.room_b">
                        <div class="text-blue-800 font-bold">
                            {{ workshop.room_b.name }}
                        </div>
                        <div class="text-base font-semibold">
                            {{ workshop.room_b.title }}
                        </div>
                        <div class="text-sm my-2 pl-6">
                            <ul class="list-disc">
                                <li v-for="item in getRoomItems(workshop.room_b)" :key="item.id || item.slug || item.title">
                                    {{ item.title || item.name }}
                                    <span class="font-semibold" v-if="getSpeakerName(item)"><br>{{ getSpeakerName(item) }}</span>
                                </li>
                            </ul>
                        </div>
                        <!-- <div>
                            <div class="text-center hover:bg-slate-100 cursor-pointer"
                                @click="() => { workshop.room_b.show = !workshop.room_b.show }">
                                <unicon name="angle-down" height="25px" v-if="!workshop.room_b.show">
                                </unicon>
                                <unicon name="angle-up" height="25px" v-if="workshop.room_b.show"></unicon>
                            </div>
                            <a target="_blank" :href="base_url + saturday.room_b.image"
                                v-if="saturday.room_b.show && saturday.room_b.image">
                                <img class="w-full" :src="base_url + saturday.room_b.image" alt="">
                            </a>
                        </div> -->
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
            this.apiGet('pub/schedule', { section: 'jvm26' })
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

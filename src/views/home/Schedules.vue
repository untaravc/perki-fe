<template>
    <div class="max-w-screen-lg m-auto pt-4 px-2" id="schedule">
        <div class="text-4xl text-blue-900 font-bold mb-1 text-center">
            SCHEDULE
        </div>
        <div class="text-small text-slate-600 mb-5 text-center">
            Jogja Cardiology Update 2024 in conjunction with The Seventh Jogja International Cardiovascular Topic Series
        </div>
        <div class="grid grid-cols-3">
            <div @click="selected = 1"
                :class="selected === 1 ? 'from-cyan-400 to-purple-400' : 'from-purple-800 to-cyan-800'"
                class="text-white py-3 text-center rounded-tl-lg cursor-pointer hover:bg-yellow-500 bg-gradient-to-r group transition duration-200">
                <div class="text-2xl font-bold inline-block">
                    FRIDAY
                    <span :class="selected === 1 ? 'max-w-full' : 'max-w-0'"
                        class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                </div>
            </div>
            <div @click="selected = 2"
                :class="selected === 2 ? 'from-cyan-400 to-purple-400' : 'from-purple-800 to-cyan-800'"
                class="text-white py-3 text-center cursor-pointer hover:bg-cyan-600 bg-gradient-to-r group transition duration-200">
                <div class="text-2xl font-bold inline-block">
                    SATURDAY
                    <span :class="selected === 2 ? 'max-w-full' : 'max-w-0'"
                        class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                </div>
            </div>
            <div @click="selected = 3"
                :class="selected === 3 ? 'from-cyan-400 to-purple-400' : 'from-purple-800 to-cyan-800'"
                class="text-white py-3 text-center cursor-pointer  rounded-tr-lg hover:bg-indigo-700 bg-gradient-to-r group transition duration-200">
                <div class="text-2xl font-bold inline-block">
                    SUNDAY
                    <span :class="selected === 3 ? 'max-w-full' : 'max-w-0'"
                        class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                </div>
            </div>
        </div>
        <div v-if="selected === 1" class="p-2 border-b border-slate-900">
            <div class="text-center bg-yellow-200 py-1 font-semibold mb-2 rounded-md">
                Get a minimum of 22 SKP IDI per Workshop
            </div>
            <div class="grid grid-cols-7">
                <div class="md:col-span-1 col-span-7 row-span-4 text-center">
                    <div class="inline-block bg-blue-300 px-2 py-1 rounded">
                        {{ $filters.formatTime("2023-09-01 08:00:00") }}
                        -
                        {{ $filters.formatTime("2023-09-01 11:00:00") }}
                    </div>
                </div>
                <div class="col-span-7 md:col-span-6 mb-4 border-b border-slate-300"
                    v-for="ws_hd in schedule.workshop_half_day_1">
                    <div class="grid grid-cols-4">
                        <div class="col-span-3">
                            <div class="text-indigo-700 font-bold">{{ ws_hd.name }}</div>
                            <div class="text-base font-semibold">
                                {{ ws_hd.title }}
                            </div>
                            <div class="text-sm my-2 pl-6">
                                <ul class="list-disc">
                                    <li v-for="item in ws_hd.schedules">
                                        {{ item.title }}
                                        <span class="font-semibold" v-if="item.speaker"><br>{{ item.speaker.name
                                            }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-span-1">
                            <a target="_blank" :href="base_url + ws_hd.image">
                                <img class="w-full" :src="base_url + ws_hd.image" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-7">
                <div class="md:col-span-1 col-span-7 row-span-4 text-center">
                    <div class="inline-block bg-blue-300 px-2 py-1 rounded">
                        {{ $filters.formatTime("2023-09-01 13:00:00") }}
                        -
                        {{ $filters.formatTime("2023-09-01 16:00:00") }}
                    </div>
                </div>
                <div class="col-span-7 md:col-span-6 mb-4 border-b border-slate-300"
                    v-for="ws_hd in schedule.workshop_half_day_2">
                    <div class="grid grid-cols-4">
                        <div class="col-span-3">
                            <div class="text-indigo-700 font-bold">{{ ws_hd.name }}</div>
                            <div class="text-base font-semibold">
                                {{ ws_hd.title }}
                            </div>
                            <div class="text-sm my-2 pl-6">
                                <ul class="list-disc">
                                    <li v-for="item in ws_hd.schedules">
                                        {{ item.title }}
                                        <span class="font-semibold" v-if="item.speaker"><br>{{ item.speaker.name
                                            }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-span-1 mb-2">
                            <a target="_blank" :href="base_url + ws_hd.image">
                                <img class="w-full rounded-md" :src="base_url + ws_hd.image" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="selected === 2" class="p-2 border-b border-slate-900">
            <div class="text-center bg-yellow-200 py-1 font-semibold mb-2 rounded-md">
                Get a minimum of 16 SKP IDI per Day Symposium
            </div>
            <div class="grid grid-cols-2 gap-2 md:grid-cols-7 mb-4 border-b border-slate-300"
                v-for="(saturday, s) in schedule.saturday">
                <div class="col-span-2 text-center md:col-span-1">
                    <div class="inline-block bg-blue-300 px-2 py-1 rounded">
                        {{ $filters.formatTime(saturday.date_start) }}
                        -
                        {{ $filters.formatTime(saturday.date_end) }}
                    </div>
                </div>
                <div class="col-span-2 md:col-span-3">
                    <div v-if="saturday.room_a">
                        <div class="text-indigo-700 font-bold">
                            {{ saturday.room_a.name }}
                        </div>
                        <div class="text-base font-semibold">
                            {{ saturday.room_a.title }}
                        </div>
                        <div class="text-sm my-2 pl-6">
                            <ul class="list-disc">
                                <li v-for="item in saturday.room_a.schedule_details">
                                    {{ item.title }}
                                    <span class="font-semibold" v-if="item.speaker"><br>{{ item.speaker.name }}</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div class="text-center hover:bg-slate-100 cursor-pointer"
                                @click="() => { saturday.room_a.show = !saturday.room_a.show }">
                                <unicon name="angle-down" height="25px" v-if="!saturday.room_a.show">
                                </unicon>
                                <unicon name="angle-up" height="25px" v-if="saturday.room_a.show"></unicon>
                            </div>
                            <a target="_blank" :href="base_url + saturday.room_a.image"
                                v-if="saturday.room_a.show && saturday.room_a.image">
                                <img class="w-full" :src="base_url + saturday.room_a.image" alt="">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-span-2 md:col-span-3">
                    <div v-if="saturday.room_b">
                        <div class="text-indigo-700 font-bold">
                            {{ saturday.room_b.name }}
                        </div>
                        <div class="text-base font-semibold">
                            {{ saturday.room_b.title }}
                        </div>
                        <div class="text-sm my-2 pl-6">
                            <ul class="list-disc">
                                <li v-for="item in saturday.room_b.schedule_details">
                                    {{ item.title }}
                                    <span class="font-semibold" v-if="item.speaker"><br>{{ item.speaker.name }}</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div class="text-center hover:bg-slate-100 cursor-pointer"
                                @click="() => { saturday.room_b.show = !saturday.room_b.show }">
                                <unicon name="angle-down" height="25px" v-if="!saturday.room_b.show">
                                </unicon>
                                <unicon name="angle-up" height="25px" v-if="saturday.room_b.show"></unicon>
                            </div>
                            <a target="_blank" :href="base_url + saturday.room_b.image"
                                v-if="saturday.room_b.show && saturday.room_b.image">
                                <img class="w-full" :src="base_url + saturday.room_b.image" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="selected === 3" class="p-2 border-b border-slate-900">
            <div class="text-center bg-yellow-200 py-1 font-semibold mb-2 rounded-md">
                Get a minimum of 16 SKP IDI per Day Symposium
            </div>
            <div class="grid grid-cols-2 gap-2 md:grid-cols-7 mb-4 border-b border-slate-300"
                v-for="sunday in schedule.sunday">
                <div class="col-span-2 text-center md:col-span-1">
                    <div class="inline-block bg-blue-300 px-2 py-1 rounded">
                        {{ $filters.formatTime(sunday.date_start) }}
                        -
                        {{ $filters.formatTime(sunday.date_end) }}
                    </div>
                </div>
                <div class="col-span-7 md:col-span-3">
                    <div v-if="sunday.room_a">
                        <div class="text-indigo-700 font-bold">
                            {{ sunday.room_a.name }}
                        </div>
                        <div class="text-base font-semibold">
                            {{ sunday.room_a.title }}
                        </div>
                        <div class="text-sm my-2 pl-6">
                            <ul class="list-disc">
                                <li v-for="item in sunday.room_a.schedule_details">
                                    {{ item.title }}
                                    <span class="font-semibold" v-if="item.speaker"><br>{{ item.speaker.name }}</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div class="text-center hover:bg-slate-100 cursor-pointer"
                                @click="() => { sunday.room_a.show = !sunday.room_a.show }">
                                <unicon name="angle-down" height="25px" v-if="!sunday.room_a.show">
                                </unicon>
                                <unicon name="angle-up" height="25px" v-if="sunday.room_a.show"></unicon>
                            </div>
                            <a target="_blank" :href="base_url + sunday.room_a.image"
                                v-if="sunday.room_a.show && sunday.room_a.image">
                                <img class="w-full" :src="base_url + sunday.room_a.image" alt="">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-span-7 md:col-span-3">
                    <div v-if="sunday.room_b">
                        <div class="text-indigo-700 font-bold">
                            {{ sunday.room_b.name }}
                        </div>
                        <div class="text-base font-semibold">
                            {{ sunday.room_b.title }}
                        </div>
                        <div class="text-sm my-2 pl-6">
                            <ul class="list-disc">
                                <li v-for="item in sunday.room_b.schedule_details">
                                    {{ item.title }}
                                    <span class="font-semibold" v-if="item.speaker"><br>{{ item.speaker.name }}</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div class="text-center hover:bg-slate-100 cursor-pointer"
                                @click="() => { sunday.room_b.show = !sunday.room_b.show }">
                                <unicon name="angle-down" height="25px" v-if="!sunday.room_b.show">
                                </unicon>
                                <unicon name="angle-up" height="25px" v-if="sunday.room_b.show"></unicon>
                            </div>
                            <a target="_blank" :href="base_url + sunday.room_b.image"
                                v-if="sunday.room_b.show && sunday.room_b.image">
                                <img class="w-full" :src="base_url + sunday.room_b.image" alt="">
                            </a>
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
                workshop_half_day_1: [],
                workshop_half_day_2: [],
                friday: [],
                saturday: [],
            },
        }
    },
    methods: {
        getSchedule() {
            this.apiGet('pub/schedule', { ref: 2024 })
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
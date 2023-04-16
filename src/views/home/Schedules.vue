<template>
    <div class="max-w-screen-lg m-auto pt-24" id="schedule">
        <div class="text-4xl text-blue-900 font-bold mb-1 text-center">
            JADWAL ACARA
        </div>
        <div class="text-small text-slate-600 mb-5 text-center">
            Jogja Cardiology Update 2023 in conjunction with The Sixth Jogja International Cardiovascular Topik Series
        </div>
        <div class="grid grid-cols-3">
            <div @click="selected = 1"
                 class="bg-yellow-400 text-white py-3 text-center rounded-tl-lg cursor-pointer hover:bg-yellow-500 group transition duration-200">
                <div class="text-2xl font-bold inline-block">
                    JUMAT
                    <span :class="selected === 1 ? 'max-w-full' : 'max-w-0'"
                          class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                </div>
            </div>
            <div @click="selected = 2"
                 class="bg-cyan-500 text-white py-3 text-center cursor-pointer hover:bg-cyan-600 group transition duration-200">
                <div class="text-2xl font-bold inline-block">
                    SABTU
                    <span :class="selected === 2 ? 'max-w-full' : 'max-w-0'"
                          class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                </div>
            </div>
            <div @click="selected = 3"
                 class="bg-indigo-600 text-white py-3 text-center cursor-pointer  rounded-tr-lg hover:bg-indigo-700 group transition duration-200">
                <div class="text-2xl font-bold inline-block">
                    MINGGU
                    <span :class="selected === 3 ? 'max-w-full' : 'max-w-0'"
                          class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                </div>
            </div>
        </div>
        <div v-if="selected === 1" class="p-2 border-b border-slate-900">
            <div class="grid grid-cols-7" v-for="friday in schedule.friday">
                <div class="col-span-1">
                    {{ $filters.formatTime(friday.date_start) }}
                    -
                    {{ $filters.formatTime(friday.date_end) }}
                </div>
                <div class="col-span-3">
                    <div class="text-indigo-700 font-bold">
                        {{ friday.room_a.name }}
                    </div>
                    <div class="text-lg font-semibold">
                        {{ friday.room_a.title }}
                    </div>
                    <div class="text-sm">
                        <span class="bg-slate-200 py-1 px-2 rounded-lg mr-1">Speaker 1</span>
                        <span class="bg-slate-200 py-1 px-2 rounded-lg mr-1">Speaker 2</span>
                    </div>
                </div>
                <div class="col-span-3">
                    <div class="text-indigo-700 font-bold">
                        {{ friday.room_b.name }}
                    </div>
                    <div class="text-base font-semibold">
                        {{ friday.room_b.title }}
                    </div>
                    <div class="text-sm my-2">
                        <span class="bg-slate-200 py-1 px-2 rounded mr-1">Speaker 1</span>
                        <span class="bg-slate-200 py-1 px-2 rounded mr-1">Speaker 2</span>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="selected === 2" class="p-2 border-b border-slate-900">
            <div class="grid grid-cols-7 mb-4 border-b border-slate-300" v-for="saturday in schedule.saturday">
                <div class="col-span-1">
                    {{ $filters.formatTime(saturday.date_start) }}
                    -
                    {{ $filters.formatTime(saturday.date_end) }}
                </div>
                <div class="col-span-3">
                    <div class="text-indigo-700 font-bold">
                        {{ saturday.room_a.name }}
                    </div>
                    <div class="text-lg font-semibold">
                        {{ saturday.room_a.title }}
                    </div>
                    <div class="text-sm">
                        <span class="bg-slate-200 py-1 px-2 rounded-lg mr-1">Speaker 1</span>
                        <span class="bg-slate-200 py-1 px-2 rounded-lg mr-1">Speaker 2</span>
                    </div>
                </div>
                <div class="col-span-3">
                    <div class="text-indigo-700 font-bold">
                        {{ saturday.room_b.name }}
                    </div>
                    <div class="text-base font-semibold">
                        {{ saturday.room_b.title }}
                    </div>
                    <div class="text-sm my-2">
                        <span class="bg-slate-200 py-1 px-2 rounded mr-1">Speaker 1</span>
                        <span class="bg-slate-200 py-1 px-2 rounded mr-1">Speaker 2</span>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-7">
                <div class="col-span-1 row-span-4">
                    {{ $filters.formatTime("2023-09-02 13:00:00") }}
                    -
                    {{ $filters.formatTime("2023-09-02 16:00:00") }}
                </div>
                <div class="col-span-6 mb-4 border-b border-slate-300" v-for="ws_hd in schedule.workshop_half_day">
                    <div class="text-indigo-700 font-bold">{{ws_hd.name}}</div>
                </div>
            </div>
        </div>
        <div v-if="selected === 3" class="p-2 border-b border-slate-900">
            <div class="grid grid-cols-7">
                <div class="col-span-1 row-span-4">
                    {{ $filters.formatTime("2023-09-02 13:00:00") }}
                    -
                    {{ $filters.formatTime("2023-09-02 16:00:00") }}
                </div>
                <div class="col-span-6 mb-4 border-b border-slate-300" v-for="ws_fd in schedule.workshop_full_day">
                    <div class="text-indigo-700 font-bold">{{ws_fd.name}}</div>
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
                workshop_half_day:[],
                friday:[],
                saturday:[],
            },
        }
    },
    methods: {
        getSchedule() {
            this.apiGet('pub/schedule')
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
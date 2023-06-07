<template>
    <div class="max-w-screen-lg m-auto pt-4 px-2" id="schedule">
        <div class="text-4xl text-blue-900 font-bold mb-1 text-center">
            SCHEDULE
        </div>
        <div class="text-small text-slate-600 mb-5 text-center">
            Jogja Cardiology Update 2023 in conjunction with The Sixth Jogja International Cardiovascular Topic Series
        </div>
        <div class="grid grid-cols-3">
            <div @click="selected = 1" :class="selected === 1 ? 'bg-yellow-400' : 'bg-slate-500'"
                 class="text-white py-3 text-center rounded-tl-lg cursor-pointer hover:bg-yellow-500 group transition duration-200">
                <div class="text-2xl font-bold inline-block">
                    FRIDAY
                    <span :class="selected === 1 ? 'max-w-full' : 'max-w-0'"
                          class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                </div>
            </div>
            <div @click="selected = 2" :class="selected === 2 ? 'bg-cyan-500' : 'bg-slate-500'"
                 class="text-white py-3 text-center cursor-pointer hover:bg-cyan-600 group transition duration-200">
                <div class="text-2xl font-bold inline-block">
                    SATURDAY
                    <span :class="selected === 2 ? 'max-w-full' : 'max-w-0'"
                          class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                </div>
            </div>
            <div @click="selected = 3" :class="selected === 3 ? 'bg-indigo-600 ' : 'bg-slate-500'"
                 class="text-white py-3 text-center cursor-pointer  rounded-tr-lg hover:bg-indigo-700 group transition duration-200">
                <div class="text-2xl font-bold inline-block">
                    SUNDAY
                    <span :class="selected === 3 ? 'max-w-full' : 'max-w-0'"
                          class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                </div>
            </div>
        </div>
        <div v-if="selected === 1" class="p-2 border-b border-slate-900">
            <div class="grid grid-cols-7">
                <div class="col-span-1 row-span-4 text-center">
                    <div class="inline-block bg-blue-300 px-2 py-1 rounded">
                        {{ $filters.formatTime("2023-09-01 08:00:00") }}
                        -
                        {{ $filters.formatTime("2023-09-01 11:00:00") }}
                    </div>
                </div>
                <div class="col-span-6 mb-4 border-b border-slate-300" v-for="ws_hd in schedule.workshop_half_day_1">
                    <div class="text-indigo-700 font-bold">{{ ws_hd.name }}</div>
                    <div class="text-base font-semibold">
                        {{ ws_hd.title }}
                    </div>
                    <div class="text-sm my-2 pl-6">
                        <ul class="list-disc">
                            <li v-for="item in ws_hd.schedules">{{item.title}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-7">
                <div class="col-span-1 row-span-4 text-center">
                    <div class="inline-block bg-blue-300 px-2 py-1 rounded">
                        {{ $filters.formatTime("2023-09-01 13:00:00") }}
                        -
                        {{ $filters.formatTime("2023-09-01 16:00:00") }}
                    </div>
                </div>
                <div class="col-span-6 mb-4 border-b border-slate-300" v-for="ws_hd in schedule.workshop_half_day_2">
                    <div class="text-indigo-700 font-bold">{{ ws_hd.name }}</div>
                    <div class="text-base font-semibold">
                        {{ ws_hd.title }}
                    </div>
                    <div class="text-sm my-2 pl-6">
                        <ul class="list-disc">
                            <li v-for="item in ws_hd.schedules">{{item.title}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="selected === 2" class="p-2 border-b border-slate-900">
            <div class="grid grid-cols-2 gap-2 md:grid-cols-7 mb-4 border-b border-slate-300"
                 v-for="saturday in schedule.saturday">
                <div class="col-span-2 text-center md:col-span-1">
                    <div class="inline-block bg-blue-300 px-2 py-1 rounded">
                        {{ $filters.formatTime(saturday.date_start) }}
                        -
                        {{ $filters.formatTime(saturday.date_end) }}
                    </div>
                </div>
                <div class="col-span-1 md:col-span-3">
                    <div v-if="saturday.room_a">
                        <div class="text-indigo-700 font-bold">
                            {{ saturday.room_a.name }}
                        </div>
                        <div class="text-base font-semibold">
                            {{ saturday.room_a.title }}
                        </div>
                        <div class="text-sm my-2 pl-6">
                            <ul class="list-disc">
                                <li v-for="item in saturday.room_a.schedule_details">{{item.title}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-span-1 md:col-span-3">
                    <div v-if="saturday.room_b">
                        <div class="text-indigo-700 font-bold">
                            {{ saturday.room_b.name }}
                        </div>
                        <div class="text-base font-semibold">
                            {{ saturday.room_b.title }}
                        </div>
                        <div class="text-sm my-2 pl-6">
                            <ul class="list-disc">
                                <li v-for="item in saturday.room_b.schedule_details">{{item.title}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="selected === 3" class="p-2 border-b border-slate-900">
            <div class="grid grid-cols-2 gap-2 md:grid-cols-7 mb-4 border-b border-slate-300"
                 v-for="sunday in schedule.sunday">
                <div class="col-span-2 text-center md:col-span-1">
                    <div class="inline-block bg-blue-300 px-2 py-1 rounded">
                        {{ $filters.formatTime(sunday.date_start) }}
                        -
                        {{ $filters.formatTime(sunday.date_end) }}
                    </div>
                </div>
                <div class="col-span-1 md:col-span-3">
                    <div v-if="sunday.room_a">
                        <div class="text-indigo-700 font-bold">
                            {{ sunday.room_a.name }}
                        </div>
                        <div class="text-base font-semibold">
                            {{ sunday.room_a.title }}
                        </div>
                        <div class="text-sm my-2 pl-6">
                            <ul class="list-disc">
                                <li v-for="item in sunday.room_a.schedule_details">{{item.title}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-span-1 md:col-span-3">
                    <div v-if="sunday.room_b">
                        <div class="text-indigo-700 font-bold">
                            {{ sunday.room_b.name }}
                        </div>
                        <div class="text-base font-semibold">
                            {{ sunday.room_b.title }}
                        </div>
                        <div class="text-sm my-2 pl-6">
                            <ul class="list-disc">
                                <li v-for="item in sunday.room_b.schedule_details">{{item.title}}</li>
                            </ul>
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
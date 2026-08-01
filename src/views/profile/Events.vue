<template>
    <div>
        <div class="text-2xl font-bold text-slate-900 mb-3">My Event</div>
        <div v-if="data_content.length === 0" class="p-6 text-center italic text-slate-400 bg-white rounded-3xl shadow-xl shadow-slate-200/70 ring-1 ring-slate-100">
            no data
        </div>
        <div class="bg-white rounded-2xl shadow-sm shadow-slate-200/60 ring-1 ring-slate-100 mb-3 overflow-hidden" v-for="event in data_content">
            <div class="bg-slate-50 py-3 px-4 flex justify-between">
                <div class="flex items-center text-slate-500">
                    <unicon name="clock" width="15" height="15" fill="currentColor"></unicon>
                    <div class="text-xs ml-1" v-if="event.event">
                        {{$filters.formatDayDateTime(event.event.date_start)}}
                    </div>
                </div>
                <div class="text-xs text-violet-600 font-semibold">
                    <span ></span>
                </div>
            </div>
            <div class="p-4">
                <div>
                    <div class="font-semibold cursor-pointer text-violet-600 hover:text-violet-700">
                        {{event.event_name}}
                    </div>
                    <div class="text-slate-600" v-if="event.event">
                        <span>{{event.event.title}}</span>
                    </div>
                    <div class="flex justify-end mt-3 gap-2">
                        <div class="bg-teal-500 flex cursor-pointer hover:bg-teal-600 items-center text-white px-3 py-1.5 text-sm rounded-full transition-colors">
                            <unicon name="location-point" fill="white" height="14px" width="14px"></unicon>
                            <div class="ml-1">Location</div>
                        </div>
                        <div class="bg-violet-600 flex cursor-pointer hover:bg-violet-700 items-center text-white px-3 py-1.5 text-sm rounded-full transition-colors">
                            <unicon name="play" fill="white" height="14px" width="14px"></unicon>
                            <div class="ml-1">Information</div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            data_content:[],
        }
    },
    methods:{
        loadData(){
            this.authGet('pub/event-schedules')
                .then((data)=>{
                    this.data_content = data.result
                })
        }
    },
    created() {
        this.loadData()
    }
}
</script>

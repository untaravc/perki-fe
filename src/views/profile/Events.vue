<template>
    <div>
        <div class="text-2xl font-semibold mb-3">Event Saya</div>
        <div class="border-slate-200 border bg-white rounded mb-2" v-for="event in data_content">
            <div class="bg-slate-100 rounded-t py-3 px-4 flex justify-between">
                <div class="flex">
                    <unicon name="clock" width="15" height="15"></unicon>
                    <div class="text-xs ml-1" v-if="event.event">
                        {{$filters.formatDayDateTime(event.event.date_start)}}
                    </div>
                </div>
                <div class="text-xs text-blue-500 font-semibold">
                    <span ></span>
                </div>
            </div>
            <div class="p-3">
                <div>
                    <div class="font-semibold cursor-pointer text-blue-700 hover:text-blue-800">
                        {{event.event_name}}
                    </div>
                    <div class="" v-if="event.event">
                        <span>{{event.event.title}}</span>
                    </div>
                    <div class="flex justify-end mt-2">
                        <div class="bg-green-700 flex mx-1 cursor-pointer hover:bg-green-800 items-center text-white px-2 py-1 text-sm rounded-lg">
                            <unicon name="location-point" fill="white" height="14px" width="14px"></unicon>
                            <div class="ml-1">Lokasi</div>
                        </div>
                        <div class="bg-blue-700 flex mx-1 cursor-pointer hover:bg-blue-800 items-center text-white px-2 py-1 text-sm rounded-lg">
                            <unicon name="play" fill="white" height="14px" width="14px"></unicon>
                            <div class="ml-1">Informasi</div>
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
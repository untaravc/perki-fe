<template>
    <div class="max-w-screen-lg m-auto pt-16">
        <div class="grid md:grid-cols-5 lg:gap-6 mb-12 mt-20">
            <div class="md:order-2 rounded-lg md:col-span-2 relative bg-contain h-96 bg-center bg-no-repeat w-full" :class="`bg-[url('` + data_content[index]['poster'] + `')]`"></div>
            <div class="md:col-span-3 md:order-1">
                <div class="m-5 bg-blue-300 rounded-full py-1 px-8 italic text-sm inline-block">
                    {{data_content[index]['date']}}
                </div>
                <div class="mx-5 mb-5 text-4xl lg:text-6xl  font-bold text-blue-900">
                    {{data_content[index]['title']}}
                </div>
                <div class="mx-5 mb-5 lg:w-9/12 text-lg text-slate-600 italic">
                    {{data_content[index]['subtitle']}}
                </div>
                <div class="mx-5 flex">
                    <router-link to="/schedule"
                                 class="text-blue-900 mr-4 inline-block items-center border border-blue-900 hover:bg-blue-900 hover:text-white font-medium rounded-full text-lg px-9 py-3 text-center">
                        <div class="mr-2">Jadwal</div>
                    </router-link>
                    <router-link to="/register"
                                 class="text-white inline-block flex items-center bg-blue-900 hover:bg-blue-800 font-medium rounded-full text-lg px-9 py-3 text-center">
                        <div class="mr-2">Daftar</div>
                        <unicon name="arrow-right" fill="white"></unicon>
                    </router-link>
                </div>
                <div class="flex ml-6 mt-4">
                    <div @click="prev" class="p-3 mx-1 border border-blue-300 cursor-pointer hover:bg-blue-200 h-12 w-12 flex justify-center items-center rounded-full">
                        <unicon name="angle-left"></unicon>
                    </div>
                    <div @click="next" class="p-3 mx-1 border border-blue-300 cursor-pointer hover:bg-blue-200 h-12 w-12 flex justify-center items-center rounded-full">
                        <unicon name="angle-right"></unicon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            index: 0,
            data_content:[
                {
                    title: "Jogja Cardiology Update",
                    subtitle: "Integrating Technology In Cardiovascular Disease Management: Towards A Harmonic Fusion",
                    date: "Yogyakarta, 1-3 September 2023",
                    poster: '/storage/img/1st_announcement.jpg',
                },
                {
                    title: "12 Symposium & 8 Workshop",
                    subtitle: "Integrating Technology In Cardiovascular Disease Management: Towards A Harmonic Fusion",
                    date: "Yogyakarta, 1-3 September 2023",
                    poster: '/storage/img/1st_announcement.jpg',
                }
            ]
        }
    },
    methods:{
        next(){
            let count = this.data_content.length - 1;
            if(this.index < count){
                this.index++
            } else {
                this.index = 0
            }
        },
        prev(){
            if(this.index > 0){
                this.index--
            } else {
                this.index = this.data_content.length - 1;
            }
        }
    },
    mounted() {
        setInterval(()=>{
            this.next()
        }, 5000)
    }
}
</script>
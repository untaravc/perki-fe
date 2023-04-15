<template>
    <div class="max-w-screen-lg m-auto pt-20">
        <div class="max-w-screen-lg m-auto py-12">
            <div class="text-4xl text-blue-900 font-bold mb-1 text-center">
                JADWAL ACARA
            </div>
            <div class="text-small text-slate-600 mb-5 text-center">
                Jogja Cardiology Update 2023 in conjunction with The Sixth Jogja International Cardiovascular Topik
                Series
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
                <div class="grid grid-cols-7">
                    <div class="col-span-1">
                        09.00-10.15
                    </div>
                    <div class="col-span-3">
                        <div class="text-indigo-700 font-bold">
                            Symposoum 1
                        </div>
                        <div class="text-lg font-semibold">You can achieve that in pure tailwind with group</div>
                        <div class="text-sm">
                            <span
                                class="bg-slate-200 py-1 px-2 rounded-lg mr-1">Irsad Andi Arso</span>
                            <span class="bg-slate-200 py-1 px-2 rounded-lg mr-1">Bambang Irawan</span>
                        </div>
                    </div>
                    <div class="col-span-3">
                        <div class="text-indigo-700 font-bold">
                            Symposoum 2
                        </div>
                        <div class="text-lg font-semibold">You can achieve that in pure tailwind with group</div>
                        <div class="text-sm my-2">
                            <span class="bg-slate-200 py-1 px-2 rounded mr-1">Irsad Andi Arso</span>
                            <span class="bg-slate-200 py-1 px-2 rounded mr-1">Bambang Irawan</span>
                        </div>
                        <div @click="show = !show"
                             class="bg-slate-300 hover:bg-slate-400 rounded h-5 flex justify-center cursor-pointer ">
                            <unicon name="angle-down" fill="white"></unicon>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="selected === 2">
                sabtu
            </div>
            <div v-if="selected === 3">
                minggu
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: 1,
        }
    },
    methods: {},
    mounted() {
    },
    created() {
    }
}
</script>
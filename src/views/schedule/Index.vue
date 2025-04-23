<template>
    <div class="max-w-screen-lg m-auto pt-20">
        <div class="max-w-screen-lg m-auto py-12">
            <div class="text-4xl text-rose-900 font-bold mb-1 text-center">
                JADWAL ACARA
            </div>
            <div class="text-small text-rose-600 mb-5 text-center">

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
                    class="bg-rose-500 text-white py-3 text-center cursor-pointer hover:bg-rose-600 group transition duration-200">
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
            <div v-if="selected === 1" class="p-2 border-b border-rose-900">
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
                            <span class="bg-rose-200 py-1 px-2 rounded-lg mr-1">Irsad Andi Arso</span>
                            <span class="bg-rose-200 py-1 px-2 rounded-lg mr-1">Bambang Irawan</span>
                        </div>
                    </div>
                    <div class="col-span-3">
                        <div class="text-indigo-700 font-bold">
                            Symposoum 2
                        </div>
                        <div class="text-lg font-semibold">You can achieve that in pure tailwind with group</div>
                        <div class="text-sm my-2">
                            <span class="bg-rose-200 py-1 px-2 rounded mr-1">Irsad Andi Arso</span>
                            <span class="bg-rose-200 py-1 px-2 rounded mr-1">Bambang Irawan</span>
                        </div>
                        <div @click="show = !show"
                            class="bg-rose-300 hover:bg-rose-400 rounded h-5 flex justify-center cursor-pointer ">
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
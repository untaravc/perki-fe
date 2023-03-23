<template>
    <div class="max-w-screen-lg m-auto p-10">
        <div class="text-4xl text-blue-900 font-bold mb-1 text-center">
            PEMBICARA
        </div>
        <div class="text-small text-slate-600 mb-5 text-center">
            Pembicara adalah pada ahli dalam bidang Kardiologi dan Kedokteran Vaskular serta bidang-bidang terkait baik tingkat lokal maupun nasional
        </div>
        <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
            <div class="group" v-for="speaker in count">
                <div style="padding-bottom: 100%"
                     class="w-full bg-purple-300 bg-cover rounded-md bg-center bg-no-repeat bg-[url('https://picsum.photos/200/300')]">
                </div>
                <div>
                    <h4 class="font-bold text-lg">Budi Satria Isman</h4>
                    <div class="text-xs text-neutral-material-700">President Commisioner</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 8
        }
    }
}
</script>
<template>
    <div class="max-w-screen-lg m-auto px-6 py-12">
        <div class="text-4xl text-blue-900 font-bold mb-1 text-center">
            JADWAL ACARA
        </div>
        <div class="text-small text-slate-600 mb-5 text-center">
            Jogja Cardiology Update 2023 in conjunction with The Sixth Jogja International Cardiovascular Topik Series
        </div>
        <div id="accordion-color" data-accordion="collapse"
             data-active-classes="bg-blue-900 text-blue-50">
            <div v-for="idx in count" class="border rounded-3xl border-gray-200 mb-3">
                <div :id="'accordion-color-heading-' + idx">
                    <div
                            class="group w-full m-0 rounded-3xl p-3 font-medium text-center text-black hover:text-white hover:bg-blue-800"
                            :data-accordion-target="'#accordion-color-body-' + idx" aria-expanded="true"
                            :aria-controls="'accordion-color-body-' + idx ">
                        <div>
                            <div class="text-lg">JUMAT</div>
                            <div class="text-sm">{{idx}} September 2023</div>
                        </div>
                    </div>
                </div>
                <div :id="'accordion-color-body-' + idx" class="hidden"
                     :aria-labelledby="'accordion-color-heading-' + idx">
                    <div class="p-5 font-light">
                        <div class="flex">
                            <div >

                            </div>
                            <div >
                                content
                            </div>
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
            count: 3
        }
    }
}

</script>
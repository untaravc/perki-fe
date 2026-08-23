<template>
    <div class="relative overflow-hidden max-w-screen-lg mx-auto pt-28 pb-12 px-4" style="min-height: calc(100vh - 130px)">
        <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div
                class="absolute -top-24 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-violet-200 to-teal-200 opacity-60 blur-3xl">
            </div>
            <div
                class="absolute top-72 -left-32 h-80 w-80 rounded-full bg-gradient-to-br from-teal-200 to-sky-200 opacity-50 blur-3xl">
            </div>
        </div>

        <div class="text-center mb-10">
            <div
                class="inline-flex items-center gap-2 mb-4 rounded-full bg-gradient-to-r from-violet-100 to-teal-100 text-violet-700 py-1.5 px-5 text-sm font-medium">
                Get in Touch
            </div>
            <div class="text-4xl font-bold text-indigo-900">
                Contact Us
            </div>
        </div>
        <div class="mb-12">
            <div class="rounded-3xl bg-white shadow-xl shadow-slate-200/70 ring-1 ring-slate-100 overflow-hidden grid grid-cols-12">
                <a href="https://goo.gl/maps/bKWMrkskfq1YFgJb6" target="_blank"
                    class="col-span-12 cursor-pointer group relative md:col-span-5 min-h-[300px] bg-slate-200 bg-center bg-cover bg-no-repeat overflow-hidden"
                    style="background-image: url('https://firebasestorage.googleapis.com/v0/b/unt-dev.firebasestorage.app/o/Perki%2Fcarvep26%2Fmap-rss.png?alt=media&token=8f60e97f-5529-4ced-926e-661642573ca3')">
                    <div class="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300"></div>
                    <div class="absolute bottom-3 right-3 bg-white rounded-full px-4 py-2 text-xs font-medium text-slate-700 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
                        <unicon name="map-pin" width="14" height="14" fill="currentColor"></unicon>
                        Open in Maps
                    </div>
                </a>
                <div class="col-span-12 md:col-span-7 p-6 md:p-8">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-teal-500 text-white shadow-md shadow-violet-100">
                            <unicon name="info-circle" fill="white" width="20"></unicon>
                        </div>
                        <div class="text-2xl font-bold text-indigo-900">For more information</div>
                    </div>

                    <div class="mb-3">
                        <div class="text-lg font-bold text-indigo-900">Perki Jogja</div>
                    </div>
                    <div class="mb-5 flex items-start gap-2 text-slate-600">
                        <unicon name="location-point" width="18" class="mt-0.5 shrink-0" fill="currentColor"></unicon>
                        <div>
                            <div class="font-semibold text-slate-800">
                                GEDUNG PUSAT JANTUNG TERPADU, RSUP Dr. Sardjito
                            </div>
                            <div>
                                Jl. Kesehatan No.1, Senolowo, Sinduadi, Daerah Istimewa Yogyakarta 55281
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center gap-2">
                        <unicon name="phone" width="18" fill="currentColor" class="text-slate-500"></unicon>
                        <div class="text-slate-600">Latifah:
                            <a class="font-semibold text-violet-600 hover:text-violet-700 transition-colors" target="_blank"
                                href="https://wa.me/6282277967753">+6282277967753</a>
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

        }
    },
    methods: {

    },
    created() {
    }
}
</script>

<template>
    <div class="px-4 mb-6">
        <div
            class="max-w-screen-lg mx-auto rounded-3xl bg-gradient-to-r from-slate-50 to-teal-50 ring-1 ring-slate-100 shadow-sm">
            <div class="grid md:grid-cols-3 items-center gap-4 p-6 md:p-8">
                <div class="md:col-span-2 flex items-center gap-4">
                    <div
                        class="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-teal-500 text-white shadow-md shadow-violet-100">
                        <unicon name="file-alt" fill="white" width="24"></unicon>
                    </div>
                    <div>
                        <div class="font-semibold text-2xl text-indigo-900">
                            Abstract Submission
                        </div>
                        <div class="text-sm text-slate-500 mt-1">
                            Submit your Original Research, Case Report, or Systematic Review abstract.
                        </div>
                    </div>
                </div>
                <div class="md:col-span-1 flex md:justify-end">
                    <router-link to="/abstracts"
                        class="group inline-flex items-center gap-2 w-full md:w-auto justify-center bg-gradient-to-r from-violet-600 to-teal-500 hover:shadow-lg hover:shadow-violet-200 text-white font-medium rounded-full text-base px-8 py-3 text-center transition-all duration-200">
                        <span>Guideline</span>
                        <unicon name="arrow-right" fill="white" width="18"
                            class="transition-transform duration-200 group-hover:translate-x-1"></unicon>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

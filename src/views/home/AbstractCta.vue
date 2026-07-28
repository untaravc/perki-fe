<template>
    <div class="px-2 mb-3">
        <div class="max-w-screen-lg m-auto py-6 bg-gradient-to-r from-purple-300 to-cyan-300 rounded-lg">
            <div class="grid grid-cols-3">
                <div class="col-span-3 md:col-span-2 px-6">
                    <div class="font-semibold text-2xl">
                        Abstract Submission
                    </div>
                    <div class="font-semibold text-sm text-blue-700">
                        Submit your Original Research, Case Report, or Systematic Review abstract.
                    </div>
                </div>
                <div class="col-span-3 md:col-span-1 flex justify-end px-6 items-center">
                    <router-link to="/abstracts"
                        class="bg-blue-900 hover:bg-blue-800 text-white focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium rounded-lg text-base px-8 py-2.5 text-center mr-3 md:mr-0">
                        Guideline
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

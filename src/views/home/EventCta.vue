<template>
    <div class="px-2 mb-3">
        <div class="max-w-screen-lg m-auto py-6 bg-blue-800 rounded-lg">
            <div class="grid grid-cols-3">
                <div class="col-span-3 md:col-span-2 px-6">
                    <div class="font-semibold text-sm text-blue-200">
                        {{event.subtitle}}
                    </div>
                    <div class="font-semibold text-2xl text-white">
                        {{event.title}}
                    </div>
                </div>
                <div class="col-span-3 md:col-span-1 flex justify-center items-center">
                    <router-link to="/events"
                       class="text-blue-900 bg-blue-200 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-8 py-2.5 text-center mr-3 md:mr-0">
                        Register
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            event: {
                title:"",
                subtitle:"",
            },
        }
    },
    methods: {
        loadEvent() {
            this.apiGet('pub/cta-event')
                .then((data) => {
                    this.event = data.result
                })
        }
    },
    created() {
        this.loadEvent()
    }
}
</script>
<template>
    <div class="max-w-screen-lg m-auto pt-28 pb-12 px-2" style="min-height: calc(100vh - 133px);">
        <div class="text-4xl font-bold mb-8 text-center">
            EVENTS
        </div>
        <div class="grid grid-cols-3 gap-3">
            <a :href="event.link" target="_blank" class="col-span-3 md:col-span-1" v-for="event in data_content">
                <div style="padding-bottom: 120%"
                     :style="'background-image: url(' + base_url + event.image +')'"
                     class="w-full bg-purple-300 bg-cover rounded-md bg-center bg-no-repeat">
                </div>
                <div class="rounded-b-md pb-3 pt-2 px-1">
                    <h4 class="text-xs">{{ event.subtitle }}</h4>
                    <h4 class="font-semibold mb-2">{{ event.title }}</h4>
                    <div class="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-base px-8 py-2.5 text-center mr-3 md:mr-0">
                        Register Webinar
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data_content: {}
        }
    },
    methods: {
        loadEvents() {
            this.apiGet('pub/events')
                .then((data) => {
                    this.data_content = data.result
                })
        }
    },
    created() {
        this.loadEvents()
    }
}
</script>
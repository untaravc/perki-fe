<template>
    <div class="max-w-screen-lg m-auto pt-28 pb-12 px-2" style="min-height: calc(100vh - 133px);">
        <div class="text-4xl font-bold mb-8 text-center">
            Symposium Recording
        </div>
        <div class="grid gap-2 grid-cols-12">
            <div class="col-span-3">
                <div
                    class="text-center p-3 border rounded-lg font-semibold cursor-pointer"
                    :class="selected === 'day_1_a' ? 'bg-blue-900 text-white hover:text-white hover:bg-blue-800' : 'hover:bg-blue-200'"
                    @click="selectSection('day_1_a')">
                    Day 1 Room A
                </div>
            </div>
            <div class="col-span-3">
                <div
                    class="text-center p-3 border rounded-lg font-semibold cursor-pointer"
                    :class="selected === 'day_1_b' ? 'bg-blue-900 text-white hover:text-white hover:bg-blue-800' : 'hover:bg-blue-200'"
                    @click="selectSection('day_1_b')">
                    Day 1 Room B
                </div>
            </div>
            <div class="col-span-3">
                <div class="col-span-3">
                    <div
                        class="text-center p-3 border rounded-lg font-semibold cursor-pointer"
                        :class="selected === 'day_2_a' ? 'bg-blue-900 text-white hover:text-white hover:bg-blue-800' : 'hover:bg-blue-200'"
                        @click="selectSection('day_2_a')">
                        Day 2 Room A
                    </div>
                </div>
            </div>
            <div class="col-span-3">
                <div class="col-span-3">
                    <div
                        class="text-center p-3 border rounded-lg font-semibold cursor-pointer"
                        :class="selected === 'day_2_b' ? 'bg-blue-900 text-white hover:text-white hover:bg-blue-800' : 'hover:bg-blue-200'"
                        @click="selectSection('day_2_b')">
                        Day 2 Room B
                    </div>
                </div>
            </div>
            <div class="col-span-12 md:col-span-4">
                <div v-for="data in data_detail" @click="detail_selected = data.slug"
                     class="border first:rounded-t-lg last:rounded-b-lg cursor-pointer">
                    <div class="text-sm font-semibold p-3 bg-blue-200">{{data.title}}</div>
                    <div class="border-t" :class="detail_selected !== data.slug ? 'hidden' : ''">
                        <div class="text-sm py-2 px-3 hover:text-blue-700 cursor-pointer"
                             @click="loadVideo(detail)"
                             v-for="detail in data.schedule_details">
                            {{ detail.title }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 md:col-span-8">
                <div class="videowrapper relative">
                    <iframe width="560" height="315"
                            :src="video_active.record_link"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
<!--                    <div class="absolute top-0 left-0 right-0 bottom-0"></div>-->
                </div>
                <div class="mt-2 mx-1">
                    <div class="font-semibold">{{video_active.title}}</div>
                    <div class="text-sm italic" v-if="video_active.speaker">
                        {{video_active.speaker.name}}
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
            data_content: {},
            data_detail: {},
            video_link: '',
            selected: 'day_1_a',
            detail_selected: '',
            video_active: {}
        }
    },
    methods: {
        checkToken() {
            let token = localStorage.getItem('perki_user_token');
            if (!token) {
                if (confirm('Login or Register to view videos')) {
                    this.$router.push('/login')
                }
            } else {
                this.loadVideos().then(()=>{
                    this.selectSection('day_1_a')
                })
            }
        },
        async loadVideos() {
            await this.authGet('pub/video-on-demand')
                .then((data) => {
                    this.data_content = data.result
                })
        },
        loadVideo(data) {
            this.video_active = data
        },
        selectSection(idx) {
            this.selected = idx
            this.data_detail = this.data_content[idx]
        }
    },
    created() {
        // this.checkToken()
        this.loadVideos().then(()=>{
            this.selectSection('day_1_a')
        })
    }
}
</script>
<style>
.videowrapper {
    float: none;
    clear: both;
    width: 100%;
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 25px;
    height: 0;
}

.videowrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
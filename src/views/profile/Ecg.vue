<template>
    <div>
        <div class="text-2xl font-semibold mb-3">ECG Smart Championship</div>
        <div v-for="ecg in data_content" class="p-3 rounded-xl border border-red-200">
            <div class="font-semibold text-3xl flex justify-between items-center">
                {{ ecg.name }}
                <router-link :to="'/ecg-championship-register?id=' + ecg.id"
                    class="text-sm font-regular text-blue-600 hover:text-blue-500">Edit
                    Data</router-link>
            </div>
            <div class="flex mb-4">
                <div class="p-1 bg-red-100 mr-2 text-sm flex items-center">
                    <unicon name="phone" height="20px"></unicon> <span class="font-semibold">{{ ecg.phone }}</span>
                </div>
                <div class="p-1 bg-red-100 mr-2 text-sm flex items-center">
                    <unicon name="location-point" height="20px"></unicon>
                    {{ ecg.address }}
                </div>
                <div class="p-1 bg-red-100 mr-2 text-sm flex items-center">
                    <unicon name="envelope" height="20px"></unicon>
                    {{ ecg.email }}
                </div>
            </div>

            <div v-for="member in ecg.members" class="grid grid-cols-3 mb-2">
                <div>{{ member.user_name }}</div>
                <div>{{ member.institution }}</div>
                <div class="flex">

                    <a :href="member.document_link" target="_blank" v-if="member.document_link"
                        class="flex items-center bg-red-200 hover:bg-red-300 pr-4 p-2 rounded text-sm">
                        <unicon name="paperclip" height="15px" /> Document
                    </a>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data_content: [],
        }
    },
    methods: {
        loadData() {
            this.authGet('pub/groups?section=jcu25',)
                .then((data) => {
                    this.data_content = data.result;
                })
        }
    },
    created() {
        this.loadData()
    }
}
</script>
<template>
    <span>
        <span v-if="type.ext === 'pdf'">
            <div class="p-3 bg-yellow-300 rounded-full">
                <a :href="link" target="_blank">
                    <unicon name="file-alt" fill="red"></unicon>
                </a>
            </div>
            <div class="text-sm">{{ $filters.truncate(type.name, 15) }}</div>
        </span>
        <span v-else-if="type.ext === 'xls' || type.ext === 'xlsx'">
            <a class="btn btn-sm btn-outline-success" :href="link" download>
                <unicon name="file-alt" fill="green"></unicon> {{ $filters.truncate(type.name, 10) }}
            </a>
        </span>
        <span v-else-if="type.ext === 'doc' || type.ext === 'docx'">
            <a class="btn btn-sm btn-outline-primary" :href="link" download>
                <unicon name="file-alt" fill="blue"></unicon> {{ $filters.truncate(type.name, 10) }}
            </a>
        </span>
        <span v-else-if="type.ext === 'png' || type.ext === 'jpg' || type.ext === 'jpeg'">
            <a target="_blank" :href="link"><img :src="link" :alt="type.name"
                                                 :style="thumbnail ? 'width: 20px; height: auto' :'width: 100px; height: auto'"></a>
        </span>
        <span v-else>
            <a class="btn btn-sm btn-outline-info" :href="link" download>
                <unicon name="file-alt" fill="yellow"></unicon> {{ $filters.truncate(type.name, 10) }}
            </a>
        </span>
    </span>
</template>

<script>
export default {
    props: ['link', 'thumbnail'],
    computed: {
        type: function () {
            let arr = this.link.split('/');
            let last = arr[arr.length - 1];
            let arr2 = last.split('.');
            let ext = arr2[arr2.length - 1];

            return {
                ext: ext,
                name: last,
            };
        }
    }
}
</script>

<style>
.text-link {
    border: 1px solid blue;
    border-radius: 10px;
}

.text-link:hover {
    background-color: #e5d3f6;
}
</style>

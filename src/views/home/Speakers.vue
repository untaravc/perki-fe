<template>
    <div class="max-w-screen-lg m-auto p-10">
        <div>
            Speakers
        </div>
        <div class="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-2">
            <div class="group">
                <div class="aspect-square mb-3 rounded-lg overflow-hidden">
                    <img src="https://picsum.photos/200/300" alt="">
                </div>
                <div>
                    <h4 class="font-bold text-lg">Budi Satria Isman</h4>
                    <span class="text-xs text-neutral-material-700">President Commisioner</span>
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
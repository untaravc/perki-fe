<template>
    <div class="max-w-screen-md m-auto pt-12 pb-14 px-4" id="package">
        <div class="jcu-heading text-4xl md:text-5xl mb-1">
            Registration Fee
        </div>
        <div class="text-sm text-indigo-900/70 mb-8 text-center">
            October 1&ndash;3, 2026 &middot; Royal Ambarukmo Hotel, Yogyakarta
        </div>

        <div v-for="group in pricing" :key="group.audience" class="mb-8">
            <div class="jcu-eyebrow mb-3">
                {{ group.audience }}<span class="text-blue-500" v-if="group.note">{{ group.note }}</span>
            </div>

            <div class="space-y-2.5">
                <div v-for="row in group.rows" :key="row.label + row.sub" class="jcu-pill">
                    <div class="jcu-pill-label">
                        {{ row.label }}
                        <span class="font-medium opacity-90" v-if="row.sub">{{ row.sub }}</span>
                    </div>
                    <div class="jcu-pill-value">
                        Rp{{ $filters.currency(row.price) }}
                    </div>
                </div>
            </div>
        </div>

        <div class="text-sm text-indigo-900/70 mb-8" v-if="note">
            {{ note }}
        </div>

        <div class="text-center">
            <router-link to="/register" class="jcu-cta">
                Register Now
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pricing: [],
            note: '',
        }
    },
    methods: {
        loadData() {
            this.apiGet('pub/pricing', { ref: 'jcu26' })
                .then((data) => {
                    this.pricing = data.result
                    this.note = data.message
                })
        },
    },
    created() {
        this.loadData()
    }
}
</script>

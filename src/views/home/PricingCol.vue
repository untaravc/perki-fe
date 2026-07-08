<template>
    <div class="max-w-screen-lg m-auto pt-12 pb-12 px-2" id="package">
        <div class="text-4xl text-blue-900 font-bold mb-1 text-center">
            PRICING
        </div>
        <div class="text-small text-slate-600 mb-5 text-center">
            Register yourself and get a special price
        </div>
        <div class="grid grid-cols-3 gap-4">
            <div v-for="(data, idx) in pricing"
                class="col-span-3 md:col-span-1 to-cyan-100 rounded-lg p-6" :class="idx === 0 ? 'bg-blue-50' : idx === 1 ? 'bg-purple-200' :'bg-cyan-100'">
                <div class="text-md font-semibold">{{ data.title }}</div>
                <div class="text-sm mb-4">{{ data.subtitle }} <span style="color: #ff000000;">.</span> </div>
                <div v-if="data.price_sp > 0">
                    <div class="text-sm italic">Specialist</div>
                    Rp <span class="text-xl font-semibold">{{ $filters.currency(data.price_sp) }}</span>
                </div>
                <div v-if="data.price_gp > 0">
                    <div class="text-sm italic">General Practitioner</div>
                    Rp <span class="text-xl font-semibold">{{ $filters.currency(data.price_gp) }}</span>
                </div>
                <div class="mt-4 mb-4">
                    <router-link to="/register"
                        class="block border-2 border-blue-500 hover:bg-blue-500 focus:ring-2 focus:outline-none focus:ring-blue-500 font-normal md:font-medium rounded-md text-sm md:text-base px-4 md:px-8 py-1 md:py-2.5 text-center">
                        Register
                    </router-link>
                </div>
                <div class="border-t border-blue-300"></div>
                <div class="check mt-4">
                    <ul>
                        <li v-for="item in data.items" class="text-sm">
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pricing: [],
        }
    },
    methods: {
        loadData() {
            this.apiGet('pub/pricing', { ref: 'jcu26' })
                .then((data) => {
                    this.pricing = data.result
                })
        },
    },
    created() {
        this.loadData()
    }
}
</script>

<style>
.check ul {
    list-style: none;
    padding-left: 0;
}

.check ul li {
    position: relative;
    padding-left: 1em;
}

.check ul li:before {
    content: '✓';
    position: absolute;
    left: 0;
    width: 1em;
    height: 1em;
}
</style>

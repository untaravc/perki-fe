<template>
    <div class="max-w-screen-lg m-auto pt-12 pb-12 px-2" id="package">
        <div class="text-4xl text-blue-900 font-bold mb-1 text-center">
            PRICING
        </div>
        <div class="text-small text-blue-600 mb-5 text-center">
            Register yourself and get a special price
        </div>
        <div class="grid grid-cols-3 gap-4">
            <div v-for="(data, idx) in pricing" class="col-span-3 md:col-span-1 to-gray-300 rounded-lg p-6"
                :class="idx === 0 ? 'bg-rose-50' : idx === 1 ? 'bg-rose-200' : 'bg-rose-100'">
                <div class="text-md font-semibold mb-4">{{ data.title }}</div>
                <!-- <div class="text-sm mb-4">{{ data.subtitle }} <span style="color: #ff000000;">.</span> </div> -->
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
                        class="block border-2 border-rose-400 hover:bg-rose-400 focus:ring-2 focus:outline-none focus:ring-rose-400 font-normal md:font-medium rounded-md text-sm md:text-base px-4 md:px-8 py-1 md:py-2.5 text-center">
                        Register
                    </router-link>
                </div>
                <div class="border-t border-rose-300"></div>
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
            this.apiGet('pub/pricing', { ref: 'jfu25' })
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
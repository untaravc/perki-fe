<template>
    <div class="max-w-screen-lg m-auto pt-32 pb-16 px-4" ref="title" style="min-height: calc(100vh - 165px);">
        <div class="text-center mb-8">
            <h1 class="font-bold text-indigo-900 leading-[1.1] mb-2 text-4xl">Poster Board</h1>
            <p class="text-slate-500 max-w-xl mx-auto">
                Accepted case report, research, meta-analysis, and systematic review abstracts at Jogja Cardiology
                Update 2026.
            </p>
        </div>

        <!-- toolbar: search + sort -->
        <div class="flex flex-col sm:flex-row gap-3 mb-4">
            <div class="relative flex-1">
                <unicon name="search" fill="#94a3b8" width="16" height="16"
                    class="absolute left-3 top-1/2 -translate-y-1/2"></unicon>
                <input type="text" v-model="filter.title" @keyup.enter="loadPoster()"
                    placeholder="Search by title..."
                    class="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-violet-200 focus:border-violet-400 transition-colors">
            </div>
            <div class="flex bg-slate-100 rounded-xl p-1 text-sm shrink-0">
                <button type="button" @click="setSort('')"
                    :class="filter.sort === '' ? 'bg-white shadow-sm text-indigo-900' : 'text-slate-500'"
                    class="px-3 py-1.5 rounded-lg font-medium transition-colors">
                    Latest
                </button>
                <button type="button" @click="setSort('views')"
                    :class="filter.sort === 'views' ? 'bg-white shadow-sm text-indigo-900' : 'text-slate-500'"
                    class="px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1">
                    <unicon name="chart-line" :fill="filter.sort === 'views' ? '#4338ca' : '#64748b'" width="14"
                        height="14"></unicon>
                    Most Viewed
                </button>
            </div>
        </div>

        <!-- category pills: horizontally scrollable so it's usable on mobile too -->
        <div class="flex gap-2 mb-5 overflow-x-auto pb-1 -mx-1 px-1">
            <button type="button" @click="loadPoster()"
                :class="filter.category === '' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'"
                class="px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors shrink-0">
                All
            </button>
            <button type="button" v-for="cat in availableCategories" :key="cat.value" @click="loadPoster(cat.value)"
                :class="filter.category === cat.value ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'"
                class="px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors shrink-0">
                {{ cat.label }}
            </button>
        </div>

        <div v-if="loading" class="flex flex-col gap-3">
            <div v-for="n in 5" :key="n" class="h-16 bg-slate-100 rounded-xl animate-pulse"></div>
        </div>

        <div v-else-if="!data_content.data || data_content.data.length === 0"
            class="text-center text-slate-400 italic py-16">
            No posters found.
        </div>

        <div v-else class="flex flex-col gap-3">
            <router-link v-for="(poster, i) in data_content.data" :key="poster.id" :to="'/posters/' + poster.id"
                class="flex items-start gap-3 bg-white rounded-xl border border-slate-200 p-4 hover:border-violet-300 hover:shadow-sm transition-all">
                <div v-if="filter.sort === 'views' && rank(i) <= 3"
                    class="shrink-0 h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    :class="rankColor(rank(i))">
                    {{ rank(i) }}
                </div>
                <div class="flex-1 min-w-0">
                    <div class="flex justify-between items-start gap-2">
                        <div class="text-sm font-semibold text-slate-800">{{ $filters.truncate(poster.title, 140) }}</div>
                        <div class="flex items-center gap-2 shrink-0">
                            <div v-if="filter.sort !== 'views'" class="flex items-center text-slate-400">
                                <unicon name="eye" fill="#94a3b8" width="15px" height="15px"></unicon>
                                <div class="text-sm ml-1">{{ poster.comment }}</div>
                            </div>
                            <button type="button" @click.stop.prevent="sharePoster(poster)"
                                title="Share"
                                class="p-1.5 rounded-full text-slate-400 hover:text-violet-600 hover:bg-violet-50 transition-colors">
                                <unicon name="share-alt" fill="currentColor" width="15px" height="15px"></unicon>
                            </button>
                        </div>
                    </div>
                    <div class="text-xs mt-1.5 flex items-center gap-2 flex-wrap">
                        <span class="inline-block bg-amber-50 text-amber-700 font-medium px-2 py-0.5 rounded-full">
                            {{ $filters.ucword(poster.category) }}
                        </span>
                        <span class="italic text-slate-500">
                            <span v-for="(author, ai) in poster.authors" :key="author.id">{{ author.surname }}, {{ author.first_name }}<span v-if="ai < poster.authors.length - 1">; </span></span>
                        </span>
                    </div>
                </div>
            </router-link>
        </div>

        <div class="flex justify-center items-center gap-3 mt-6" v-if="data_content.prev_page_url || data_content.next_page_url">
            <button type="button" :disabled="!data_content.prev_page_url" @click="changePage('prev')"
                class="p-2 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                <unicon name="angle-left"></unicon>
            </button>
            <div class="text-sm text-slate-500">Page {{ data_content.current_page }} of {{ data_content.last_page }}</div>
            <button type="button" :disabled="!data_content.next_page_url" @click="changePage('next')"
                class="p-2 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                <unicon name="angle-right"></unicon>
            </button>
        </div>
    </div>
</template>
<script>
const CATEGORY_LABELS = {
    case_report: 'Case Report',
    research: 'Research',
    meta_analysis: 'Meta Analisys',
    systematic_review: 'Systematic Review',
}

const RANK_COLORS = {
    1: 'bg-gradient-to-br from-amber-400 to-amber-600',
    2: 'bg-gradient-to-br from-slate-300 to-slate-500',
    3: 'bg-gradient-to-br from-orange-400 to-orange-600',
}

export default {
    data() {
        return {
            loading: true,
            data_content: {},
            category_counts: {},
            filter: {
                type: 'abstract',
                category: '',
                title: '',
                sort: '',
                section: 'jcu26',
                page: 1
            }
        }
    },
    computed: {
        // Only show a category tab when it actually has at least one displayed poster.
        availableCategories() {
            return Object.keys(CATEGORY_LABELS)
                .filter((value) => Number(this.category_counts[value] || 0) > 0)
                .map((value) => ({ value, label: CATEGORY_LABELS[value] }))
        },
    },
    methods: {
        rank(index) {
            return (this.filter.page - 1) * (this.data_content.per_page || 24) + index + 1
        },
        rankColor(rank) {
            return RANK_COLORS[rank] || 'bg-slate-400'
        },
        async sharePoster(poster) {
            const url = window.location.origin + '/posters/' + poster.id

            if (navigator.share) {
                try {
                    await navigator.share({ title: poster.title, url })
                } catch (e) {
                    // user dismissed the native share sheet — nothing to do
                }
                return
            }

            try {
                await navigator.clipboard.writeText(url)
                this.toaster({ title: 'Link copied to clipboard' })
            } catch (e) {
                this.toaster({ title: url, icon: 'none', dismissible: true })
            }
        },
        setSort(sort) {
            this.filter.sort = sort
            this.filter.page = 1
            this.loadPoster(this.filter.category)
        },
        loadPoster(category = '') {
            this.filter.category = category
            this.filter.page = 1
            this.loading = true
            this.apiGet('pub/posters', this.filter)
                .then((data) => {
                    this.data_content = data
                    this.category_counts = data.category_counts || {}
                    this.loading = false
                })
        },
        changePage(type) {
            if (type == "prev") {
                this.filter.page = this.filter.page - 1
            } else {
                this.filter.page = this.filter.page + 1
            }
            this.loading = true
            this.apiGet('pub/posters', this.filter)
                .then((data) => {
                    this.data_content = data
                    this.category_counts = data.category_counts || {}
                    this.loading = false
                })

            const el = this.$refs.title;

            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        },
    },

    created() {
        this.loadPoster()
    },
}
</script>

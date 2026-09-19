<template>
    <div class="max-w-screen-lg m-auto pt-32 pb-16 px-4" style="min-height: calc(100vh - 165px);">
        <div class="grid gap-8 md:grid-cols-3">
            <div class="md:col-span-2 abstract-body">
                <div class="d-flex flex-wrap align-items-center gap-2 mb-4 abstract-meta flex items-center gap-2 flex-wrap">
                    <span class="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full"
                        v-if="data_content.abstract_number">
                        #{{ data_content.abstract_number }}
                    </span>
                    <span class="inline-block bg-amber-50 text-amber-700 text-xs font-semibold px-2.5 py-1 rounded-full"
                        v-if="data_content.category">
                        {{ categoryLabel(data_content.category) }}
                    </span>
                </div>

                <h1 class="abstract-title text-slate-900 mb-3">{{ data_content.title }}</h1>

                <div class="abstract-authors text-slate-600 fst-italic mb-1" v-if="data_content.authors && data_content.authors.length">
                    <span v-for="(author, i) in data_content.authors" :key="author.id">{{ author.surname }}, {{ author.first_name }}<span v-if="i < data_content.authors.length - 1">; </span></span>
                </div>

                <div class="abstract-keyword text-slate-500 fst-italic mb-6" v-if="data_content.subtitle">
                    Keyword: {{ data_content.subtitle }}
                </div>

                <div class="mb-5" v-for="(body, i) in (data_content.body_parsed || [])" :key="i">
                    <div class="abstract-section-title text-slate-900 mb-1">{{ body.title }}</div>
                    <div class="abstract-text" style="white-space: pre-line;">{{ body.content }}</div>
                </div>
            </div>

            <div class="md:col-span-1" v-if="data_content.image">
                <a :href="data_content.image" target="_blank">
                    <img :src="data_content.image" class="w-full rounded-xl border border-slate-100" alt="">
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import { applyRouteMeta } from '../../utils/seo'

const CATEGORY_LABELS = {
    case_report: 'Case Report',
    case_report_sp: 'Case Report Sp',
    research: 'Research',
    research_sp: 'Research Sp',
    systematic_review: 'Systematic Review',
    meta_analysis: 'Meta Analysis',
}

export default {
    data() {
        return {
            data_content: {},
            filter: {
                type: 'abstract',
                section: 'jcu26'
            }
        }
    },
    methods: {
        categoryLabel(category) {
            return CATEGORY_LABELS[category] ?? category
        },
        loadPoster() {
            this.apiGet('pub/posters/' + this.$route.params.id, this.filter)
                .then((data) => {
                    this.data_content = data.result

                    if (this.data_content?.title) {
                        applyRouteMeta({
                            title: `${this.data_content.title} | Jogja Cardiology Update 2026`,
                            description: this.data_content.subtitle || this.$route.meta.description,
                        }, this.$route.path)
                    }
                })
        }
    },
    created() {
        this.loadPoster()
    },
}
</script>
<style scoped>
/* Abstract reads like a journal: serif face, generous size and leading. */
.abstract-body {
    font-family: Georgia, "Times New Roman", Times, "Noto Serif", serif;
    font-size: 1.1875rem;
    line-height: 1.8;
    color: #1f2430;
}

.abstract-meta {
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
}

.abstract-title {
    font-family: Georgia, "Times New Roman", Times, "Noto Serif", serif;
    font-size: 2.05rem;
    line-height: 1.3;
    font-weight: 700;
}

.abstract-authors,
.abstract-keyword {
    font-size: 1.0625rem;
}

.abstract-section-title {
    font-size: 1.2rem;
    font-weight: 700;
}

.abstract-text {
    font-size: 1.1875rem;
    line-height: 1.8;
    text-align: justify;
}

@media (max-width: 991.98px) {
    .abstract-body {
        font-size: 1.0625rem;
        line-height: 1.75;
    }

    .abstract-title {
        font-size: 1.7rem;
    }

    .abstract-text {
        font-size: 1.0625rem;
        text-align: left;
    }
}
</style>

<template>
    <div class="max-w-screen-lg m-auto pt-24 pb-16 px-4" style="min-height: calc(100vh - 165px);">
        <div class="text-center mb-8">
            <h1 class="font-bold text-indigo-900 leading-[1.1] mb-3 text-4xl">CORLIMPIADE Teams</h1>
            <p class="text-slate-500 max-w-xl mx-auto">
                Registered teams for CORLIMPIADE JCU 2026
            </p>
        </div>

        <div v-if="loading" class="text-center text-slate-400 italic py-10">Loading...</div>

        <div v-else-if="teams.length === 0" class="text-center text-slate-400 italic py-10">
            No confirmed teams yet.
        </div>

        <div v-else class="grid gap-4 md:grid-cols-2">
            <div v-for="team in teams" :key="team.id"
                class="bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 p-5">
                <div class="font-semibold text-lg text-indigo-900">{{ team.name }}</div>
                <div class="text-sm text-slate-500 mb-3" v-if="team.institution">{{ team.institution }}</div>
                <div class="divide-y divide-slate-100 border border-slate-100 rounded-xl">
                    <div v-for="(member, i) in team.members" :key="member.id" class="p-2.5 text-sm">
                        <div class="font-medium text-slate-800">{{ i + 1 }}. {{ member.user_name }}</div>
                        <div class="text-slate-500" v-if="member.institution">{{ member.institution }}</div>
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
            loading: true,
            teams: [],
        }
    },
    methods: {
        loadTeams() {
            this.loading = true
            this.apiGet('pub/corlimpiade-teams', { section: 'jcu26' })
                .then((data) => {
                    this.teams = (data.success && data.result) ? data.result : []
                    this.loading = false
                })
        },
    },
    created() {
        this.loadTeams()
    },
}
</script>

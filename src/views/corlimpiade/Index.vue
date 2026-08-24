<template>
    <div class="relative overflow-hidden" style="min-height: calc(100vh - 165px);">
        <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div
                class="absolute -top-24 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-rose-200 to-amber-200 opacity-60 blur-3xl">
            </div>
        </div>

        <div class="max-w-screen-lg m-auto pt-28 pb-16 px-4">
            <div class="text-center mb-8">
                <div
                    class="inline-flex items-center gap-2 mb-5 rounded-full bg-gradient-to-r from-rose-100 to-amber-100 text-rose-700 py-1.5 px-5 text-sm font-medium">
                    <unicon name="medal" width="16" height="16" fill="currentColor"></unicon>
                    In conjunction with Jogja Cardiology Update 2026
                </div>
                <h1 class="font-bold text-indigo-900 leading-[1.1] mb-4 text-4xl lg:text-5xl">
                    CORLIMPIADE JCU 2026
                </h1>
                <p class="text-lg text-slate-500 max-w-xl mx-auto mb-4">
                    Cardiovascular Olympiad for General Practitioners and Medical Students
                </p>
                <div
                    class="inline-block border-2 border-rose-600 text-rose-600 font-bold uppercase tracking-wide text-sm px-4 py-1 rounded-md">
                    Limited Seat
                </div>
            </div>

            <div class="bg-white rounded-3xl shadow-xl shadow-slate-200/70 ring-1 ring-slate-100 p-6 md:p-8 mb-6">
                <div class="font-semibold text-xl text-indigo-900 mb-4">Timeline</div>
                <div class="grid gap-3 md:grid-cols-2">
                    <div v-for="item in timeline" :key="item.label"
                        class="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                        <div
                            class="h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-rose-700 to-amber-500 text-white">
                            <unicon :name="item.icon" fill="white" width="18"></unicon>
                        </div>
                        <div>
                            <div class="font-semibold text-indigo-900">{{ item.date }}</div>
                            <div class="text-sm text-slate-500">{{ item.label }}</div>
                        </div>
                    </div>
                </div>
                <div
                    class="mt-4 rounded-xl bg-gradient-to-r from-rose-700 to-amber-500 text-white text-center font-semibold py-3">
                    Special 20% Discount for CORLIMPIADE Participants
                </div>
            </div>

            <div class="bg-white rounded-3xl shadow-xl shadow-slate-200/70 ring-1 ring-slate-100 p-6 md:p-8 mb-6">
                <div class="font-semibold text-xl text-indigo-900 mb-4">How to Register</div>
                <ol class="list-decimal ml-5 space-y-2 text-sm text-slate-600">
                    <li>
                        Register your CORLIMPIADE team at
                        <a class="text-violet-600 font-semibold" target="_blank"
                            href="https://jcu.perki-jogja.com/corlimpiade">jcu.perki-jogja.com/corlimpiade</a>
                        using the same email addresses that each member will use to register for Jogja Cardiology
                        Update 2026.
                    </li>
                    <li>
                        Each team member will receive a voucher that provides a 20% discount and is linked to their
                        registered email address. The voucher will be automatically applied to either the Symposium
                        Only or Symposium + Workshop package.
                    </li>
                    <li>Select your preferred package and complete the registration and payment through the Register
                        menu.</li>
                    <li>Your team will be officially registered once all three members have completed their
                        payments. The final list of registered teams will be announced on September 28th, 2026.</li>
                    <li>A technical meeting for all registered teams will be held on September 29th, 2026. Further
                        details will be shared with the team members.</li>
                </ol>
                <div class="mt-4 text-sm text-slate-500">
                    For further information or assistance, please contact
                    <a class="text-violet-600 font-semibold" target="_blank" href="https://wa.me/628981817890">dr.
                        Zizi at +62 898-1817-890</a>.
                </div>
            </div>

            <div class="bg-white rounded-3xl shadow-xl shadow-slate-200/70 ring-1 ring-slate-100 p-6 md:p-8 mb-6">
                <div class="font-semibold text-xl text-indigo-900 mb-4">Terms &amp; Conditions</div>
                <ol class="list-decimal ml-5 space-y-2 text-sm text-slate-600">
                    <li v-for="(term, i) in terms" :key="i">{{ term }}</li>
                </ol>
            </div>

            <div class="bg-white rounded-3xl shadow-xl shadow-slate-200/70 ring-1 ring-slate-100 p-6 md:p-8">
                <div class="font-semibold text-xl text-indigo-900 mb-4">Team Registration</div>

                <div v-if="!has_token" class="rounded-xl bg-amber-50 ring-1 ring-amber-100 p-4 text-sm text-slate-700">
                    Please
                    <router-link class="text-violet-600 font-semibold" to="/login">Login</router-link>
                    or
                    <router-link class="text-violet-600 font-semibold" to="/register">Register</router-link>
                    first to register your CORLIMPIADE team.
                </div>

                <div v-else-if="loading_team" class="text-sm text-slate-400 italic">Loading...</div>

                <div v-else-if="team">
                    <div class="rounded-xl bg-emerald-50 ring-1 ring-emerald-100 p-4 mb-4 text-sm text-emerald-700">
                        Your team <b>{{ team.name }}</b> is registered. Status: <b>{{ statusLabel(team.status) }}</b>.
                        Per the Terms &amp; Conditions, team composition can not be changed once registration is
                        completed.
                    </div>
                    <div class="text-sm font-semibold text-slate-700 mb-2">Members</div>
                    <div class="divide-y divide-slate-100 rounded-xl border border-slate-100">
                        <div v-for="(m, i) in team.members" :key="m.id"
                            class="p-3 flex flex-col md:flex-row md:justify-between gap-1 text-sm">
                            <div>
                                <div class="font-medium text-slate-800">{{ i + 1 }}. {{ m.user_name }}</div>
                                <div class="text-slate-500">{{ m.institution }}</div>
                            </div>
                            <div class="md:text-right text-slate-500">
                                <div>{{ m.email }}</div>
                                <div>{{ m.phone }}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else>
                    <div class="grid md:grid-cols-2 gap-3 mb-4">
                        <div>
                            <label class="text-sm font-medium text-slate-700">Team Name</label>
                            <input type="text" v-model="form.name"
                                class="block w-full mt-1 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-200 focus:border-violet-400 p-2.5 transition-colors">
                        </div>
                        <div>
                            <label class="text-sm font-medium text-slate-700">Institution</label>
                            <input type="text" v-model="form.institution"
                                class="block w-full mt-1 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-200 focus:border-violet-400 p-2.5 transition-colors">
                        </div>
                        <div>
                            <label class="text-sm font-medium text-slate-700">Contact Email</label>
                            <input type="text" v-model="form.email"
                                class="block w-full mt-1 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-200 focus:border-violet-400 p-2.5 transition-colors">
                        </div>
                        <div>
                            <label class="text-sm font-medium text-slate-700">Contact Phone / WhatsApp</label>
                            <input type="text" v-model="form.phone"
                                class="block w-full mt-1 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-200 focus:border-violet-400 p-2.5 transition-colors">
                        </div>
                        <div class="md:col-span-2">
                            <label class="text-sm font-medium text-slate-700">Address</label>
                            <input type="text" v-model="form.address"
                                class="block w-full mt-1 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-200 focus:border-violet-400 p-2.5 transition-colors">
                        </div>
                    </div>

                    <div class="font-semibold text-slate-700 mb-2">Team Members (exactly 3)</div>
                    <div v-for="(member, i) in form.members" :key="i"
                        class="rounded-xl border border-slate-200 p-4 mb-3">
                        <div class="text-sm font-semibold text-indigo-900 mb-2">Member {{ i + 1 }}</div>
                        <div class="grid md:grid-cols-2 gap-3">
                            <input type="text" v-model="member.user_name" placeholder="Full Name"
                                class="block w-full bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-200 focus:border-violet-400 p-2.5 transition-colors">
                            <input type="text" v-model="member.institution" placeholder="Institution"
                                class="block w-full bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-200 focus:border-violet-400 p-2.5 transition-colors">
                            <input type="text" v-model="member.email"
                                placeholder="Email (must match JCU 2026 registration)"
                                class="block w-full bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-200 focus:border-violet-400 p-2.5 transition-colors">
                            <input type="text" v-model="member.phone" placeholder="Phone / WhatsApp"
                                class="block w-full bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-200 focus:border-violet-400 p-2.5 transition-colors">
                            <select v-model="member.flag"
                                class="block w-full md:col-span-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-200 focus:border-violet-400 p-2.5 transition-colors">
                                <option value="">Participant Type (optional)</option>
                                <option value="medical_student">Medical Student</option>
                                <option value="clinical_clerk">Clinical Clerk</option>
                                <option value="medical_intern">Medical Intern</option>
                                <option value="general_practitioner">General Practitioner</option>
                            </select>
                        </div>
                    </div>

                    <div class="text-xs text-slate-500 mb-4 italic">
                        Each member's email must match the email they use to register for JCU 2026 — it's how the
                        20% CORLIMPIADE discount gets applied at checkout.
                    </div>

                    <div class="text-right">
                        <button @click="submitTeam" :disabled="disabled"
                            class="text-white bg-gradient-to-r from-rose-700 to-amber-500 hover:shadow-lg hover:shadow-rose-200 font-medium rounded-full text-base px-8 py-2.5 text-center transition-shadow duration-200">
                            <BtnLoader v-if="disabled"></BtnLoader>
                            <span v-if="!disabled">Register Team</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="text-center text-sm text-slate-500 mt-8">
                Questions? Contact
                <a class="text-violet-600 font-semibold" target="_blank" href="https://wa.me/628981817890">
                    +62 898-1817-890 (dr. Zizi)
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            has_token: false,
            loading_team: true,
            disabled: false,
            team: null,
            timeline: [
                { date: '25th August 2026', label: 'Open Registration', icon: 'file-alt' },
                { date: '27th September 2026', label: 'Closed Registration', icon: 'file-upload' },
                { date: '2nd October 2026', label: 'Qualification Round', icon: 'users-alt' },
                { date: '3rd October 2026', label: 'Final Round for 5 Best Teams', icon: 'podium' },
            ],
            terms: [
                'Participants must compete in teams, with each team consisting of three (3) members.',
                'All participants are required to be officially registered as attendees of JCU 2026.',
                'The team composition may consist of medical students, clinical clerks, medical interns, or general practitioners.',
                'The composition of the team members can not be changed once the Corlimpiade registration process is completed.',
                'The competition materials will be based on the Indonesian Medical Doctor Competence Standards (SKDI), specifically related to cardiovascular medicine.',
                'Each team is obligated to adhere to all competition rules and regulations established by the organizing committee.',
                'The decision made by the organizing committee and the panel of judges are final.',
            ],
            form: this.emptyForm(),
        }
    },
    methods: {
        emptyForm() {
            return {
                name: '',
                institution: '',
                address: '',
                email: '',
                phone: '',
                members: [
                    { user_name: '', institution: '', email: '', phone: '', flag: '', document_link: '' },
                    { user_name: '', institution: '', email: '', phone: '', flag: '', document_link: '' },
                    { user_name: '', institution: '', email: '', phone: '', flag: '', document_link: '' },
                ],
            }
        },
        statusLabel(status) {
            switch (status) {
                case 100: return 'Registered'
                case 200: return 'Elimination Round'
                case 300: return 'Passed Elimination'
                case 401: return 'Winner 1'
                case 402: return 'Winner 2'
                case 403: return 'Winner 3'
                default: return 'Registered'
            }
        },
        checkToken() {
            this.has_token = !!localStorage.getItem('perki_user_token')
        },
        loadTeam() {
            if (!this.has_token) {
                this.loading_team = false
                return
            }
            this.loading_team = true
            this.authGet('pub/groups-ekg', { section: 'jcu26' })
                .then((data) => {
                    this.team = (data && data.success !== false) ? data.result : null
                    this.loading_team = false
                })
        },
        validEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '')
        },
        submitTeam() {
            if (!this.form.name || !this.form.address || !this.validEmail(this.form.email) || !this.form.phone) {
                this.toaster({ title: 'Please fill in the team details', icon: 'warning', dismissible: true })
                return
            }

            let incomplete = this.form.members.some((m) => {
                return m.user_name.trim().length < 2 || m.institution.trim().length < 2 || !this.validEmail(m.email)
            })
            if (incomplete) {
                this.toaster({ title: 'Please fill in name, institution, and a valid email for all 3 members', icon: 'warning', dismissible: true })
                return
            }

            this.disabled = true
            this.authPost('pub/groups', {
                section: 'jcu26',
                category: 'corlimpiade',
                name: this.form.name,
                institution: this.form.institution,
                address: this.form.address,
                email: this.form.email,
                phone: this.form.phone,
                members: this.form.members,
            }).then((data) => {
                this.disabled = false
                if (data.success) {
                    this.toaster({ title: 'Team registered successfully' })
                    this.loadTeam()
                } else {
                    this.toaster({ title: data.message || 'Failed to register team', icon: 'warning', dismissible: true })
                }
            }).catch(() => {
                this.disabled = false
            })
        },
    },
    created() {
        this.checkToken()
        this.loadTeam()
    },
}
</script>

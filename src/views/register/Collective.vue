<template>
    <div class="relative overflow-hidden max-w-screen-lg mx-auto pt-20 px-4">
        <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div
                class="absolute -top-24 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-violet-200 to-teal-200 opacity-60 blur-3xl">
            </div>
            <div
                class="absolute top-72 -left-32 h-80 w-80 rounded-full bg-gradient-to-br from-teal-200 to-sky-200 opacity-50 blur-3xl">
            </div>
        </div>

        <div class="my-6" style="min-height: calc(100vh - 195px);">
            <div class="p-6 sm:p-8 bg-white rounded-3xl shadow-xl shadow-slate-200/70 ring-1 ring-slate-100">
                <div class="font-bold text-2xl text-indigo-900">Collective Registration</div>
                <div class="text-sm text-slate-500">
                    Register a group of at least {{ min_members }} participants for the
                    <b>{{ symposium.name || 'Symposium' }}</b>.
                    One single bill is issued to your account (<span class="text-violet-600">{{ payer.email }}</span>).
                </div>

                <div v-if="seats_left !== null && seats_left < 9999"
                    class="mt-3 text-xs inline-block px-3 py-1 rounded-full"
                    :class="seats_left > 0 ? 'bg-violet-50 text-violet-700' : 'bg-red-50 text-red-600'">
                    {{ seats_left }} symposium seat(s) left
                </div>

                <div class="mt-5 grid gap-4 md:grid-cols-3">
                    <!-- participants -->
                    <div class="md:col-span-2">
                        <div v-for="(row, i) in rows" :key="i"
                            class="border border-slate-200 rounded-xl p-3 mb-2 bg-slate-50/60">
                            <div class="grid grid-cols-12 gap-2 gap-y-3">
                                <div class="col-span-12 sm:col-span-6">
                                    <label class="block text-xs font-medium text-slate-500 mb-1">Job Type</label>
                                    <select v-model="row.job_type_code" @change="onJobType(i)"
                                        class="bg-white border border-slate-200 text-indigo-900 text-sm rounded-lg focus:ring-2 focus:ring-violet-200 focus:border-violet-400 block w-full p-2">
                                        <option value="">Job type</option>
                                        <option v-for="job in job_types" :key="job.code" :value="job.code">
                                            {{ job.name }}
                                        </option>
                                    </select>
                                    <small class="text-xs text-red-500 italic" v-if="parseError(i, 'job_type_code')">
                                        {{ parseError(i, 'job_type_code') }}
                                    </small>
                                </div>
                                <div class="col-span-12 sm:col-span-6">
                                    <label class="block text-xs font-medium text-slate-500 mb-1">NIK</label>
                                    <input type="text" inputmode="numeric" placeholder="16-digit NIK" v-model="row.nik"
                                        @blur="validateNik(i)"
                                        class="bg-white border border-slate-200 text-indigo-900 text-sm rounded-lg focus:ring-2 focus:ring-violet-200 focus:border-violet-400 block w-full p-2">
                                    <small class="text-xs text-red-500 italic" v-if="parseError(i, 'nik')">
                                        {{ parseError(i, 'nik') }}
                                    </small>
                                </div>
                                <div class="col-span-12 sm:col-span-6">
                                    <label class="block text-xs font-medium text-slate-500 mb-1">Name</label>
                                    <input type="text" placeholder="Full name" v-model="row.name"
                                        class="bg-white border border-slate-200 text-indigo-900 text-sm rounded-lg focus:ring-2 focus:ring-violet-200 focus:border-violet-400 block w-full p-2">
                                    <small class="text-xs text-red-500 italic" v-if="parseError(i, 'name')">
                                        {{ parseError(i, 'name') }}
                                    </small>
                                </div>
                                <div class="col-span-12 sm:col-span-6">
                                    <label class="block text-xs font-medium text-slate-500 mb-1">Email</label>
                                    <input type="email" placeholder="name@example.com" v-model="row.email"
                                        class="bg-white border border-slate-200 text-indigo-900 text-sm rounded-lg focus:ring-2 focus:ring-violet-200 focus:border-violet-400 block w-full p-2">
                                    <small class="text-xs text-red-500 italic" v-if="parseError(i, 'email')">
                                        {{ parseError(i, 'email') }}
                                    </small>
                                </div>

                                <!-- optional workshop pair (one morning + one afternoon), priced per job type -->
                                <div class="col-span-12" v-if="workshops.length">
                                    <div v-if="rowWorkshopEligible(row)">
                                        <label class="block text-xs font-medium text-slate-500 mb-1">
                                            Workshops <span class="text-slate-400">(optional — pick one from each session)</span>
                                        </label>
                                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            <select v-model="row.workshop_first"
                                                class="bg-white border border-slate-200 text-indigo-900 text-sm rounded-lg focus:ring-2 focus:ring-violet-200 focus:border-violet-400 block w-full p-2">
                                                <option value="">No morning workshop</option>
                                                <option v-for="w in morningWorkshops" :key="w.slug" :value="w.slug"
                                                    :title="w.title" :disabled="!w.available && row.workshop_first !== w.slug">
                                                    {{ w.name }}{{ w.available ? '' : ' — full' }}
                                                </option>
                                            </select>
                                            <select v-model="row.workshop_second"
                                                class="bg-white border border-slate-200 text-indigo-900 text-sm rounded-lg focus:ring-2 focus:ring-violet-200 focus:border-violet-400 block w-full p-2">
                                                <option value="">No afternoon workshop</option>
                                                <option v-for="w in afternoonWorkshops" :key="w.slug" :value="w.slug"
                                                    :title="w.title" :disabled="!w.available && row.workshop_second !== w.slug">
                                                    {{ w.name }}{{ w.available ? '' : ' — full' }}
                                                </option>
                                            </select>
                                        </div>
                                        <small class="text-xs text-violet-600" v-if="rowWantsWorkshop(row)">
                                            + {{ $filters.currency(workshopPairPrice(row)) }} workshop pair
                                        </small>
                                        <small class="text-xs text-amber-600 italic"
                                            v-else-if="row.workshop_first || row.workshop_second">
                                            Pick one morning and one afternoon workshop, or clear both.
                                        </small>
                                    </div>
                                    <div v-else-if="row.job_type_code" class="text-xs text-slate-400 italic">
                                        Workshops are not available for this job type.
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-between items-center mt-2">
                                <div class="text-xs text-slate-500">
                                    Participant {{ i + 1 }}
                                    <span v-if="rowPrice(row)" class="text-violet-600 font-medium">
                                        — {{ $filters.currency(rowPrice(row)) }}
                                    </span>
                                </div>
                                <button type="button" @click="removeRow(i)" v-if="rows.length > 1"
                                    class="text-xs text-red-500 hover:text-red-600 flex items-center">
                                    <unicon name="trash-alt" height="14" width="14" fill="currentColor"></unicon>
                                    <span class="ml-1">Remove</span>
                                </button>
                            </div>
                        </div>

                        <button type="button" @click="addRow"
                            class="w-full mt-1 border border-dashed border-violet-300 text-violet-600 hover:bg-violet-50 rounded-xl text-sm px-4 py-2.5 flex items-center justify-center transition-colors">
                            <unicon name="plus-circle" height="16" width="16" fill="currentColor"></unicon>
                            <span class="ml-1">Add participant</span>
                        </button>

                        <div class="text-xs p-3 bg-violet-50 border border-violet-100 rounded-lg mt-3 text-slate-600">
                            NIK is needed to invite each participant into Plataran Sehat. Use the same email each
                            participant registered to their Plataran Sehat account. Collective registration covers the
                            Symposium, plus an optional workshop pair (one morning + one afternoon) per participant.
                        </div>
                    </div>

                    <!-- summary -->
                    <div class="md:col-span-1">
                        <div class="font-semibold text-lg mb-2 text-indigo-900">Bill</div>
                        <div class="px-3 py-4 border rounded-xl">
                            <div class="text-xs text-slate-500">Billed to</div>
                            <div class="text-sm italic mb-1">{{ payer.name }}</div>
                            <div class="text-sm italic mb-3 break-all">{{ payer.email }}</div>

                            <div class="border-t pt-2 text-sm">
                                <div class="my-1" v-for="(row, i) in validRows" :key="i">
                                    <div class="flex justify-between">
                                        <div class="truncate mr-2">{{ row.name }}</div>
                                        <div class="whitespace-nowrap">{{ $filters.currency(rowPrice(row)) }}</div>
                                    </div>
                                    <div v-if="rowWantsWorkshop(row)" class="text-xs text-slate-400 pl-2">
                                        incl. workshop pair {{ $filters.currency(workshopPairPrice(row)) }}
                                    </div>
                                </div>
                                <div v-if="validRows.length === 0" class="italic text-slate-400 my-1">
                                    No complete participant yet
                                </div>
                            </div>

                            <div class="border-t border-black mt-2 pt-2 text-sm flex justify-between font-semibold">
                                <div>TOTAL ({{ validRows.length }})</div>
                                <div>{{ $filters.currency(subtotal) }}</div>
                            </div>

                            <div class="mt-4">
                                <button @click="submit" :disabled="disabled || !canSubmit"
                                    class="text-white w-full mb-2 bg-gradient-to-r from-violet-600 to-teal-500 hover:shadow-lg hover:shadow-violet-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium rounded-full text-base px-8 py-2.5 text-center transition-shadow duration-200">
                                    <BtnLoader v-if="disabled"></BtnLoader>
                                    <span v-if="!disabled">Proceed to Payment</span>
                                </button>
                                <div class="text-xs text-slate-500 text-center" v-if="validRows.length < min_members">
                                    A collective registration needs at least {{ min_members }} participants
                                    ({{ min_members - validRows.length }} more to go).
                                </div>
                                <div class="text-xs text-red-500 text-center" v-if="seats_left !== null && validRows.length > seats_left">
                                    Not enough symposium seats for {{ validRows.length }} participants.
                                </div>
                            </div>
                        </div>
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
            disabled: false,
            min_members: 3,
            job_types: [],
            prices: {},
            workshops: [],
            workshop_prices: {},
            symposium: {},
            payer: {},
            seats_left: null,
            rows: [
                { job_type_code: '', nik: '', name: '', email: '', workshop_first: '', workshop_second: '' },
                { job_type_code: '', nik: '', name: '', email: '', workshop_first: '', workshop_second: '' },
                { job_type_code: '', nik: '', name: '', email: '', workshop_first: '', workshop_second: '' },
            ],
            form_errors: {},
        }
    },
    computed: {
        validRows() {
            return this.rows.filter(r => r.job_type_code && this.digits(r.nik).length === 16 && r.name.trim() && this.validEmail(r.email))
        },
        subtotal() {
            return this.validRows.reduce((sum, r) => sum + this.rowPrice(r), 0)
        },
        morningWorkshops() {
            return this.workshops.filter(w => w.session === 'morning')
        },
        afternoonWorkshops() {
            return this.workshops.filter(w => w.session === 'afternoon')
        },
        // A workshop pair must be complete (one morning + one afternoon) and only
        // picked for a job type that has a workshop price.
        workshopIssues() {
            return this.rows.some(r => {
                let picked = !!r.workshop_first || !!r.workshop_second
                let half = (!!r.workshop_first) !== (!!r.workshop_second)
                return (picked && !this.rowWorkshopEligible(r)) || half
            })
        },
        canSubmit() {
            if (this.validRows.length < this.min_members) return false
            if (this.seats_left !== null && this.validRows.length > this.seats_left) return false
            if (this.workshopIssues) return false
            return true
        },
    },
    methods: {
        newRow() {
            return { job_type_code: '', nik: '', name: '', email: '', workshop_first: '', workshop_second: '' }
        },
        workshopPairPrice(row) {
            return this.workshop_prices[row.job_type_code] || 0
        },
        rowWorkshopEligible(row) {
            return this.workshopPairPrice(row) > 0
        },
        rowWantsWorkshop(row) {
            return !!(row.workshop_first && row.workshop_second)
        },
        onJobType(i) {
            // Clear any workshop pick a now-ineligible job type can no longer take.
            if (!this.rowWorkshopEligible(this.rows[i])) {
                this.rows[i].workshop_first = ''
                this.rows[i].workshop_second = ''
            }
        },
        digits(v) {
            return (v || '').replace(/\D/g, '')
        },
        validEmail(v) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((v || '').trim())
        },
        addRow() {
            this.rows.push(this.newRow())
        },
        removeRow(i) {
            this.rows.splice(i, 1)
            if (this.rows.length === 0) this.rows.push(this.newRow())
        },
        rowPrice(row) {
            let price = this.prices[row.job_type_code] || 0
            if (this.rowWantsWorkshop(row)) {
                price += this.workshopPairPrice(row)
            }
            return price
        },
        parseError(i, field) {
            let key = 'people.' + i + '.' + field
            return this.form_errors[key] ? this.form_errors[key][0] : ''
        },
        validateNik(i) {
            const key = 'people.' + i + '.nik'
            const nik = this.digits(this.rows[i].nik)
            if (nik && nik.length !== 16) {
                this.form_errors[key] = ['NIK must be 16 digits']
            } else {
                delete this.form_errors[key]
            }
        },
        loadData() {
            this.authGet('pub/collective-init-jcu26')
                .then((data) => {
                    if (!data.success) {
                        this.toaster({ title: data.message || 'Unable to load', icon: 'warning', dismissible: true })
                        return
                    }
                    this.job_types = data.result.job_types
                    this.prices = data.result.prices
                    this.workshops = data.result.workshops || []
                    this.workshop_prices = data.result.workshop_prices || {}
                    this.symposium = data.result.symposium
                    this.payer = data.result.payer
                    this.seats_left = data.result.seats_left
                })
        },
        submit() {
            this.form_errors = {}

            if (this.validRows.length < this.min_members) {
                this.toaster({ title: 'A collective registration needs at least ' + this.min_members + ' complete participants', icon: 'warning', dismissible: true })
                return
            }

            if (this.workshopIssues) {
                this.toaster({ title: 'Each participant taking workshops needs one morning and one afternoon pick.', icon: 'warning', dismissible: true })
                return
            }

            let people = this.rows
                .filter(r => r.job_type_code || r.nik || r.name || r.email)
                .map(r => ({
                    job_type_code: r.job_type_code,
                    nik: this.digits(r.nik),
                    name: r.name.trim(),
                    email: r.email.trim().toLowerCase(),
                    workshop_first: r.workshop_first || null,
                    workshop_second: r.workshop_second || null,
                }))

            this.disabled = true
            this.authPost('pub/collective-payment-jcu26', { people })
                .then((data) => {
                    this.disabled = false
                    if (data.success) {
                        let trx = data.result.transaction
                        this.emitter.emit('update-header')
                        this.$router.push('/payment?transaction_number=' + trx.number)
                    } else if (data.error === 422 && data.errors) {
                        this.form_errors = data.errors
                        this.toaster({ title: data.message || 'Please check the participant data', icon: 'warning', dismissible: true })
                    } else {
                        this.toaster({ title: data.message || 'Registration failed', icon: 'warning', dismissible: true })
                    }
                })
                .catch(() => {
                    this.disabled = false
                })
        },
    },
    created() {
        if (!localStorage.getItem('perki_user_token')) {
            this.$router.replace('/login?url=/register/collective')
            return
        }
        this.loadData()
    },
}
</script>

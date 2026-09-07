<template>
    <div class="max-w-screen-lg m-auto pt-12 pb-12 px-2 mt-20" style="min-height: calc(100vh - 84px - 128px)">
        <div class="text-4xl font-bold text-center mb-3">
            ABSTRACT SUBMISSION
        </div>

        <div
            class="rounded-3xl bg-gradient-to-br from-violet-600 to-teal-500 text-white shadow-xl shadow-slate-200/70 p-6 md:p-8 mb-4">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <div
                        class="inline-flex items-center gap-2 rounded-full bg-white/15 py-1 px-4 text-xs font-medium tracking-wide uppercase mb-2">
                        <unicon name="clock" fill="white" width="14"></unicon>
                        <span>{{ closed ? 'Submission Closed' : 'Submission Closes In' }}</span>
                    </div>
                    <div class="text-lg font-semibold">Abstract submission closes on</div>
                    <div class="text-sm text-white/85">{{ closes_at_label }}</div>
                </div>
                <div v-if="!closed" class="grid grid-cols-4 gap-2 sm:gap-3">
                    <div v-for="unit in count_units" :key="unit.label"
                        class="text-center rounded-2xl bg-white/15 py-3 px-2 min-w-[62px]">
                        <div class="text-2xl sm:text-3xl font-extrabold tabular-nums">{{ unit.value }}</div>
                        <div class="text-[10px] sm:text-xs uppercase tracking-wide text-white/70 mt-0.5">{{ unit.label }}
                        </div>
                    </div>
                </div>
                <div v-else class="rounded-2xl bg-white/15 px-4 py-3 text-sm font-medium">
                    The submission window has ended. Thank you for your interest.
                </div>
            </div>
        </div>

        <div v-if="!has_token" class="rounded-xl shadow-sm bg-yellow-200 p-6 mb-4">
            <div>Please
                <router-link class="text-blue-800 font-semibold italic" to="/login">Login</router-link>
                or
                <router-link class="text-blue-800 font-semibold italic" to="/register">Register</router-link>
                before submit abstract
            </div>
        </div>
        <div class="rounded-xl shadow-sm bg-blue-100 p-6 mb-4">
            <div class="text-lg mb-2">Abstract Submission Terms &amp; Conditions</div>
            <div>
                <ul class="list-disc ml-4 space-y-1">
                    <li>All abstracts must be submitted in English.</li>
                    <li>Creating an account on the official website is mandatory before submitting an abstract.</li>
                    <li>The Scientific Committee accepts the following abstract categories:
                        <ul class="ml-4 mt-1">
                            <li>a. Original Research</li>
                            <li>b. Case Report / Case Series</li>
                            <li>c. Systematic Review / Meta-analysis</li>
                        </ul>
                    </li>
                    <li>Authors must prepare their abstracts using the official abstract template. Supporting
                        attachments (optional) may be uploaded during the online submission process.</li>
                    <li>Abstract Structure
                        <ul class="ml-4 mt-1">
                            <li>a. Original Research: Background, Objective, Methods, Results, Conclusion</li>
                            <li>b. Case Report / Case Series: Background, Case Presentation, Discussion, Conclusion</li>
                            <li>c. Systematic Review / Meta-analysis: Background, Objective, Methods, Results,
                                Conclusion</li>
                        </ul>
                    </li>
                    <li>Abstract submission is available exclusively through the online submission system.</li>
                    <li>There is no abstract submission fee for JCU 2026 in conjunction with the 8th JINCARTOS 2026
                        (Symposium registration fees, if applicable, are separate from abstract submission).</li>
                    <li>There is no limit to the number of abstracts that an author may submit.</li>
                    <li>The abstract body must not exceed 350 words, excluding the title, author names, and
                        affiliations.</li>
                    <li>All submitted abstracts will undergo peer review by members of the Scientific Review
                        Committee.</li>
                    <li>Optional supporting figures, graphics, or tables must be submitted in JPEG (.jpg or .jpeg)
                        format.</li>
                    <li>Authors are responsible for ensuring the accuracy and originality of all submitted data.</li>
                    <li>Submitted abstracts must represent original work that has not been previously published and
                        is not under consideration for publication or presentation at another scientific conference
                        or in a peer-reviewed journal.</li>
                    <!-- <li>Download <a class="text-blue-500 font-semibold"
                            href="https://src.perki-jogja.com/assets24/docs/abstract-case-report-guidline-jcu-2026.docx"
                            target="_blank" download>Guideline</a></li> -->
                    <li>Contact:
                        <a class="italic text-blue-700" target="_blank" href="https://wa.me/6282277967753">6282277967753</a> (Latifah)
                    </li>
                </ul>
            </div>
        </div>
        <div v-if="has_token" class="flex justify-center">
            <router-link to="/profile/abstracts"
                class="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-base px-8 py-2.5 text-center mr-3 md:mr-0">
                Submit new abstract
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            has_token: false,
            // Mirrors AbstractController::ABSTRACT_SUBMISSION_CLOSES_AT
            // (2026-09-07 23:59:00, app timezone Asia/Jakarta = UTC+7).
            closes_at: '2026-09-07T23:59:00+07:00',
            closes_at_label: '7 September 2026, 23:59 WIB',
            closed: false,
            days: '0',
            hours: '00',
            minutes: '00',
            seconds: '00',
            countdown_timer: null,
        }
    },
    computed: {
        count_units() {
            return [
                { label: 'Days', value: this.days },
                { label: 'Hours', value: this.hours },
                { label: 'Minutes', value: this.minutes },
                { label: 'Seconds', value: this.seconds },
            ]
        }
    },
    methods: {
        checkToken() {
            let token = localStorage.getItem('perki_user_token');
            if (token) {
                this.has_token = true;
            } else {
                this.has_token = false;
            }
        },
        pad(value) {
            return String(value).padStart(2, '0')
        },
        countdown() {
            const timeleft = new Date(this.closes_at).getTime() - Date.now();

            if (timeleft <= 0) {
                this.closed = true
                this.days = '0'
                this.hours = this.minutes = this.seconds = '00'
                if (this.countdown_timer) {
                    clearInterval(this.countdown_timer)
                    this.countdown_timer = null
                }
                return
            }

            this.closed = false
            this.days = String(Math.floor(timeleft / (1000 * 60 * 60 * 24)))
            this.hours = this.pad(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
            this.minutes = this.pad(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)))
            this.seconds = this.pad(Math.floor((timeleft % (1000 * 60)) / 1000))
        }
    },
    created() {
        this.checkToken()
        this.countdown()
        this.countdown_timer = setInterval(this.countdown, 1000)
    },
    beforeUnmount() {
        if (this.countdown_timer) {
            clearInterval(this.countdown_timer)
        }
    },
}
</script>
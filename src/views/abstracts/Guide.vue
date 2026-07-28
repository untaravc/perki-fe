<template>
    <div class="max-w-screen-lg m-auto pt-12 pb-12 px-2 mt-20" style="min-height: calc(100vh - 84px - 128px)">
        <div class="text-4xl font-bold text-center mb-3">
            ABSTRACT SUBMISSION
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
        }
    },
    created() {
        this.checkToken()
    },
}
</script>
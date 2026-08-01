<template>
    <div class="relative overflow-hidden max-w-screen-lg mx-auto pt-28 pb-16 px-4" style="min-height: calc(100vh - 130px)">
        <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div
                class="absolute -top-24 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-violet-200 to-teal-200 opacity-60 blur-3xl">
            </div>
            <div
                class="absolute top-72 -left-32 h-80 w-80 rounded-full bg-gradient-to-br from-teal-200 to-sky-200 opacity-50 blur-3xl">
            </div>
        </div>

        <div class="text-center mb-10">
            <div
                class="inline-flex items-center gap-2 mb-4 rounded-full bg-gradient-to-r from-violet-100 to-teal-100 text-violet-700 py-1.5 px-5 text-sm font-medium">
                Legal
            </div>
            <div class="text-4xl font-bold text-slate-900">
                Terms &amp; Conditions
            </div>
            <div class="text-sm text-slate-500 mt-2">Last updated: 1 August 2026</div>
        </div>

        <div class="rounded-3xl bg-white shadow-xl shadow-slate-200/70 ring-1 ring-slate-100 p-6 md:p-10">
            <p class="text-slate-600 leading-relaxed mb-6">
                These Terms &amp; Conditions govern your registration for and participation in Jogja Cardiology
                Update 2026 (JCU 2026), organized by Perki Jogja. By registering on this website, you agree to be
                bound by these terms.
            </p>

            <h2 class="text-xl font-bold text-slate-900 mt-8 mb-3">1. Eligibility</h2>
            <p class="text-slate-600 leading-relaxed mb-3">
                This event is intended for medical professionals, cardiology specialists, and students (including
                COAS/medical students) as reflected in the member type options during registration. You are
                responsible for selecting the member type that accurately reflects your status.
            </p>

            <h2 class="text-xl font-bold text-slate-900 mt-8 mb-3">2. Registration &amp; Payment</h2>
            <ul class="list-disc ml-5 text-slate-600 space-y-1 mb-3">
                <li>You must provide accurate and complete information when registering</li>
                <li>Your registration is confirmed only after successful payment verification</li>
                <li>Registration fees are generally non-refundable, except at the organizing committee's discretion
                    or as required by law</li>
                <li>The organizer reserves the right to adjust event dates, schedule, or venue where necessary, and
                    will communicate any such changes to registered participants</li>
            </ul>

            <h2 class="text-xl font-bold text-slate-900 mt-8 mb-3">3. Abstract Submission</h2>
            <p class="text-slate-600 leading-relaxed mb-3">
                Abstracts submitted through your
                <router-link to="/profile/abstracts" class="text-violet-600 hover:text-violet-700 font-medium">
                    account</router-link>
                must be original work and comply with the
                <router-link to="/abstracts" class="text-violet-600 hover:text-violet-700 font-medium">Abstract
                    Guideline</router-link>. Submissions are subject to review by the scientific committee, which may
                accept, reject, or request revisions. The organizer reserves the right to include accepted abstracts
                in the event program and related materials, with attribution to the original author(s).
            </p>

            <h2 class="text-xl font-bold text-slate-900 mt-8 mb-3">4. Certificates &amp; SKP Credit</h2>
            <p class="text-slate-600 leading-relaxed mb-3">
                Attendance certificates and SKP learning credits are issued to participants who complete registration
                requirements and attend the relevant sessions. SKP credit issuance via Plataran Sehat requires a
                valid NIK; participants who do not provide one may not be eligible to receive SKP credit.
            </p>

            <h2 class="text-xl font-bold text-slate-900 mt-8 mb-3">5. Code of Conduct</h2>
            <p class="text-slate-600 leading-relaxed mb-3">
                Participants are expected to behave professionally and respectfully towards speakers, committee
                members, and fellow participants throughout the event, whether in person or online.
            </p>

            <h2 class="text-xl font-bold text-slate-900 mt-8 mb-3">6. Limitation of Liability</h2>
            <p class="text-slate-600 leading-relaxed mb-3">
                The organizer is not responsible for personal travel, accommodation, or other arrangements made by
                participants in connection with the event, nor for indirect or consequential losses arising from
                event changes, cancellation, or circumstances beyond our reasonable control.
            </p>

            <h2 class="text-xl font-bold text-slate-900 mt-8 mb-3">7. Changes to These Terms</h2>
            <p class="text-slate-600 leading-relaxed mb-3">
                We may update these Terms &amp; Conditions from time to time. Continued use of this website or
                participation in the event after changes are posted constitutes acceptance of the updated terms.
            </p>

            <h2 class="text-xl font-bold text-slate-900 mt-8 mb-3">8. Governing Law</h2>
            <p class="text-slate-600 leading-relaxed mb-3">
                These terms are governed by the laws of the Republic of Indonesia.
            </p>

            <h2 class="text-xl font-bold text-slate-900 mt-8 mb-3">9. Contact Us</h2>
            <p class="text-slate-600 leading-relaxed">
                For questions about these Terms &amp; Conditions, please reach out through our
                <router-link to="/contact-us" class="text-violet-600 hover:text-violet-700 font-medium">Contact
                    page</router-link>.
            </p>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

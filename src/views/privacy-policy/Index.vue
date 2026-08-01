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
                Privacy Policy
            </div>
            <div class="text-sm text-slate-500 mt-2">Last updated: 1 August 2026</div>
        </div>

        <div class="rounded-3xl bg-white shadow-xl shadow-slate-200/70 ring-1 ring-slate-100 p-6 md:p-10">
            <p class="text-slate-600 leading-relaxed mb-6">
                This Privacy Policy explains how Perki Jogja collects, uses, and protects your personal information
                when you register for or otherwise interact with Jogja Cardiology Update 2026 (JCU 2026) and related
                events. By using this website and submitting your information, you agree to the practices described
                below.
            </p>

            <h2 class="text-xl font-bold text-slate-900 mt-8 mb-3">1. Information We Collect</h2>
            <p class="text-slate-600 leading-relaxed mb-2">When you register, submit an abstract, or complete a
                payment, we may collect:</p>
            <ul class="list-disc ml-5 text-slate-600 space-y-1 mb-3">
                <li>Full name, email address, phone/WhatsApp number, and password</li>
                <li>ID Number (NIK), institution, city/province, and member/job type</li>
                <li>Profile photo and identity documents (e.g. student card, where applicable)</li>
                <li>Abstract submissions, author details, and supporting files or images</li>
                <li>Payment and transaction records related to event registration</li>
            </ul>

            <h2 class="text-xl font-bold text-slate-900 mt-8 mb-3">2. How We Use Your Information</h2>
            <ul class="list-disc ml-5 text-slate-600 space-y-1 mb-3">
                <li>To process and confirm your event registration and payment</li>
                <li>To issue attendance certificates and SKP learning credits</li>
                <li>To verify your identity (NIK) for integration with Plataran Sehat</li>
                <li>To review and manage abstract submissions</li>
                <li>To send updates, schedules, and other communication related to the event</li>
                <li>To respond to your inquiries and provide support</li>
            </ul>

            <h2 class="text-xl font-bold text-slate-900 mt-8 mb-3">3. Sharing Your Information</h2>
            <p class="text-slate-600 leading-relaxed mb-3">
                We do not sell your personal data to third parties. Your NIK and related learning data may be shared
                with the Ministry of Health's Plataran Sehat / SATUSEHAT platform solely for the purpose of issuing
                SKP learning credits. The storage and management of NIK data submitted to Plataran Sehat is the
                responsibility of the Ministry of Health. Payment details may be processed by a third-party payment
                gateway strictly to complete your transaction.
            </p>

            <h2 class="text-xl font-bold text-slate-900 mt-8 mb-3">4. Data Storage &amp; Security</h2>
            <p class="text-slate-600 leading-relaxed mb-3">
                We take reasonable technical and organizational measures to protect your personal information from
                unauthorized access, alteration, or disclosure. Your session is kept using your browser's local
                storage so you remain signed in between visits; you can sign out at any time from your account menu.
            </p>

            <h2 class="text-xl font-bold text-slate-900 mt-8 mb-3">5. Your Rights</h2>
            <p class="text-slate-600 leading-relaxed mb-3">
                You may access and update most of your information at any time from your
                <router-link to="/profile/info" class="text-violet-600 hover:text-violet-700 font-medium">account
                    profile</router-link>. To request correction or deletion of data that cannot be edited directly,
                please contact the organizing committee using the details below.
            </p>

            <h2 class="text-xl font-bold text-slate-900 mt-8 mb-3">6. Changes to This Policy</h2>
            <p class="text-slate-600 leading-relaxed mb-3">
                We may update this Privacy Policy from time to time to reflect changes in our practices. Any changes
                will be posted on this page with a revised "last updated" date.
            </p>

            <h2 class="text-xl font-bold text-slate-900 mt-8 mb-3">7. Contact Us</h2>
            <p class="text-slate-600 leading-relaxed">
                If you have any questions about this Privacy Policy or how your data is handled, please reach out
                through our
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

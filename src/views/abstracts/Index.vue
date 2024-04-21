<template>
    <div class="max-w-screen-lg m-auto pt-12 pb-12 px-2 mt-20" style="min-height: calc(100vh - 84px - 128px)">
        <div class="text-4xl font-bold mb-1 text-center mb-3">
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
            <div class="text-lg mb-2">Requirements</div>
            <div>
                <ul class="list-disc ml-4">
                    <li>All abstracts must be submitted in English</li>
                    <li>Before submitting an abstract, registration to the symposium is mandatory</li>
                    <li>Please refer to the abstract templates and upload the file attachment (optional) to the online
                        submission</li>
                    <li>Submission is only available via online submission</li>
                    <li>No submission fee required to submit an abstract to JCU 2024 in conjunction with the 7th
                        JINCARTOS 2024
                    </li>
                    <li>There is no limit to the number of abstracts an author may submit.</li>
                    <li>All abstract submitted are reviewed and selected by members of the Peer Reviewers.</li>
                    <li>Supported attachment file format: graphic, figure, or table is .JPEG or .JPG</li>
                    <!--                    <li>Contact Person: dr</li>-->
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
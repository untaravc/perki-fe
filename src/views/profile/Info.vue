<template>
    <div>
        <div class="text-2xl font-semibold mb-3">Profile</div>
        <div class="p-6 border-slate-100 bg-white rounded-xl mb-4">
            <div class="grid gap-2 grid-cols-5">
                <div>
                    <div style="padding-bottom: 100%" :style="`background-image:url(` + profile.image + `)`"
                        class="w-full bg-purple-300 bg-cover rounded-md bg-center bg-no-repeat">
                    </div>
                    <div class="text-center">
                        <label for="photo-profile" class="text-center text-sm cursor-pointer text-blue-800">
                            <span v-if="!disabled">Update Photo</span>
                            <span v-if="disabled">Updating..</span>
                        </label>
                    </div>
                    <input type="file" class="hidden" id="photo-profile" accept="image/*" @change="uploadCover">
                </div>
                <div class="col-span-4 pl-4">
                    <div class="flex justify-between">
                        <div class="text-2xl font-bold mb-3">{{ profile.name }}</div>
                    </div>
                    <div class="text-sm flex items-center mb-1">
                        <unicon name="envelope" height="16px"></unicon>
                        <div class="ml-1">{{ profile.email }}</div>
                    </div>
                    <div class="text-sm flex items-center mb-1">
                        <unicon name="phone" height="20px"></unicon>
                        <div class="ml-1">{{ profile.phone }}</div>
                    </div>
                    <div class="text-sm flex items-center mb-1">
                        <unicon name="user-md" height="20px"></unicon>
                        <div class="ml-1">{{ profile.job_label }}</div>
                    </div>
                    <div class="text-sm flex items-center mb-1">
                        <unicon name="bag" height="20px"></unicon>
                        <div class="ml-1">{{ profile.institution }}</div>
                    </div>
                    <div class="text-sm flex items-center mb-1">
                        <unicon name="location-point" height="20px"></unicon>
                        <div class="ml-1">{{ profile.city }}</div>
                    </div>
                    <div class="text-right">
                        <a href="#edit-form"
                            class="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-sm px-8 py-1.5 text-center mr-3 md:mr-0"
                            @click="editForm(profile)">
                            Edit Profile and Password
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-6 border-slate-100 bg-white rounded-xl" id="edit-form" v-if="edit_mode">
            <div class="mb-3">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Name<span
                        class="text-red-600">*</span></label>
                <input type="text" id="name" placeholder="ex. Jhon Doe" autofocus v-model="form.name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                <small class="text-xs text-red-600 italic" v-if="parseErrors('name')">
                    {{ parseErrors('name', 'val') }}
                </small>
            </div>
            <div class="mb-3">
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Phone<span
                        class="text-red-600">*</span></label>
                <input type="text" id="phone" autofocus v-model="form.phone"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                <small class="text-xs text-red-600 italic" v-if="parseErrors('phone')">
                    {{ parseErrors('phone', 'val') }}
                </small>
            </div>
            <div class="mb-3">
                <label for="address" class="block mb-2 text-sm font-medium text-gray-900">Institution<span
                        class="text-red-600">*</span></label>
                <input type="text" id="address" autofocus v-model="form.institution"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                <small class="text-xs text-red-600 italic" v-if="parseErrors('institution')">
                    {{ parseErrors('institution', 'val') }}
                </small>
            </div>
            <div class="mb-3">
                <label for="city" class="block mb-2 text-sm font-medium text-gray-900">City<span
                        class="text-red-600">*</span></label>
                <input type="text" id="city" autofocus v-model="form.city"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                <small class="text-xs text-red-600 italic" v-if="parseErrors('city')">
                    {{ parseErrors('city', 'val') }}
                </small>
            </div>
            <div class="mb-3">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Update Password</label>
                <input type="password" id="password" autofocus v-model="form.password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                <div class="text-xs italic">Leave blank if you don't want to update the password</div>
                <small class="text-xs text-red-600 italic" v-if="parseErrors('password')">
                    {{ parseErrors('password', 'val') }}
                </small>
            </div>
            <div class="mb-3">
                <label for="password_confirmation" class="block mb-2 text-sm font-medium text-gray-900">Confirm New
                    Password</label>
                <input type="password" id="password_confirmation" autofocus v-model="form.password_confirmation"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                <small class="text-xs text-red-600 italic" v-if="parseErrors('password_confirmation')">
                    {{ parseErrors('password_confirmation', 'val') }}
                </small>
            </div>
            <div class="flex justify-end">
                <button @click="updateData" :disabled="disabled"
                    class="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-base px-8 py-2.5 text-center mr-3 md:mr-0">
                    <span v-if="!disabled">Save Changes</span>
                    <span v-if="disabled">Saving..</span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            disabled: false,
            edit_mode: false,
            profile: {
                id: '',
                name: '',
                email: '',
                job_label: '',
                phone: '',
                image: '',
            },
            form_errors: [],
            form: {
                id: '',
                name: '',
                city: '',
                phone: '',
                password: '',
                password_confirmation: '',
            }
        }
    },
    methods: {
        loadProfile() {
            this.authGet('pub/profile')
                .then((data) => {
                    this.profile = data.result

                    if (this.$route.query.open === 'open_edit_form') {
                        this.editForm(this.profile)
                    }
                })
        },
        editForm(data) {
            this.edit_mode = true;
            this.form.id = data.id;
            this.form.name = data.name;
            this.form.phone = data.phone;
            this.form.city = data.city;
            this.form.institution = data.institution;
        },
        updateData() {
            this.disabled = true;
            this.form_errors = [];
            this.authPatch('pub/profile', this.form)
                .then((data) => {
                    this.disabled = false;
                    if (data.success) {
                        this.edit_mode = false;
                        this.toaster({ title: data.message })
                        this.loadProfile()
                    } else {
                        this.form_errors = data.errors
                    }
                }).catch((e) => {
                    this.disabled = false;
                })

        },
        parseErrors(field, type = 'status') {
            let has = false;
            let message = '';
            if (this.form_errors[field]) {
                message = this.form_errors[field][0];
                has = true;
            }
            if (type === 'status') {
                return has
            } else {
                return message
            }
        },
        uploadCover() {
            let file = document.getElementById("photo-profile").files[0];
            if (file) {
                let form_data = new FormData();
                form_data.append('file', file)

                this.disabled = true;
                this.authPost('pub/upload-file', form_data)
                    .then((data) => {
                        if (data.status) {
                            let link = data.result.link;
                            this.updateImage(link)
                        }
                        this.disabled = false;
                    }).catch((e) => {
                        this.disabled = false;
                    });
            }
        },
        updateImage(link) {
            this.authPatch('pub/profile-photo', {
                image: link
            }).then(data => {
                if (data.status) {
                    this.loadProfile()
                }
            })
        }
    },
    created() {
        this.loadProfile()
    }
}
</script>
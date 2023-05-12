<template>
    <div>
        <div class="bg-white shadow-sm p-6 rounded-lg">
            <div class="mb-4"><b>Add new abstract</b></div>
            <div class="grid grid-cols-4 gap-4">
                <div class="col-span-1 bg-slate-100">
                    <div class="flex justify-center items-center">
                        <page-loader v-model:active="upload_loader" loader="dots" :is-full-page="false"/>
                        <input type="file" id="file-upload" accept="image/*,application/pdf" hidden
                               @change="uploadFile">
                        <div class="text-center">
                            <FilePreview :link="form.file"></FilePreview>
                            <label for="file-upload" class="block cursor-pointer">Upload</label>
                        </div>
                    </div>
                    <small class="text-xs text-red-600 italic" v-if="parseErrors('file')">
                        {{ parseErrors('file', 'val') }}
                    </small>
                </div>
                <div class="col-span-3">
                    <div class="mb-2">
                        <label class="text-sm">Title</label>
                        <input type="text" v-model="form.title"
                               class="block w-full rounded-lg focus:ring-blue-500 focus:border-blue-500">
                        <small class="text-xs text-red-600 italic" v-if="parseErrors('title')">
                            {{ parseErrors('title', 'val') }}
                        </small>
                    </div>
                    <div class="mb-2">
                        <label class="text-sm">Category</label>
                        <select v-model="form.category"
                                class="block w-full rounded-lg focus:ring-blue-500 focus:border-blue-500">
                            <option value="category">category</option>
                        </select>
                        <small class="text-xs text-red-600 italic" v-if="parseErrors('category')">
                            {{ parseErrors('category', 'val') }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="mb-2">
                <label class="text-sm">Abstract</label>
                <textarea rows="10" v-model="form.body"
                          class="block w-full rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
                <small class="text-xs text-red-600 italic" v-if="parseErrors('body')">
                    {{ parseErrors('body', 'val') }}
                </small>
            </div>
            <div class="text-right">
                <button @click="addData" :disabled="disabled"
                        class="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-base px-8 py-2.5 text-center mr-3 md:mr-0">
                    <span v-if="!disabled">Save</span>
                    <span v-if="disabled">Loading..</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>

import FilePreview from "@/components/FilePreview.vue";

export default {
    components: {FilePreview},
    data() {
        return {
            disabled: false,
            upload_loader: false,
            form: {
                user_id: '',
                title: '',
                subtitle: '',
                slug: '',
                image: '',
                category: '',
                file: 'http://127.0.0.1:8000/storage/files/20230512/absensi__rc_kapuas_3_transkal_2023-03-20_1683919427.pdf',
                body: '',
                status: '',
            },
            form_errors: []
        }
    },
    methods: {
        uploadFile() {
            this.upload_loader = true;
            let file = document.getElementById("file-upload").files[0];
            if (file) {
                let form_data = new FormData();

                form_data.append('file', file)

                this.authPost('pub/upload-file', form_data)
                    .then((data) => {
                        this.form.file = data.result.link;
                        this.upload_loader = false;
                    }).catch((e) => {
                    this.upload_loader = false;
                });
            } else {
                this.upload_loader = false;
            }
        },
        addData() {
            this.disabled = true
            this.authPost('pub/abstracts', this.form)
                .then((data) => {
                    if (data.status) {

                    } else {
                        this.form_errors = data.errors
                    }
                    this.disabled = false
                }).catch((data) => {
                this.disabled = false
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
        }
    }
}
</script>
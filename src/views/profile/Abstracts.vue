<template>
    <div>
        <div class="flex justify-between mb-4">
            <div class="text-2xl font-semibold mb-3" id="edit-add">Abstracts</div>
            <div>
                <button @click="addNew"
                        class="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-base px-8 py-2.5 text-center mr-3 md:mr-0">
                    Add New
                </button>
            </div>
        </div>
        <div class="bg-white shadow-sm p-6 rounded-lg mb-4" v-if="open_form">
            <div class="mb-4">
                <b v-if="!edit_mode">Add New Abstract</b>
                <b v-if="edit_mode">Edit Abstract</b>
            </div>
            <div class="relative border border-slate-500 rounded-lg p-2">
                <page-loading v-model:active="upload_loader" loader="bars" :is-full-page="false"/>
                <div class="flex justify-between">
                    <input type="file" id="file-upload" accept="application/pdf" hidden
                           @change="uploadFile">
                    <a class="flex items-center block" target="_blank" :href="form.file">
                        <unicon name="file-alt" fill="red"></unicon>
                        <span class="text-sm ml-2">{{ $filters.truncate(type.name, 30) }}</span>
                    </a>
                    <label for="file-upload" class="cursor-pointer bg-blue-800 text-white py-1 px-3 rounded-lg">Select
                        File</label>
                </div>
            </div>
            <small class="text-xs text-red-600 italic" v-if="parseErrors('file')">
                {{ parseErrors('file', 'val') }}
            </small>

            <div class="mb-2">
                <label class="text-sm">Title</label>
                <input type="text" v-model="form.title"
                       class="block w-full rounded-lg focus:ring-blue-500 focus:border-blue-500">
                <small class="text-xs text-red-600 italic" v-if="parseErrors('title')">
                    {{ parseErrors('title', 'val') }}
                </small>
            </div>
            <div class="mb-2">
                <label class="text-sm">Author(s) (separate by comma)</label>
                <input type="text" v-model="form.subtitle"
                       class="block w-full rounded-lg focus:ring-blue-500 focus:border-blue-500">
                <small class="text-xs text-red-600 italic" v-if="parseErrors('subtitle')">
                    {{ parseErrors('subtitle', 'val') }}
                </small>
            </div>
            <div class="mb-2">
                <label class="text-sm">Category</label>
                <select v-model="form.category"
                        class="block w-full rounded-lg focus:ring-blue-500 focus:border-blue-500">
                    <option value="research">Research</option>
                    <option value="case_report">Case Report</option>
                </select>
                <small class="text-xs text-red-600 italic" v-if="parseErrors('category')">
                    {{ parseErrors('category', 'val') }}
                </small>
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
                <button @click="addData" :disabled="disabled" v-if="!edit_mode"
                        class="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-base px-8 py-2.5 text-center mr-3 md:mr-0">
                    <span v-if="!disabled">Save</span>
                    <span v-if="disabled">Loading..</span>
                </button>
                <button @click="updateData" :disabled="disabled" v-if="edit_mode"
                        class="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-base px-8 py-2.5 text-center mr-3 md:mr-0">
                    <span v-if="!disabled">Save changes</span>
                    <span v-if="disabled">Loading..</span>
                </button>
            </div>
        </div>

        <!--       List-->
        <div class="border-slate-200 border bg-white rounded mb-2" v-for="data in data_content">
            <div class="bg-slate-100 rounded-t py-3 px-4 flex justify-between">
                <div class="flex">
                    <unicon name="clock" width="15" height="15"></unicon>
                    <div class="text-xs ml-1">{{ $filters.formatDateTime(data.created_at) }}</div>
                </div>
                <div class="text-xs text-blue-500 font-semibold">
                    <span v-if="data.status === 0">On Review</span>
                    <span v-if="data.status === 1">Accepted</span>
                </div>
            </div>
            <div class="p-4">
                <div class="font-semibold text-blue-700 hover:text-blue-800">
                    {{ data.title }}
                </div>
                <div class="italic text-sm text-slate-500">
                    {{ data.subtitle }}
                </div>
                <div class="text-sm">
                    {{ data.body }}
                </div>
                <div class="flex justify-between">
                    <div>
                        <span v-if="data.category === 'research'"
                              class="px-2 py-1 font-semibold bg-green-200 rounded text-xs">{{ data.category }}</span>
                        <span v-if="data.category === 'case_report'"
                              class="px-2 py-1 font-semibold bg-blue-200 rounded text-xs">{{ data.category }}</span>
                    </div>
                    <div>
                        <button @click="deleteData(data)"
                                class="bg-red-700 mx-1 cursor-pointer hover:bg-red-800 items-center text-white px-4 py-1 text-sm rounded-lg">
                            Delete
                        </button>
                        <button @click="editData(data)"
                                class="bg-blue-700 mx-1 cursor-pointer hover:bg-blue-800 items-center text-white px-4 py-1 text-sm rounded-lg">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

export default {
    components: {
        PageLoading
    },
    data() {
        return {
            edit_mode: false,
            disabled: false,
            data_content: '',
            upload_loader: false,
            open_form: false,
            form: {
                id: '',
                user_id: '',
                title: '',
                subtitle: '',
                slug: '',
                image: '',
                category: '',
                file: '',
                body: '',
                status: '',
            },
            form_errors: []
        }
    },
    methods: {
        loadData() {
            this.authGet('pub/abstracts')
                .then((data) => {
                    this.data_content = data.result
                })
        },
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
        addNew() {
            this.edit_mode = false;
            this.open_form = true;
        },
        addData() {
            this.disabled = true
            this.authPost('pub/abstracts', this.form)
                .then((data) => {
                    if (data.status) {
                        this.form_errors = [];
                        this.toaster({title: data.message})

                        document.getElementById("file-upload").value = "";
                        this.form.file = "";

                        this.loadData()
                        this.open_form = false
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
        },
        editData(data) {
            document.getElementById("edit-add").scrollIntoView();

            this.form.id = data.id;
            this.form.title = data.title;
            this.form.subtitle = data.subtitle;
            this.form.category = data.category;
            this.form.file = data.file;
            this.form.body = data.body;

            this.open_form = true;
            this.edit_mode = true;
        },
        updateData() {
            this.disabled = true
            this.authPost('pub/abstracts/' + this.form.id, this.form)
                .then((data) => {
                    if (data.status) {
                        this.form_errors = [];
                        this.toaster({title: data.message})

                        document.getElementById("file-upload").value = "";
                        this.form.file = "";

                        this.loadData()
                        this.open_form = false
                    } else {
                        this.form_errors = data.errors
                    }
                    this.disabled = false
                }).catch((data) => {
                this.disabled = false
            })
        },
        deleteData(data) {
            if (confirm('Delete abstract ' + data.title + '?')) {
                this.authDelete('pub/abstracts/' + data.id)
                    .then((resp) => {
                        if (resp.status) {
                            this.toaster({title: resp.message})
                        }
                        this.loadData()
                    })
            }
        }
    },
    created() {
        this.loadData()
    },
    computed: {
        type: function () {
            let arr = this.form.file.split('/');
            let last = arr[arr.length - 1];
            let arr2 = last.split('.');
            let ext = arr2[arr2.length - 1];

            return {
                ext: ext,
                name: last,
            };
        }
    }
}
</script>
<style>
html {
    scroll-behavior: smooth;
}
</style>
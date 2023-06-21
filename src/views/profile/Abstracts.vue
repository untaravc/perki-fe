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
            <div>
                <label>Author(s)</label>
                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th class="px-4 py-2">Order</th>
                            <th class="px-4 py-2">Title</th>
                            <th class="px-4 py-2">First Name</th>
                            <th class="px-4 py-2">Surname</th>
                            <!--                            <th class="px-4 py-2">Email</th>-->
                            <!--                            <th class="px-4 py-2">Institution</th>-->
                            <th class="px-4 py-2">Type</th>
                            <th class="px-4 py-2">Action</th>
                        </tr>
                        </thead>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            v-for="(author, i) in form.authors">
                            <td class="px-4 py-2">{{ i + 1 }}</td>
                            <td class="px-4 py-2">{{ author.title }}</td>
                            <td class="px-4 py-2">{{ author.first_name }}</td>
                            <td class="px-4 py-2">{{ author.surname }}</td>
                            <!--                            <td  class="px-4 py-2">{{ author.email }}</td>-->
                            <!--                            <td  class="px-4 py-2">{{ author.institution }}</td>-->
                            <td class="px-4 py-2">{{ author.type }}</td>
                            <td class="px-4 py-2">
                                <span @click="editAuthorModal(author, i)"
                                      class="cursor-pointer underline font-bold text-blue-700 hover:text-blue-900 mr-1">edit</span>
                                <span @click="deleteAuthor(i)"
                                      class="cursor-pointer underline font-bold text-red-700 hover:text-red-900 mr-1">delete</span>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="6" class="text-center px-4 py-2">
                                <button @click="addAuthorModal">Add Author</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            <div class="mb-2">
                <label>Title</label>
                <textarea type="text" v-model="form.title"
                          class="block w-full rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
                <small class="text-xs text-red-600 italic" v-if="parseErrors('title')">
                    {{ parseErrors('title', 'val') }}
                </small>
            </div>
            <div class="mb-2">
                <label>Keyword(s) (separate by semicolon ';')</label>
                <input type="text" v-model="form.subtitle"
                       class="block w-full rounded-lg focus:ring-blue-500 focus:border-blue-500">
                <small class="text-xs text-red-600 italic" v-if="parseErrors('subtitle')">
                    {{ parseErrors('subtitle', 'val') }}
                </small>
            </div>
            <div class="mb-4">
                <label>Category</label>
                <select v-model="form.category"
                        class="block w-full rounded-lg focus:ring-blue-500 focus:border-blue-500">
                    <option value="research">Research</option>
                    <option value="case_report">Case Report</option>
                    <option value="systematic_review">Systematic Review</option>
                </select>
                <small class="text-xs text-red-600 italic" v-if="parseErrors('category')">
                    {{ parseErrors('category', 'val') }}
                </small>
            </div>
            <label>Abstract ({{ abstracts_count.body_total }}/300 words)</label>
            <div class="mb-2">
                <label class="text-sm" title="Provide 1 or 2 sentences that explain the context of the study.">
                    Background
                    <unicon name="info-circle" width="15px" height="15px" fill="grey"></unicon>
                </label>
                <textarea rows="3" v-model="form.body_background"
                          class="block w-full rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
                <small class="text-xs text-red-600 italic" v-if="parseErrors('body')">
                    {{ parseErrors('body', 'val') }}
                </small>
            </div>
            <div class="mb-2">
                <label class="text-sm"
                       title="State the precise objective, the specific hypothesis to be tested, or both.">
                    Aim
                    <unicon name="info-circle" width="15px" height="15px" fill="grey"></unicon>
                </label>
                <textarea rows="3" v-model="form.body_aim"
                          class="block w-full rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
                <small class="text-xs text-red-600 italic" v-if="parseErrors('body')">
                    {{ parseErrors('body', 'val') }}
                </small>
            </div>
            <div class="mb-2">
                <label class="text-sm"
                       title="Describe the study design, including the use of cells, animal models, or human subjects. Identify the control group. Identify specific methods and procedures. Describe interventions, if used.">
                    Method
                    <unicon name="info-circle" width="15px" height="15px" fill="grey"></unicon>
                </label>
                <textarea rows="3" v-model="form.body_method"
                          class="block w-full rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
                <small class="text-xs text-red-600 italic" v-if="parseErrors('body')">
                    {{ parseErrors('body', 'val') }}
                </small>
            </div>
            <div class="mb-2">
                <label class="text-sm"
                       title="Report the most important findings, including results of statistical analyses.">
                    Results
                    <unicon name="info-circle" width="15px" height="15px" fill="grey"></unicon>
                </label>
                <textarea rows="3" v-model="form.body_results"
                          class="block w-full rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
                <small class="text-xs text-red-600 italic" v-if="parseErrors('body')">
                    {{ parseErrors('body', 'val') }}
                </small>
            </div>
            <div class="mb-2">
                <label class="text-sm"
                       title="Report the most important findings, including results of statistical analyses.">
                    Conclusions
                    <unicon name="info-circle" width="15px" height="15px" fill="grey"></unicon>
                </label>
                <textarea rows="3" v-model="form.body_conclusions"
                          class="block w-full rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
                <small class="text-xs text-red-600 italic" v-if="parseErrors('body')">
                    {{ parseErrors('body', 'val') }}
                </small>
            </div>
            <div class="mb-2">
                <label>Additional Image/Graph (optional)</label>
                <div class="relative border border-slate-500 rounded-lg p-2">
                    <page-loading v-model:active="upload_loader" loader="bars" :is-full-page="false"/>
                    <div class="flex justify-between">
                        <input type="file" id="file-upload" accept="image/*" hidden
                               @change="uploadFile">
                        <a class="flex items-center block" target="_blank" :href="form.file">
                            <unicon name="image" fill="blue"></unicon>
                            <span class="text-sm ml-2">{{ $filters.truncate(form.file, 30) }}</span>
                        </a>
                        <label for="file-upload" class="cursor-pointer bg-blue-800 text-white py-1 px-3 rounded-lg">Select
                            Image</label>
                    </div>
                </div>
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
                    <span v-for="author in data.authors">{{ author.surname }}, {{ author.first_name }}; </span>
                </div>
                <div class="text-sm" v-if="data.body_parsed">
                    <p><b>Background:</b> {{ data.body_parsed.body_background }}</p>
                    <p><b>Aim:</b> {{ data.body_parsed.body_aim }}</p>
                    <p><b>Method:</b> {{ data.body_parsed.body_method }}</p>
                    <p><b>Results:</b> {{ data.body_parsed.body_results }}</p>
                    <p><b>Conclusions:</b> {{ data.body_parsed.body_conclusions }}</p>
                </div>
                <div class="italic text-sm" v-if="data.file">
                    Attachment: <a target="_blank" class="text-sm italic text-blue-700 hover:text-blue-900"
                                   :href="data.file">
                    {{ data.file }}
                </a>
                </div>
                <div class="italic text-sm text-slate-500">
                    {{ data.subtitle }}
                </div>
                <div class="flex justify-between">
                    <div>
                        <span v-if="data.category === 'research'"
                              class="px-2 py-1 font-semibold bg-green-200 rounded text-xs">{{
                                data.category
                            }}</span>
                        <span v-if="data.category === 'case_report'"
                              class="px-2 py-1 font-semibold bg-blue-200 rounded text-xs">{{
                                data.category
                            }}</span>
                        <span v-if="data.category === 'systematic_review'"
                              class="px-2 py-1 font-semibold bg-purple-200 rounded text-xs">{{
                                data.category
                            }}</span>
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

        <div id="authorModal" tabindex="-1" aria-hidden="true" data-modal-placement="top-center"
             class="fixed top-0 left-0 right-0 z-50 w-full p-4 hidden overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-2xl max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900">
                            Add Author
                        </h3>
                        <button type="button" @click="author_modal.hide()"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg p-1.5 ml-auto inline-flex items-center">
                            <unicon name="times"></unicon>
                        </button>
                    </div>
                    <div class="p-6 space-y-6">
                        <div class="grid gap-1 grid-cols-12">
                            <div class="col-span-2">
                                <label for="">Title</label>
                                <select v-model="author_form.title"
                                        class="block w-full rounded-lg focus:ring-blue-500 focus:border-blue-500">
                                    <option value="mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                </select>
                            </div>
                            <div class="col-span-5">
                                <label for="">First Name</label>
                                <input v-model="author_form.first_name" type="text"
                                       class="block w-full rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
                            </div>
                            <div class="col-span-5">
                                <label for="">Surname</label>
                                <input v-model="author_form.surname" type="text"
                                       class="block w-full rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
                            </div>
                        </div>
                        <div class="grid gap-1 grid-cols-2">
                            <div>
                                <label for="">Email</label>
                                <input v-model="author_form.email" type="text"
                                       class="block w-full rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
                            </div>
                            <div>
                                <label for="">Institution</label>
                                <input v-model="author_form.institution" type="text"
                                       class="block w-full rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
                            </div>
                        </div>
                        <div>
                            <label for="">Type</label>
                            <div class="flex mt-1">
                                <div class="flex items-center mr-2">
                                    <input id="presenter" type="radio" value="presenter" name="author_type"
                                           v-model="author_form.type"
                                           class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="presenter"
                                           class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Presenter</label>
                                </div>
                                <div class="flex items-center">
                                    <input checked id="corresponding" type="radio" value="corresponding"
                                           name="author_type" v-model="author_form.type"
                                           class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="corresponding"
                                           class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Corresponding</label>
                                </div>
                            </div>
                        </div>
                        <div class="text-right">
                            <button @click="pushAuthor" v-if="!author_edit_mode"
                                    class="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base px-6 py-1.5 text-center mr-3 md:mr-0">
                                Add Author
                            </button>
                            <button @click="author_modal.hide()" v-if="author_edit_mode"
                                    class="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base px-6 py-1.5 text-center mr-3 md:mr-0">
                                Update Author
                            </button>
                        </div>
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
            author_count: 1,
            author_edit_mode: false,
            edit_mode: false,
            author_edit_index: '',
            disabled: false,
            data_content: '',
            upload_loader: false,
            open_form: false,
            author_modal: '',
            abstracts_count: {
                body_background: 0,
                body_aim: 0,
                body_method: 0,
                body_results: 0,
                body_conclusions: 0,
                body_total: 0,
            },
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
                body_background: '',
                body_aim: '',
                body_method: '',
                body_results: '',
                body_conclusions: '',
                status: '',
                authors: [],
            },
            form_errors: [],
            author_form: {
                id: '',
                title: '',
                first_name: '',
                surname: '',
                institution: '',
                email: '',
                type: '',
            }
        }
    },
    methods: {
        loadData() {
            this.authGet('pub/abstracts')
                .then((data) => {
                    this.data_content = data.result
                })
        },
        addAuthorModal() {
            this.author_modal.show()
            this.author_edit_mode = false
            this.author_form = {
                id: '',
                title: '',
                first_name: '',
                surname: '',
                institution: '',
                email: '',
                type: '',
            }
        },
        editAuthorModal(author, index) {
            this.author_modal.show()
            this.author_form = author
            this.author_edit_mode = true
            this.author_edit_index = index
        },
        addColumn() {
            this.form.authors.push({
                post_id: '',
                status: '',
                name: '',
                email: '',
                type: '',
                institution: '',
                order: '',
            })
        },
        pushAuthor() {
            this.form.authors.push(this.author_form)
            this.author_modal.hide()
            this.author_form = {
                id: '',
                title: '',
                first_name: '',
                surname: '',
                institution: '',
                email: '',
                type: '',
            }
        },
        deleteAuthor(i) {
            if (confirm('Remove author?')) {
                let new_author = this.form.authors.filter(function (author, a) {
                    return a !== i;
                });

                this.form.authors = new_author
            }
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
            this.form = {
                id: '',
                user_id: '',
                title: '',
                subtitle: '',
                slug: '',
                image: '',
                category: '',
                file: '',
                body: '',
                body_background: '',
                body_aim: '',
                body_method: '',
                body_results: '',
                body_conclusions: '',
                status: '',
                authors: [],
            }
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
            this.form.authors = data.authors;

            this.form.body_background = data.body_parsed.body_background ?? null;
            this.form.body_aim = data.body_parsed.body_aim ?? null;
            this.form.body_method = data.body_parsed.body_method ?? null;
            this.form.body_results = data.body_parsed.body_results ?? null;
            this.form.body_conclusions = data.body_parsed.body_conclusions ?? null;

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
        },
        abstractTotal() {
            this.abstracts_count.body_total =
                parseInt(this.abstracts_count.body_background) +
                parseInt(this.abstracts_count.body_aim) +
                parseInt(this.abstracts_count.body_method) +
                parseInt(this.abstracts_count.body_results) +
                parseInt(this.abstracts_count.body_conclusions)
        }
    },
    created() {
        this.loadData()
    },
    mounted() {
        this.author_modal = new Modal(document.getElementById('authorModal'));
    },
    watch: {
        'form.body_background'(val) {
            if(val){
                this.abstracts_count.body_background = val.trim().split(/\s+/).length;
                this.abstractTotal()
            }
        },
        'form.body_aim'(val) {
            if(val) {
                this.abstracts_count.body_aim = val.trim().split(/\s+/).length;
                this.abstractTotal()
            }
        },
        'form.body_method'(val) {
            if(val) {
                this.abstracts_count.body_method = val.trim().split(/\s+/).length;
                this.abstractTotal()
            }
        },
        'form.body_results'(val) {
            if(val) {
                this.abstracts_count.body_results = val.trim().split(/\s+/).length;
                this.abstractTotal()
            }
        },
        'form.body_conclusions'(val) {
            if(val) {
                this.abstracts_count.body_conclusions = val.trim().split(/\s+/).length;
                this.abstractTotal()
            }
        },
    },
}
</script>
<style>
html {
    scroll-behavior: smooth;
}
</style>
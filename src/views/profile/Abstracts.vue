<template>
    <div>
        <div class="flex justify-between mb-4">
            <div class="text-2xl font-bold text-indigo-900 mb-3" id="edit-add">Abstracts</div>
            <div>
                <button @click="addNew" v-if="is_open"
                    class="text-white bg-gradient-to-r from-violet-600 to-teal-500 hover:shadow-lg hover:shadow-violet-200 font-medium rounded-full text-base px-8 py-2.5 text-center mr-3 md:mr-0 transition-shadow duration-200">
                    Add New
                </button>
                <button v-if="!is_open"
                    class="text-white bg-slate-300 font-medium rounded-full text-base px-8 py-2.5 text-center mr-3 md:mr-0">
                    Add New
                </button>
            </div>
        </div>
        <div class="bg-white rounded-3xl shadow-xl shadow-slate-200/70 ring-1 ring-slate-100 p-6 mb-4" v-if="open_form">
            <div class="mb-4">
                <b class="text-indigo-900" v-if="!edit_mode">Add New Abstract</b>
                <b class="text-indigo-900" v-if="edit_mode">Edit Abstract</b>
            </div>
            <div>
                <label class="text-sm font-medium text-slate-700">Author(s)</label>
                <div class="relative overflow-x-auto mt-1">
                    <table class="w-full text-sm text-left text-slate-600">
                        <thead class="text-xs text-slate-600 uppercase bg-slate-50">
                            <tr>
                                <th class="px-4 py-2 rounded-l-lg">Order</th>
                                <th class="px-4 py-2">Title</th>
                                <th class="px-4 py-2">First Name</th>
                                <th class="px-4 py-2">Surname</th>
                                <!--                            <th class="px-4 py-2">Email</th>-->
                                <!--                            <th class="px-4 py-2">Institution</th>-->
                                <th class="px-4 py-2">Type</th>
                                <th class="px-4 py-2 rounded-r-lg">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b border-slate-100"
                                v-for="(author, i) in form.authors">
                                <td class="px-4 py-2">{{ i + 1 }}</td>
                                <td class="px-4 py-2">{{ author.title }}</td>
                                <td class="px-4 py-2">{{ author.first_name }}</td>
                                <td class="px-4 py-2">{{ author.surname }}</td>
                                <!--                            <td  class="px-4 py-2">{{ author.email }}</td>-->
                                <!--                            <td  class="px-4 py-2">{{ author.institution }}</td>-->
                                <td class="px-4 py-2">
                                    <span v-if="author.is_presenter">presenter</span>
                                    <span v-if="author.is_corresponding"><br>corresponding</span>
                                </td>
                                <td class="px-4 py-2">
                                    <span @click="editAuthorModal(author, i)"
                                        class="cursor-pointer underline font-semibold text-violet-600 hover:text-violet-700 mr-2">edit</span>
                                    <span @click="deleteAuthor(i)"
                                        class="cursor-pointer underline font-semibold text-red-500 hover:text-red-600 mr-1">delete</span>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="6" class="text-center px-4 py-3">
                                    <button @click="addAuthorModal"
                                        class="font-semibold text-violet-600 hover:text-violet-700">Add Author</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="mb-2 mt-4">
                <label class="text-sm font-medium text-slate-700">Title</label>
                <textarea type="text" v-model="form.title"
                    class="block w-full mt-1 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-200 focus:border-violet-400 p-2.5 transition-colors"></textarea>
                <small class="text-xs text-red-500 italic" v-if="parseErrors('title')">
                    {{ parseErrors('title', 'val') }}
                </small>
            </div>
            <div class="mb-2">
                <label class="text-sm font-medium text-slate-700">Keyword(s) (separate by semicolon ';')</label>
                <input type="text" v-model="form.subtitle"
                    class="block w-full mt-1 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-200 focus:border-violet-400 p-2.5 transition-colors">
                <small class="text-xs text-red-500 italic" v-if="parseErrors('subtitle')">
                    {{ parseErrors('subtitle', 'val') }}
                </small>
            </div>
            <div class="mb-4">
                <label class="text-sm font-medium text-slate-700">Category</label>
                <select v-model="form.category" @change="updateBodySections"
                    class="block w-full mt-1 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-200 focus:border-violet-400 p-2.5 transition-colors">
                    <option value="research">Original Research</option>
                    <option value="case_report">Case Report / Case Series</option>
                    <option value="systematic_review">Systematic Review / Meta-analysis</option>
                </select>
                <small class="text-xs text-red-500 italic" v-if="parseErrors('category')">
                    {{ parseErrors('category', 'val') }}
                </small>
            </div>
            <div class="mb-4">
                <!--            <label>Abstract ({{ abstracts_count.body_total }}/300 words)</label>-->
                <label class="text-sm font-medium text-slate-700">Abstract</label>
                <div class="mb-2 mt-1" v-for="body_form in abstract_form">
                    <label class="text-sm text-slate-600" title="Provide 1 or 2 sentences that explain the context of the study.">
                        {{ body_form.title }}
                        <unicon name="info-circle" width="15px" height="15px" fill="#94a3b8"></unicon>
                    </label>
                    <textarea rows="5" v-model="body_form.content" @keyup="countWords"
                        class="block w-full mt-1 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-200 focus:border-violet-400 p-2.5 transition-colors"></textarea>
                </div>
                <div class="italic text-slate-400 text-sm font-semibold">
                    Word count: {{ word_count }}/350
                </div>
            </div>

            <div class="mb-2">
                <label class="text-sm font-medium text-slate-700">Additional Image/Graph (optional)</label>
                <div class="relative border border-dashed border-slate-300 rounded-xl p-2 mt-1">
                    <page-loading v-model:active="upload_loader" loader="bars" :is-full-page="false" />
                    <div class="flex justify-between items-center">
                        <input type="file" id="file-upload" accept="image/jpeg,image/png,image/webp,application/pdf" hidden @change="uploadFile">
                        <div v-if="isImageUrl(form.file)" class="cursor-pointer" @click="openAttachmentModal(form.file)">
                            <img :src="form.file" alt="Attachment thumbnail"
                                class="h-12 w-12 object-cover rounded-lg ring-1 ring-slate-200">
                        </div>
                        <a v-else-if="isPdfUrl(form.file)" class="flex items-center" target="_blank" :href="form.file">
                            <unicon name="file-alt" fill="#94a3b8"></unicon>
                            <span class="text-sm ml-2 text-slate-600">PDF attached</span>
                        </a>
                        <a v-else class="items-center block" target="_blank" :href="form.file">
                            <unicon name="image" fill="#94a3b8"></unicon>
                            <span class="text-sm ml-2 text-slate-600">{{ $filters.truncate(form.file, 30) }}</span>
                        </a>
                        <label for="file-upload"
                            class="cursor-pointer bg-violet-600 hover:bg-violet-700 text-white py-1.5 px-4 rounded-full text-sm transition-colors">Select
                            File</label>
                    </div>
                </div>
            </div>
            <div class="text-right">
                <button @click="addData" :disabled="disabled" v-if="!edit_mode"
                    class="text-white bg-gradient-to-r from-violet-600 to-teal-500 hover:shadow-lg hover:shadow-violet-200 font-medium rounded-full text-base px-8 py-2.5 text-center mr-3 md:mr-0 transition-shadow duration-200">
                    <span v-if="!disabled">Save</span>
                    <span v-if="disabled">Loading..</span>
                </button>
                <button @click="updateData" :disabled="disabled" v-if="edit_mode"
                    class="text-white bg-gradient-to-r from-violet-600 to-teal-500 hover:shadow-lg hover:shadow-violet-200 font-medium rounded-full text-base px-8 py-2.5 text-center mr-3 md:mr-0 transition-shadow duration-200">
                    <span v-if="!disabled">Save changes</span>
                    <span v-if="disabled">Loading..</span>
                </button>
            </div>
        </div>
        <div class="italic text-sm mt-4 text-center text-slate-400" v-if="data_content.length === 0">
            No Data
        </div>
        <div class="bg-white rounded-2xl shadow-sm shadow-slate-200/60 ring-1 ring-slate-100 mb-3 overflow-hidden" v-if="data_content.length > 0"
            v-for="data in data_content">
            <div class="bg-slate-50 py-3 px-4 flex justify-between">
                <div class="flex items-center text-slate-500">
                    <unicon name="clock" width="15" height="15" fill="currentColor"></unicon>
                    <div class="text-xs ml-1">{{ $filters.formatDateTime(data.created_at) }}</div>
                </div>
                <div class="text-xs font-semibold"
                    :class="data.status === 0 ? 'text-orange-500' : data.status === 1 ? 'text-emerald-600' : 'text-red-500'">
                    <span v-if="data.status === 0">On Review</span>
                    <span v-if="data.status === 1">Accepted</span>
                    <span v-if="data.status === 2">Rejected</span>
                </div>
            </div>
            <div class="p-4">
                <div class="font-semibold text-violet-600 hover:text-violet-700">
                    {{ data.title }}
                </div>
                <div class="italic text-sm text-slate-500">
                    <span v-for="author in data.authors">{{ author.surname }}, {{ author.first_name }}; </span>
                </div>
                <div class="text-sm text-slate-600" v-if="data.body_parsed">
                    <p v-for="item in data.body_parsed"><b>{{ item.title }}:</b>{{ item.content }}</p>
                </div>
                <div class="text-sm mt-2" v-if="data.file">
                    <div class="text-slate-500 mb-1">Attachment</div>
                    <div v-if="isImageUrl(data.file)" class="inline-block cursor-pointer group"
                        @click="openAttachmentModal(data.file)">
                        <img :src="data.file" alt="Attachment thumbnail"
                            class="h-20 w-20 object-cover rounded-lg ring-1 ring-slate-200 group-hover:ring-violet-300 transition-shadow">
                    </div>
                    <a v-else-if="isPdfUrl(data.file)" target="_blank" :href="data.file"
                        class="inline-flex items-center gap-2 text-sm text-violet-600 hover:text-violet-700 bg-slate-50 rounded-lg px-3 py-2 transition-colors">
                        <unicon name="file-alt" fill="currentColor" width="18"></unicon>
                        View PDF Attachment
                    </a>
                    <a v-else target="_blank" class="text-sm italic text-violet-600 hover:text-violet-700"
                        :href="data.file">
                        {{ data.file }}
                    </a>
                </div>
                <div class="italic text-sm text-slate-500">
                    {{ data.subtitle }}
                </div>
                <div class="flex justify-between items-center mt-2">
                    <div>
                        <span v-if="data.category === 'research'"
                            class="px-2 py-1 font-semibold bg-emerald-100 text-emerald-700 rounded-full text-xs">Original Research</span>
                        <span v-if="data.category === 'case_report'"
                            class="px-2 py-1 font-semibold bg-sky-100 text-sky-700 rounded-full text-xs">Case Report / Case Series</span>
                        <span v-if="data.category === 'systematic_review'"
                            class="px-2 py-1 font-semibold bg-fuchsia-100 text-fuchsia-700 rounded-full text-xs">Systematic Review / Meta-analysis</span>
                        <span v-if="data.category === 'meta_analysis'"
                            class="px-2 py-1 font-semibold bg-teal-100 text-teal-700 rounded-full text-xs">Systematic Review / Meta-analysis</span>
                    </div>
                    <div>
                        <button @click="deleteData(data)" v-if="is_open"
                            class="bg-red-500 mx-1 cursor-pointer hover:bg-red-600 items-center text-white px-4 py-1.5 text-sm rounded-full transition-colors">
                            Delete
                        </button>
                        <button @click="editData(data)" v-if="is_open"
                            class="bg-violet-600 mx-1 cursor-pointer hover:bg-violet-700 items-center text-white px-4 py-1.5 text-sm rounded-full transition-colors">
                            Edit
                        </button>
                    </div>
                </div>
                <div class="text-center rounded-lg my-2 relative">
                    <label :for="'poster_upload' + data.id">
                        <div
                            class="bg-slate-50 border border-dashed border-slate-300 hover:border-violet-300 p-3 w-full cursor-pointer rounded-xl flex justify-center items-center relative transition-colors">
                            <page-loading v-model:active="upload_loader" loader="dots" :is-full-page="false" />
                            <div v-if="!upload_loader">
                                <unicon name="file" fill="#94a3b8"></unicon>
                                <div class="text-sm italic text-slate-500" v-if="!show_poster">Add poster</div>
                                <div class="text-sm italic text-slate-500" v-if="show_poster">Update poster</div>
                            </div>
                        </div>
                    </label>
                    <input type="file" accept="image/*" hidden :id="'poster_upload' + data.id"
                        @change="uploadPoster(data.id)">
                </div>
                <div v-if="data.image" class="flex justify-center bg-slate-50 rounded-xl p-2">
                    <div class="relative">
                        <a :href="data.image" target="_blank">
                            <img :src="data.image" alt="" class="max-h-52 rounded-lg">
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div id="authorModal" tabindex="-1" aria-hidden="true" data-modal-placement="top-center"
            class="fixed top-0 left-0 right-0 z-50 w-full p-4 hidden overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-2xl max-h-full">
                <div class="relative bg-white rounded-2xl shadow-xl">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-4 border-b border-slate-100 rounded-t-2xl">
                        <h3 class="text-xl font-semibold text-indigo-900">
                            Add Author
                        </h3>
                        <button type="button" @click="author_modal.hide()"
                            class="text-slate-400 bg-transparent hover:bg-slate-100 rounded-lg p-1.5 ml-auto inline-flex items-center transition-colors">
                            <unicon name="times"></unicon>
                        </button>
                    </div>
                    <div class="p-6 space-y-6">
                        <div class="grid gap-1 grid-cols-12">
                            <div class="col-span-2">
                                <label for="" class="text-sm font-medium text-slate-700">Title</label>
                                <select v-model="author_form.title"
                                    class="block w-full mt-1 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-200 focus:border-violet-400 p-2 transition-colors">
                                    <option value="mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                </select>
                            </div>
                            <div class="col-span-5">
                                <label for="" class="text-sm font-medium text-slate-700">First Name</label>
                                <input v-model="author_form.first_name" type="text"
                                    class="block w-full mt-1 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-200 focus:border-violet-400 p-2 transition-colors" />
                            </div>
                            <div class="col-span-5">
                                <label for="" class="text-sm font-medium text-slate-700">Surname</label>
                                <input v-model="author_form.surname" type="text"
                                    class="block w-full mt-1 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-200 focus:border-violet-400 p-2 transition-colors" />
                            </div>
                        </div>
                        <div class="grid gap-1 grid-cols-2">
                            <div>
                                <label for="" class="text-sm font-medium text-slate-700">Email</label>
                                <input v-model="author_form.email" type="text"
                                    class="block w-full mt-1 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-200 focus:border-violet-400 p-2 transition-colors" />
                            </div>
                            <div>
                                <label for="" class="text-sm font-medium text-slate-700">Institution</label>
                                <input v-model="author_form.institution" type="text"
                                    class="block w-full mt-1 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-200 focus:border-violet-400 p-2 transition-colors" />
                            </div>
                        </div>
                        <div>
                            <label for="" class="text-sm font-medium text-slate-700">Type</label>
                            <div class="flex mt-2">
                                <div class="flex items-center mr-4">
                                    <input id="presenter" type="checkbox" :value="1" name="author_type"
                                        v-model="author_form.is_presenter"
                                        class="w-4 h-4 text-violet-600 bg-slate-100 border-slate-300 rounded focus:ring-2 focus:ring-violet-400">
                                    <label for="presenter"
                                        class="ml-2 text-sm font-medium text-slate-700">Presenter</label>
                                </div>
                                <div class="flex items-center">
                                    <input checked id="corresponding" type="checkbox" :value="1" name="author_type"
                                        v-model="author_form.is_corresponding"
                                        class="w-4 h-4 text-violet-600 bg-slate-100 border-slate-300 rounded focus:ring-2 focus:ring-violet-400">
                                    <label for="corresponding"
                                        class="ml-2 text-sm font-medium text-slate-700">Corresponding</label>
                                </div>
                            </div>
                        </div>
                        <div class="text-right">
                            <button @click="pushAuthor" v-if="!author_edit_mode"
                                class="text-white bg-gradient-to-r from-violet-600 to-teal-500 hover:shadow-lg hover:shadow-violet-200 rounded-full text-base px-6 py-1.5 text-center mr-3 md:mr-0 transition-shadow duration-200">
                                Add Author
                            </button>
                            <button @click="author_modal.hide()" v-if="author_edit_mode"
                                class="text-white bg-gradient-to-r from-violet-600 to-teal-500 hover:shadow-lg hover:shadow-violet-200 rounded-full text-base px-6 py-1.5 text-center mr-3 md:mr-0 transition-shadow duration-200">
                                Update Author
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="attachmentImageModal" tabindex="-1" aria-hidden="true" data-modal-placement="center"
            class="fixed top-0 left-0 right-0 z-50 w-full p-4 hidden overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-3xl max-h-full mx-auto">
                <div class="relative bg-white rounded-2xl shadow-xl p-3">
                    <button type="button" @click="attachment_modal.hide()"
                        class="absolute -top-3 -right-3 bg-white text-slate-500 hover:bg-slate-100 rounded-full p-2 shadow-md transition-colors">
                        <unicon name="times"></unicon>
                    </button>
                    <img :src="modal_image_src" alt="Attachment preview" class="w-full max-h-[80vh] object-contain rounded-lg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { upload, generateFileName } from '../../firebase_upload';
export default {
    components: {
        PageLoading
    },
    data() {
        return {
            author_count: 1,
            word_count: 0,
            author_edit_mode: false,
            edit_mode: false,
            author_edit_index: '',
            disabled: false,
            data_content: '',
            is_open: false,
            upload_loader: false,
            open_form: false,
            show_poster: false,
            author_modal: '',
            attachment_modal: '',
            modal_image_src: '',
            abstract_form: [],
            abstract_form_list: {
                research: [
                    { field: "background", title: "BACKGROUND" },
                    { field: "objective", title: "OBJECTIVE" },
                    { field: "methods", title: "METHODS" },
                    { field: "result", title: "RESULTS" },
                    { field: "conclusion", title: "CONCLUSION" },
                ],
                case_report: [
                    { field: "background", title: "BACKGROUND" },
                    { field: "case_presentation", title: "CASE PRESENTATION" },
                    { field: "discussion", title: "DISCUSSION" },
                    { field: "conclusion", title: "CONCLUSION" },
                ],
                systematic_review: [
                    { field: "background", title: "BACKGROUND" },
                    { field: "objective", title: "OBJECTIVE" },
                    { field: "methods", title: "METHODS" },
                    { field: "result", title: "RESULTS" },
                    { field: "conclusion", title: "CONCLUSION" },
                ],
            },
            form: {
                id: '',
                user_id: '',
                title: '',
                subtitle: '',
                slug: '',
                image: '',
                category: 'case_report',
                file: '',
                body: {},
                status: '',
                section: 'jcu26',
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
                is_presenter: '',
                is_corresponding: '',
            }
        }
    },
    methods: {
        loadData() {
            this.authGet('pub/abstracts', { section: 'jcu26' })
                .then((data) => {
                    this.data_content = data.result
                })
        },
        isImageUrl(url) {
            return !!url && /\.(jpe?g|png|gif|webp|bmp)(\?|$)/i.test(url)
        },
        isPdfUrl(url) {
            return !!url && /\.pdf(\?|$)/i.test(url)
        },
        openAttachmentModal(url) {
            this.modal_image_src = url
            this.attachment_modal.show()
        },
        countWords() {
            let count = 0;
            for (let i = 0; i < this.abstract_form.length; i++) {

                let word = this.abstract_form[i]['content'];
                if (word) {
                    let ln = word.trim().split(/\s+/).length
                    count += ln
                }

            }

            this.word_count = count
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
                is_presenter: '',
                is_corresponding: '',
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
                is_presenter: '',
                is_corresponding: '',
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
        async uploadFile() {
            this.upload_loader = true;
            let file = document.getElementById("file-upload").files[0];
            if (file) {
                try {
                    const file_name = generateFileName('Abstracts', file)
                    this.form.file = await upload(file_name, file)
                } finally {
                    this.upload_loader = false;
                }
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
                status: '',
                authors: [],
            }
        },
        addData() {
            // this.disabled = true
            if (this.form.authors.length === 0) {
                alert("Please add at least one author.")
                return;
            }
            if (this.word_count > 350) {
                alert("Abstract to long.")
                return;
            }
            this.disabled = true
            this.form.body = this.abstract_form
            this.authPost('pub/abstracts', this.form)
                .then((data) => {
                    if (data.success) {
                        this.form_errors = [];
                        this.toaster({ title: data.message })

                        document.getElementById("file-upload").value = "";
                        this.form.file = "";

                        this.loadData()
                        this.open_form = false
                        this.emitter.emit("update-sidebar-counter");
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
            this.abstract_form = data.body_parsed;
            this.form.authors = data.authors;

            this.open_form = true;
            this.edit_mode = true;
        },
        updateData() {
            if (this.form.authors.length === 0) {
                alert("Please add at least one author.")
                return;
            }
            if (this.word_count > 350) {
                alert("Abstract to long.")
                return;
            }
            this.disabled = true
            this.form.body = this.abstract_form
            this.authPost('pub/abstracts/' + this.form.id, this.form)
                .then((data) => {
                    if (data.success) {
                        this.form_errors = [];
                        this.toaster({ title: data.message })

                        document.getElementById("file-upload").value = "";
                        this.form.file = "";

                        this.loadData()
                        this.open_form = false
                        this.emitter.emit("update-sidebar-counter");
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
                        if (resp.success) {
                            this.toaster({ title: resp.message })
                        }
                        this.loadData()
                        this.emitter.emit("update-sidebar-counter");
                    })
            }
        },
        updateBodySections() {
            let list = this.abstract_form_list[this.form.category]
            if (list) {
                this.abstract_form = list
            }
        },
        updatePoster(id, image) {
            this.authPost('pub/abstracts-poster/' + id, {
                image: image
            }).then((data) => {
                this.loadData()
            })
        },
        async uploadPoster(post_id) {
            let file = document.getElementById("poster_upload" + post_id).files[0];
            if (file) {
                this.upload_loader = true;
                try {
                    const file_name = generateFileName('Posters', file)
                    const link = await upload(file_name, file)
                    this.updatePoster(post_id, link)
                    this.show_poster = true
                } finally {
                    this.upload_loader = false;
                }
            }
        },
        checkOpenSubmit() {
            this.authGet('pub/abstracts-submit')
                .then((data) => {
                    this.is_open = data.result.open
                })
        }
    },
    created() {
        this.loadData()
        this.checkOpenSubmit()
    },
    mounted() {
        this.author_modal = new Modal(document.getElementById('authorModal'));
        this.attachment_modal = new Modal(document.getElementById('attachmentImageModal'));
    },
}
</script>
<style>
html {
    scroll-behavior: smooth;
}
</style>

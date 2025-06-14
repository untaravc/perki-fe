<template>
  <div class="max-w-screen-lg m-auto pt-28 pb-12 px-2" style="min-height: calc(100vh - 130px)">
    <div class="text-2xl font-bold mb-8">
      Register ECG Smart Championship
    </div>
    <div class="grid gap-2 sm:grid-cols-2 mt-3 border-b p-4 bg-red-100 rounded-lg">
      <div class="col-span-2 font-bold">Team Identity</div>
      <div>
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Team Name
          <span class="text-red-600">*</span></label>
        <input type="text" id="name" v-model="form.name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-900 focus:border-red-500 block w-full p-2.5">
        <small class="text-xs text-red-600 italic" v-if="parseErrors('name')">
          {{ parseErrors('name', 'val') }}
        </small>
      </div>
      <div>
        <label for="address" class="block mb-2 text-sm font-medium text-gray-900">Address <span
            class="text-red-600">*</span></label>
        <input type="text" id="address" v-model="form.address"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-900 focus:border-red-500 block w-full p-2.5">
        <small class="text-xs text-red-600 italic" v-if="parseErrors('address')">
          {{ parseErrors('address', 'val') }}
        </small>
      </div>
      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email <span
            class="text-red-600">*</span></label>
        <input type="text" id="email" v-model="form.email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-900 focus:border-red-500 block w-full p-2.5">
        <small class="text-xs text-red-600 italic" v-if="parseErrors('email')">
          {{ parseErrors('email', 'val') }}
        </small>
      </div>
      <div>
        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Phone <span
            class="text-red-600">*</span></label>
        <input type="text" id="phone" v-model="form.phone"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-900 focus:border-red-500 block w-full p-2.5">
        <small class="text-xs text-red-600 italic" v-if="parseErrors('phone')">
          {{ parseErrors('phone', 'val') }}
        </small>
      </div>
    </div>

    <div class="grid gap-2 sm:grid-cols-2 mt-4 border-b p-4 bg-red-50 rounded-lg">
      <div class="col-span-2 font-bold">Leader</div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900">Name
          <span class="text-red-600">*</span></label>
        <input type="text" v-model="form.members[0].user_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-900 focus:border-red-500 block w-full p-2.5">
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900">Institution<span
            class="text-red-600">*</span></label>
        <input type="text" v-model="form.members[0].institution"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-900 focus:border-red-500 block w-full p-2.5">
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900">Document<span class="text-red-600">*</span></label>
        <input type="file" accept="application/pdf,image/*" id="member_0" ref="member_0" @change="upload('member_0')">
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900">Uploaded Document<span
            class="text-red-600">*</span></label>
        <div class="flex">
          <span v-if="form.members[0].uploading">uploading...</span>
          <a :href="form.members[0].document_link" target="_blank" v-if="form.members[0].document_link"
            class="flex items-center bg-red-200 hover:bg-red-300 pr-4 p-2 rounded text-sm">
            <unicon name="paperclip" height="15px" /> Document
          </a>
        </div>
      </div>
    </div>

    <div class="grid gap-2 sm:grid-cols-2 mt-4 border-b p-4 bg-red-50 rounded-lg">
      <div class="col-span-2 font-bold">Member 1</div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900">Name
          <span class="text-red-600">*</span></label>
        <input type="text" v-model="form.members[1].user_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-900 focus:border-red-500 block w-full p-2.5">
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900">Institution<span
            class="text-red-600">*</span></label>
        <input type="text" v-model="form.members[1].institution"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-900 focus:border-red-500 block w-full p-2.5">
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900">Document<span class="text-red-600">*</span></label>
        <input type="file" accept="application/pdf,image/*" id="member_1" ref="member_1" @change="upload('member_1')">
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900">Uploaded Document<span
            class="text-red-600">*</span></label>
        <div class="flex">
          <span v-if="form.members[1].uploading">uploading...</span>
          <a :href="form.members[1].document_link" target="_blank" v-if="form.members[1].document_link"
            class="flex items-center bg-red-200 hover:bg-red-300 pr-4 p-2 rounded text-sm">
            <unicon name="paperclip" height="15px" /> Document
          </a>
        </div>
      </div>
    </div>

    <div class="grid gap-2 sm:grid-cols-2 mt-4 border-b  p-4 bg-red-50 rounded-lg">
      <div class="col-span-2 font-bold">Member 2</div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900">Name
          <span class="text-red-600">*</span></label>
        <input type="text" v-model="form.members[2].user_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-900 focus:border-red-500 block w-full p-2.5">
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900">Institution<span
            class="text-red-600">*</span></label>
        <input type="text" v-model="form.members[2].institution"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-900 focus:border-red-500 block w-full p-2.5">
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900">Document<span class="text-red-600">*</span></label>
        <input type="file" accept="application/pdf,image/*" id="member_2" ref="member_2" @change="upload('member_2')">
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900">Uploaded Document<span
            class="text-red-600">*</span></label>
        <div class="flex">
          <span v-if="form.members[2].uploading">uploading...</span>
          <a :href="form.members[2].document_link" target="_blank" v-if="form.members[2].document_link"
            class="flex items-center bg-red-200 hover:bg-red-300 pr-4 p-2 rounded text-sm">
            <unicon name="paperclip" height="15px" /> Document
          </a>
        </div>
      </div>
    </div>
    <div class="pt-4">
      <button @click="submit" v-if="!edit_mode" :disabled="disabled"
        class="bg-red-700 cursor-pointer hover:bg-red-800 items-center text-white px-4 py-2 w-full text-sm rounded-lg">
        <BtnLoader v-if="disabled"></BtnLoader>
        <span v-if="!disabled">Submit</span>
      </button>
      <button @click="update" v-if="edit_mode" :disabled="disabled"
        class="bg-red-700 cursor-pointer hover:bg-red-800 items-center text-white px-4 py-2 w-full text-sm rounded-lg">
        <BtnLoader v-if="disabled"></BtnLoader>
        <span v-if="!disabled">Update</span>
      </button>
    </div>
  </div>
</template>

<script>
import { upload, generateFileName } from '../../firebase_upload';
export default {
  data() {
    return {
      disabled: false,
      edit_mode: false,
      referral_code: false,
      data_raw: {
        job_types: []
      },
      logged_in: false,
      data_valid: false,
      form: {
        id: '',
        section: 'jcu25',
        category: 'ecg-championship',
        user_id: '',
        name: '',
        institution: '',
        address: '',
        email: '',
        phone: '',
        status: 1,
        members: [
          {
            id: '',
            user_name: '',
            institution: '',
            flag: 'leader',
            document_link: 'asd',
          },
          {
            id: '',
            user_name: '',
            institution: '',
            flag: 'member',
            document_link: 'asd',
          },
          {
            id: '',
            user_name: '',
            institution: '',
            flag: 'member',
            document_link: '',
          },
        ],
      },
      form_errors: []
    }
  },
  methods: {
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

    async upload(ref_name) {
      const input = this.$refs[ref_name];
      const index = ref_name.split('_')[1]

      if (input && input.files.length > 0) {
        this.form.members[index].uploading = true
        this.form.members[index].document_link = ''
        this.upload_loader_gl = true
        const file_name = generateFileName('RegisterEcgDocument', input.files[0])
        this.form.members[index].document_link = await upload(file_name, input.files[0])
        this.form.members[index].uploading = false
      }
    },

    submit() {
      this.disabled = true
      this.authPost('pub/groups', this.form).then((data) => {
        if (data.success) {
          this.$router.push('/profile/ecg')
        } else {
          this.form_errors = data.errors
          alert(data.message)
        }
        this.disabled = false
      }).catch(() => {
        this.disabled = false
      })
    },
    update() {
      this.disabled = true
      this.authPatch('pub/groups/' + this.form.id, this.form).then((data) => {
        if (data.success) {
          this.$router.push('/profile/ecg')
        } else {
          this.form_errors = data.errors
          alert(data.message)
        }
        this.disabled = false
      }).catch(() => {
        this.disabled = false
      })
    },
    loadData(id) {
      this.edit_mode = true
      this.authGet('pub/groups/' + id).then((data) => {
        this.form = data.result
      })
    },
    findData() {
      this.authGet('pub/groups-ekg').then((data) => {
        if (data.success) {
          this.edit_mode = true
          this.form = data.result
        }
      })
    }
  },
  created() {
    const id = this.$route.query.id

    if (id) {
      this.loadData(id)
    } else {
      this.findData()
    }
  }
}
</script>
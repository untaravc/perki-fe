<template>
  <div class="max-w-screen-lg m-auto pt-28 pb-12 px-2" style="min-height: calc(100vh - 130px)">
    <div class="text-4xl font-bold mb-8 text-center">
      ECG Smart Championship
    </div>
    <div v-if="!state.has_token" class="mb-8 text-center">
      <router-link to="/register?url=/ecg-championship-register"
        class="text-white bg-background-merah hover:bg-red-800 focus:ring-4 font-normal md:font-medium rounded-full text-sm md:text-base px-4 md:px-8 py-1 md:py-2.5 text-center mr-3">
        Create Account to Register
      </router-link>
    </div>
    <div v-if="state.has_token" class="mb-8 text-center">
      <router-link to="/ecg-championship-register"
        class="text-white bg-background-merah hover:bg-red-800 focus:ring-4 font-normal md:font-medium rounded-full text-sm md:text-base px-4 md:px-8 py-1 md:py-2.5 text-center mr-3">
        Register Your Team
      </router-link>
    </div>
    <div class="mb-8">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unt-dev.firebasestorage.app/o/Perki%2FJCU25%2Fecg-info.jpeg?alt=media&token=d7ab9f8c-15c6-485d-8686-e2be1d1c4622"
        alt="">
    </div>
    <div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unt-dev.firebasestorage.app/o/Perki%2FJCU25%2Fecg-timeline.jpeg?alt=media&token=d1a5728c-cbed-418a-8793-7c4127f72f89"
        alt="">
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'EcgInfo',
  setup() {
    const state = reactive({
      has_token: localStorage.getItem('perki_user_token') ? true : false,
    });

    return {
      state,
    };
  }
}
</script>
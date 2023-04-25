import {createApp} from 'vue'
import {createPinia} from 'pinia'
import filter from './filter'
import mixin from './stores/mixin'
import Axios from 'axios'
import vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'flowbite';

import Unicon from 'vue-unicons'

import icons from './icons'
import BtnLoader from './components/ButtonLoader.vue'
import Loading from 'vue-loading-overlay';

Unicon.add(icons)

const app = createApp(App)

app.component('BtnLoader', BtnLoader)
app.component('page-loader', Loading)

app.use(Unicon)
	.use(createPinia())
	.use(vue3GoogleLogin, {
		clientId: '915570477762-nstlaod9tq5fbfsunchui21ulg9ogph0.apps.googleusercontent.com'
	})
	.use(router)
	.mixin(mixin)

app.config.globalProperties.$filters = filter
app.config.globalProperties.$axios = Axios;

app.mount('#app')

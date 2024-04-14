import { createApp } from 'vue'
import { createPinia } from 'pinia'
import mixin from './stores/mixin'
import vue3GoogleLogin from 'vue3-google-login'
import registerIcon from "./oh_icon";

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'flowbite';

import Unicon from 'vue-unicons'

import icons from './icons'
import BtnLoader from './components/ButtonLoader.vue'

Unicon.add(icons)

const app = createApp(App)

app.component('BtnLoader', BtnLoader)
registerIcon(app)

app.use(Unicon)
	.use(createPinia())
	.use(vue3GoogleLogin, {
		clientId: '915570477762-nstlaod9tq5fbfsunchui21ulg9ogph0.apps.googleusercontent.com'
	})
	.use(router)
	.mixin(mixin)

// filter
import filter from './filter'
app.config.globalProperties.$filters = filter

import Axios from 'axios'
app.config.globalProperties.$axios = Axios;

// event bus
import mitt from 'mitt';
const emitter = mitt();
app.config.globalProperties.emitter = emitter;

app.mount('#app')

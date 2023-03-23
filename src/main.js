import { createApp } from 'vue'
import { createPinia } from 'pinia'
import filter from './filter'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'flowbite';

import Unicon from 'vue-unicons'

import icons from './icons'
Unicon.add(icons)

const app = createApp(App)

app.use(Unicon)
app.use(createPinia())
app.use(router)

app.config.globalProperties.$filters = filter

app.mount('#app')

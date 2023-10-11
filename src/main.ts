import { createApp } from 'vue'
import App from '@/App.vue'
import VueCookies from "vue3-cookies";

import "@/views/styles/style.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";



import router from '@/plugins/router'

import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App)

app
  .use(router)
  .use(pinia)
  .use(VueCookies)

app.mount('#app')

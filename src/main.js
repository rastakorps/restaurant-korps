import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from "vuetify/lib/iconsets/mdi"
import "@mdi/font/css/materialdesignicons.css"

window.axios = axios
window.axios.defaults.baseURL = 'http://localhost/restaurant_api/public'
window.axios.defaults.headers.common['Accept'] = 'application/json'
window.axios.defaults.headers.common['Content-Type'] = 'application/json'
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHTTRequest'
window.axios.defaults.WithCredentials = true

const pinia = createPinia()
pinia.use(({store}) => {
  store.router = markRaw(router)
})
pinia.use(createPersistedState)

const vuetify = createVuetify({
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi
      },
    },
    components,
    directives
})

createApp(App)
    .use(router)
    .use(pinia)
    .use(vuetify)
    .mount('#app')

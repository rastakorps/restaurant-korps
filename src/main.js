import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from "vuetify/lib/iconsets/mdi"
import "@mdi/font/css/materialdesignicons.css";

const pinia = createPinia()
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

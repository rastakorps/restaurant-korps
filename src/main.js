import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';

import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import Sidebar from 'primevue/sidebar'
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'

const pinia = createPinia()

createApp(App)
    .use(pinia)
    .directive('ripple', Ripple)
    .directive('styleclass', StyleClass)
    .use(PrimeVue, { ripple: true })
    .component('Button', Button)
    .component('Sidebar', Sidebar)
    .component('Avatar', Avatar)
    .mount('#app')

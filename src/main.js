import { createApp } from 'vue'
import { router } from './router'
import './sass/general.scss'
import App from './App.vue'

createApp(App).use(router).mount('#app')

/* import { router } from './router';
createApp(App).use(router).mount('#app'); */
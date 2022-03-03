import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'	//关于px转rem的适配包

createApp(App).use(store).use(router).mount('#app')

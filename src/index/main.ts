import '../commons/global.scss'
import { createApp } from 'vue'
import router from "./router/index"
import App from './AppIndex.vue'
import req from '../commons/req'

const app = createApp(App)
app.use(router)
app.config.globalProperties.$req = req
app.mount('#app')

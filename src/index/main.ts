import '../commons/global.scss'
import { createApp } from 'vue'
import router from "./router/index"
import App from './AppIndex.vue'
import req from '../commons/req'
import tipTop from '../plugins/tipTop'

const app = createApp(App)
app.use(tipTop)
app.use(router)
app.use(req)
app.mount('#app')

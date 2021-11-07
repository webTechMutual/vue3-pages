import { createApp } from 'vue'
import App from './PopApp.vue'
import tipTop from '../plugins/tipTop'

const app = createApp(App)
app.use(tipTop)
app.mount('#app')
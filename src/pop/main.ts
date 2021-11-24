import { createApp } from 'vue'
import testPlugin from './testPlugin'
import App from './PopApp.vue'

const app = createApp(App)
app.use(testPlugin)
app.mount('#app')

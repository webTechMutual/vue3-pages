import {createApp} from 'vue'

import TipTop from './TipPop.vue'

console.log('tip tip vue')
export default {
  install: () => {
    const tipTopContainer = document.createElement('div')
    tipTopContainer.id = 'tipTopContainer'
    const tipTopApp = createApp(TipTop)
    tipTopApp.mount(tipTopContainer)
    console.log('tip top works')
    document.body.appendChild(tipTopContainer)
  }
}
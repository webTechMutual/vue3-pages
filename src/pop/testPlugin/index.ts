import { h, render } from 'vue'
import Test from './Test.vue'

export default {
  install (app : any, options : any) {
    app.config.globalProperties.$test = (str: string) => {
      console.log('test:', str)
      const container = document.createElement('div')
      const vm = h(
        Test
      )

      render(vm, container)
      document.body.appendChild(container)
    }
  }
}

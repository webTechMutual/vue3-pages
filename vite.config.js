import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginImp from 'vite-plugin-imp'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  publicDir: '../public',
  server: {
    port: 80
  },
  plugins: [
    vue(),
    vitePluginImp({
      libList: [{
        libName: 'vant',
        style(name) {
          if (/CompWithoutStyleFile/i.test(name)) {
            // This will not import any style file 
            return false
          }
          return `vant/es/${name}/style/index.js`
        }
      }]
    })
  ],
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        list: resolve(__dirname, 'src/list.html'),
        pop: resolve(__dirname, 'src/pop.html'),
        chart: resolve(__dirname, 'src/chart.html')
      }
    }
  }
})

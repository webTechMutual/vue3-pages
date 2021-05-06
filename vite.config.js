import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginImp from 'vite-plugin-imp'
import px2vw from 'rollup-plugin-px2vw'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
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
    }),
    px2vw({
      include: /\.css$|\.s[ac]ss$|\.vue$/,
      exclude: /node_modules/
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        page1: resolve(__dirname, 'page1/index.html')
      }
    }
  }
})

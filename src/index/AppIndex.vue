<template>
  <div class="app-wrapper">
    <h1>Vue3 多页面开发{{name}}</h1>
    <router-view v-slot="{ Component }">
    <keep-alive include="usage">
      <component class="view" :is="Component" />
    </keep-alive>
  </router-view>
  </div>
</template>

<script lang="ts">
import { 
  defineComponent,
  ref
} from 'vue'
import CircularProgressVue from './components/CircularProgress.vue'
export default defineComponent({
  setup () {
    const name = ref('kol')
    return {
      name,
      load () {
        console.log('load')
      },
      test () {
        console.log('test')
      }
    }
  },

  data () {
    return {}
  },

  methods: {
    async loadTab () {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true)
        }, 1000)
      })
    }
  },

  created () {
    this.loadTab()
    this.test()
  },

  components: {
    CircularProgressVue
  }
})
</script>

<style lang="scss">
.app-wrapper {
  .test-demo {
    line-height: 36px;
    background-color: #336699;
  }
}
</style>
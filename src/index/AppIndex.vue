<template>
  <div class="app-wrapper">
    <div class="page-nav">多页vue3项目演示</div>
    <van-list>
      <van-cell title="列表页" is-link url="/list.html"/>
    </van-list>

    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000" fixed></van-tabbar>
    
    <div class="test-demo">111</div>
    <div style="height: 36px; font-size: 15px;">行内样式</div>

    <CircularProgerss/>
  </div>
</template>

<script lang="ts">
import {NavBar, List, Cell, Tabbar, TabbarItem} from 'vant'
import CircularProgerss from './components/CircularProgress.vue'

export default {
  data () {
    return {
      book: {
        title: 'Vue 3 Guide',
        author: 'Vue Team',
        year: 2020       
      },
      active: ''
    }
  },

  components: {
    [NavBar.name]: NavBar,
    [List.name]: List,
    [Cell.name]: Cell,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    CircularProgerss
  }  
}
</script>

<style lang="scss">
.app-wrapper {
  .test-demo {
  line-height: 36px;
  background-color: #336699;
  }
}
</style>
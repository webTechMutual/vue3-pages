<template>
  <div class="app-wrapper">
    <div class="page-nav">多页vue3项目演示</div>
    <circles/>
    <van-list>
      <van-cell title="VUE + VANT" is-link url="/page1/index.html"/>
    </van-list>

    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000" fixed></van-tabbar>
  </div>
</template>

<script>
import {NavBar, List, Cell, Tabbar, TabbarItem} from 'vant'
import Circles from './components/Circles.vue'
export default {
  data () {
    return {
    }
  },

  components: {
    [NavBar.name]: NavBar,
    [List.name]: List,
    [Cell.name]: Cell,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    Circles
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.page-nav {
  background-color: #576b95;
  line-height: 60px;
  font-size: 28px;
  color: #fff;
  text-align: center;
}
</style>

<template>
  <div class="app-wrapper">
    <qi-pop>
      <div class="text-block">
        asdf fdafdsa  fasfas 
        fasfas fasfas
        <div>afasf<a>我是里面啊</a></div>
      </div>
      <template #content>
        <div>气泡内容</div>
      </template>
    </qi-pop>

    <p>
      这里的 lovingVue 的值将会传入这个名为 checked 的 prop。同时当 触发一个 change 事件并附带一个新的值的时候,这个 lovingVue 的 property 将会被更新
      <qi-pop>
        <a>点我有气泡</a>

        <template #content>我是一个气泡</template>
      </qi-pop>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import QiPop from './components/QiPop.vue'
export default defineComponent({
  components: {
    QiPop
  },

  methods: {
  } 
})
</script>

<style lang="scss">
.text-block {
  background-color: aquamarine;
}
</style>

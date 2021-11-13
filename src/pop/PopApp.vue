<template>
  <div class="app-wrapper">
    <p class="scroll-p" @touchmove="onTouchMove">
      这里的 lovingVue 的值将会传入这个名为 checked 的 prop。同时当 触发一个 change 事件并附带一个新的值的时候,这个 lovingVue 的 property 将会被更新
    </p>

    <QiPop>
      <template #content>1111111</template>
    </QiPop>
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
    onTouchMove (e:TouchEvent) {
      console.log('onTouche:', e)

    }
  } 
})
</script>

<style lang="scss">
* {
  margin:0;
  padding: 0;
}
html, body, #app, .app-wrapper{
  height: 100%;
}
.text-block {
  background-color: aquamarine;
 }

 .scroll-p {
   height: 120%;
 }
</style>

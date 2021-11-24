<template>
  <div class="app-wrapper">
    <p class="scroll-p" @touchmove="onTouchMove">
      即可开端口大打的费 案件发康师傅 发生的反馈  发发收款
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
      this.$test('test')
    }
  } 
})
</script>

<style lang="scss">
* {
  margin:0;
  padding: 0;
}
html, body {
  height: 100%;
}
.text-block {
  background-color: aquamarine;
 }

 .scroll-p {
   height: 120%;
 }
</style>

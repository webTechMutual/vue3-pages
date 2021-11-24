<template>
  <div class="about">
    <div class="yellow">
      <div class="red" @click="onInnerClick"></div>
    </div>

    <div class="blue" :style="{top: top + 'px'}"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  },

  data () {
    return {
      top: 0
    }
  },

  methods: {
    onInnerClick (event:any) {
      console.log('event:', event)
      let top = event.target.offsetTop
      console.log('pre offsetTop:', event.target.offsetTop)
      let parentNode = event.target.offsetParent
      while (parentNode) {
        parentNode.offsetTop && (top += parentNode.offsetTop)
        console.log('offsetTop:', parentNode.offsetTop)
        parentNode = parentNode.offsetParent
      }
      console.log('top:', top)
      this.top = top
    }
  }
})
</script>

<style scoped>
  .yellow {
    width: 300px;
    height: 300px;
    padding: 10px;
    box-sizing: content-box;
    margin: 50px auto;
    background-color: yellow;
    border-radius: 20px;
    position: relative;
  }

  .red {
    width: 100px;
    height: 100px;
    background-color: red;
  }

  .blue {
    background-color: blue;
    width: 100px;
    height: 100px;
    position: fixed;
    border-radius: 20px;

    transform: translate(0, calc(-100% - 20px));
    margin-bottom: 20px;
  }
</style>
<template>
  <svg class="circular-progress" width="250" height="150" viewBox="-125 0 250 150" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="Gradient1" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="red"/>
        <stop offset="50%" stop-color="black"/>
        <stop offset="100%" stop-color="blue"/>
      </linearGradient>
  </defs>
    <path d="M -90 142 A 98 98 0 1 1 90 142 L 0 142" stroke="url(#Gradient1)" fill="none" stroke-width="16" stroke-linecap="round"></path>
  </svg>
</template>

<script lang="ts">
const widthRatio = window.screen.width / 360
export default {
  data () {
    return {
      viewBox: `${-125 * widthRatio} ${-75 * widthRatio} ${250 * widthRatio} ${150 * widthRatio}`
    }
  }
}
</script>

<style lang="scss">
.circular-progress {
  margin: 0 auto;
  display: block;
  width: 250px;
  height: 150px;
}
</style>
<template>
  <div class="qi-pop-wrapper">
    <teleport to="body">
      <div class="pop-container"></div>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  methods: {
    getZIndex (el: HTMLElement) {
      document.getElementById('#od')
      window.getComputedStyle(el,null).getPropertyValue('z-index');
    }
  } 
})
</script>

<style lang="scss" scoped>
.pop-container {
  padding: 10px;
  min-width:50px;
  min-height: 20px;
  position: fixed;
  top: 20px;
  left: 20px;
  border: 0.5px solid #eee;
  border-radius: 10px;
  background-color: #fff;

  &::before, &::after {
    content: ' ';
    border-style: solid;
    border-width: 6px 4px 0 4px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%)
  }

  &::before {
    border-color: #eee transparent transparent;
    bottom: -6px;
  }

  &::after {
    border-color: #fff transparent transparent;
    bottom: -5px;

  }
}
</style>

<template>
  <div class="qi-pop-wrapper">
    <teleport to="body">
      <div class="pop-container" v-if="visible">
        <slot name="content"></slot>     
      </div>
    </teleport>

    <div class="trigger" @click.stop="onToggle">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data () {
    return {
      visible: false
    }
  },

  methods: {
    getZIndex (el: HTMLElement) {
      document.getElementById('#od')
      window.getComputedStyle(el,null).getPropertyValue('z-index');
    },

    onToggle () {
      console.log('onToggle:', this.visible)
      this.visible = !this.visible
    }
  },

  mounted () {
    window.addEventListener('click', e => {
      console.log('window click')
      this.visible = false
    })
  }
})
</script>

<style lang="scss" scoped>
.pop-container {
  padding: 5px;
  min-width:20px;
  min-height: 20px;
  max-width: 100%;
  box-sizing: border-box;
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

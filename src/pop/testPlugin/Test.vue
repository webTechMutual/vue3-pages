<template>
  <div class="test-comp">测试插件</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {}
  }
})
</script>

<style lang="scss">
.test-comp {
  color:brown;
  font-weight: bold;
  padding: 10px;
  background-color: burlywood;
  border: 4px solid #556699;
}
</style>

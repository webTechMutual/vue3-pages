<template>
  <div class="page-chart">
    <h2 class="main-title">Antv:F2图表示例</h2>
    <h4>环装渐变图</h4>
    <RingChart />

    <h4>自定义图形Ruler</h4>
    <Ruler />

    <h4>自定义图形protractor</h4>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RingChart from './RingChart.vue'
import Ruler from './Ruler.vue'

export default defineComponent({
  components: {
    RingChart,
    Ruler
  },

  methods: {
  },

  mounted() {
  }
})
</script>

<style lang="scss">
.main-title {
  text-align: center;
}
</style>
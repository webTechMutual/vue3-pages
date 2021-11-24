<template>
  <div class="page-chart">
    <h3>Antv:F2图表示例</h3>
    <canvas id="chartContainer"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  methods: {
  },

  mounted () {
    const Global = F2.Global
    const Util = F2.Util
    const Shape = F2.Shape
    
    // 注册自定义Shape, 极坐标下带圆角的条形，只对极坐标生效
    Shape.registerShape('interval', 'polar-tick', {
      draw: function (cfg: any, container:any) {
        console.log('cfg:', cfg)
        const style = Util.mix({
          stroke: cfg.color
        }, Global.shape.interval, cfg.style)  
        const x = 52, y = 52
        const startAngle = -Math.PI - 0.3
        const totalAngle = Math.PI + 0.6
        return container.addShape('Arc', {
          className: 'interval',
          attrs: Util.mix({
            x,
            y,
            startAngle,
            endAngle: startAngle + totalAngle * cfg.points[1].y,
            r: 46,
            lineWidth: 12,
            lineCap: 'round'
          }, style)          
        })
      }
    })
    const data = [{
      const: 'a',
      actual: 275,
      expect: 275
    }]
    const chart = new F2.Chart({
      id: 'chartContainer',
      width: 104,
      height: 104,
      padding: 0,
      appendPadding: 0
    })

    chart.coord('polar', {
      transposed: true,
      radius: 1,
      startAngle: -Math.PI -0.3,
      endAngle: 0.3,
      innerRadius: 1
    })

    chart.axis(false)
    chart.legend(false)

    chart.source(data, {
      actual: {
        min: 0,
        max: 275,
        nice: false
      }
    })
    chart.interval()
      .position('const*actual')
      .shape('polar-tick')
      .color('l(0) 0:#7CE8D7 1:#8DC0F2')
      .animate(false)
    chart.render()
  }
})
</script>

<style>
.test-demo {
  line-height: 36px;
  background-color: #336699;
}
</style>

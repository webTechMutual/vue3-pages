<template>
  <canvas class="protractor"></canvas>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
const Shape = F2.Shape
const Vector2 = F2.G.Vector2

const chartWidth = 150
const chartHeight = 90
const polarRadius = chartWidth / 2
const barWidth = 12
const exceedAngle = Math.asin((chartHeight - polarRadius) / polarRadius)

Shape.registerShape('interval', 'protractor', {
  draw: function (cfg: any, container: any) {
    const points = this.parsePoints(cfg.points)
    console.log('points:', points)

    let newPoints = points.slice(0)
    if (this._coord.transposed) {
      newPoints = [ points[0], points[3], points[2], points[1] ]
    }

    const x = cfg.center.x,
      y = cfg.center.y

    const v = [ 1, 0 ];
    const v1 = [ newPoints[1].x - x, newPoints[1].y - y ]
    const v2 = [newPoints[2].x - x, newPoints[2].y - y]
    const r = Vector2.length(v1) 

    const radius = r - cfg.size / 2

    const roundAngle = Math.asin(cfg.size / 2 / r)
    let startAngle = Vector2.angleTo(v, v1) + roundAngle
    let endAngle =  Vector2.angleTo(v, v2) - roundAngle

    if (startAngle >= 1.5 * Math.PI) {
      startAngle = startAngle - 2 * Math.PI;
    }

    // 圆环总共的角度，对称的，可以根据起始点算出来
    const totalAngle = 3 * Math.PI - 2 * startAngle

    return container.addShape('Custom', {
      className: 'interval-polar-tick',
      createPath (context:any) {
        // 设置渐变色
        const linearGradient = context.createLinearGradient(0, points[0].y, 2 * r, points[1].y)

        // 绘制灰色圆环
        context.beginPath()
        context.lineWidth = cfg.size
        context.lineCap = 'round'
        context.strokeStyle = '#eeeeee'
        context.arc(x, y, radius, startAngle, totalAngle + startAngle)
        context.stroke()
        context.closePath()

        // 绘制百分比彩色圆环
        context.beginPath()
        context.strokeStyle = '#2356ef'
        context.arc(x, y, radius, startAngle, endAngle)
        context.stroke()
        context.closePath()
      }
    })
  }
})

export default defineComponent({
  data () {
    return {
    }
  },

  methods: {
  },

  mounted () {
    const data = [{
      const: 'a',
      actual:200,
      expect: 300
    }]

    const chart = new F2.Chart({
      el: this.$el,
      width: chartWidth,
      height: chartWidth,
      padding: 0,
      appendPadding: 0,
      pixelRatio: import.meta.env.DEV ? 1 : window.devicePixelRatio
    })

    chart.coord('polar', {
      transposed: true,
      startAngle: -Math.PI - exceedAngle,
      radius: 1,
      innerRadius: (polarRadius - barWidth) / polarRadius,
      endAngle: exceedAngle,
    })

    chart.legend(false)
    chart.axis(false)

    chart.source(data, {
      actual: {
        min: 0,
        max: 300,
        nice: false
      }
    })

    chart.interval()
      .position('const*actual')
      .shape('protractor')
      .color('l(0) 0:#7CE8D7 1:#8DC0F2')
      .size(barWidth)
      .animate(false)

    chart.render()
  }
})
</script>

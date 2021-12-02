<template>
  <canvas class="protractor"></canvas>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import color from '../../commons/color'
const Shape = F2.Shape
const Vector2 = F2.G.Vector2

const chartWidth = 150
const chartHeight = 100
const polarRadius = chartWidth / 2
const barWidth = 12
const exceedAngle = Math.asin((chartHeight - polarRadius) / polarRadius)

Shape.registerShape('interval', 'protractor', {
  draw: function (cfg: any, container: any) {
    const points = this.parsePoints(cfg.points)

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

    const roundAngle = Math.asin(cfg.size / 2 / radius)
    let startAngle = Vector2.angleTo(v, v1)
    // 起始和结束之间的角度
    let endAngle = Vector2.angleTo(v, v2)

    if (endAngle < startAngle) {
      endAngle += 2 * Math.PI
    }

    const diffAngle = endAngle - startAngle
    startAngle += roundAngle

    if (diffAngle < 2 * roundAngle) {
      endAngle = startAngle
    } else {
      endAngle -= roundAngle
    }

    // 圆环总共的角度，对称的，可以根据起始点算出来
    const totalAngle = 3 * Math.PI - 2 * startAngle

    return container.addShape('Custom', {
      className: 'interval-polar-tick',
      createPath (context:any) {
        // 设置渐变色
        const linearGradient = context.createLinearGradient(0, points[0].y, 2 * r, points[1].y)
        linearGradient.addColorStop(0, '#7CE8D7')
        linearGradient.addColorStop(1, color.getRadientColor('#7CE8D7', '#8DC0F2', (endAngle - startAngle) / totalAngle))

        // 绘制灰色圆环
        context.beginPath()
        context.lineWidth = cfg.size
        context.lineCap = 'round'
        context.strokeStyle = '#eeeeee'
        context.arc(x, y, radius, startAngle, totalAngle + startAngle)
        context.stroke()
        context.closePath()

        // 绘制百分比彩色圆环和刻度线
        if (diffAngle > 0) {
          context.beginPath()
          context.strokeStyle = linearGradient
          context.arc(x, y, radius, startAngle, endAngle)
          context.stroke()
          context.closePath()

          // 绘制刻度线
          let axisLineAngle = startAngle
          const pie1of20Angle = totalAngle / 20 // 将整个圆环分成20分
          while (axisLineAngle <= endAngle ) {
            const startRadius = radius + 2
            const endRadius = radius - 2
            const startX = startRadius * Math.cos(axisLineAngle) + x
            const startY = startRadius * Math.sin(axisLineAngle) + y

            const endX = endRadius * Math.cos(axisLineAngle) + x
            const endY = endRadius * Math.sin(axisLineAngle) + y

            context.beginPath()
            context.lineWidth = 1
            context.strokeStyle = 'rgba(255,255,255,0.4)'
            context.moveTo(startX, startY)
            context.lineTo(endX, endY)
            context.stroke()
            context.closePath()

            axisLineAngle += pie1of20Angle
          }
        }
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
      actual: 100,
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
      // .animate(false)

    chart.render()
  }
})
</script>

<template>
  <canvas class="custom-shape"></canvas>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
const Shape = F2.Shape

Shape.registerShape('interval', 'lined-tick', {
  draw: function (cfg: any, container: any) {
    const points = this.parsePoints(cfg.points)
    return container.addShape('Custom', {
       className: 'interval-line-tick',
       attrs: {
        x1: 0, // 线段起始点 x 坐标
        y1: 0,// 线段起始点 y 坐标
        x2: 50,// 线段结束点 x 坐标
        y2: 50,// 线段结束点 y 坐标
      },
      createPath (context:any) {
        const linearGradient = context.createLinearGradient(points[0].x, points[0].y, points[1].x, points[1].y)
        linearGradient.addColorStop(0, '#7CE8D7')
        linearGradient.addColorStop(1, '#8DC0F2')
        context.fillStyle = linearGradient
        context.fillRect(points[1].x, points[1].y, cfg.size, points[0].y - points[1].y)

        const startPoint = {
          x: cfg.x - 2 ,
          y: points[0].y - 5
        }
        context.save()
        context.translate(0.5,0.5)
        context.lineWidth = 1

        while (startPoint.y > points[1].y) {
          context.beginPath()
          context.moveTo(startPoint.x, startPoint.y)
          context.strokeStyle = 'rgba(255,255,255,0.3)'
          context.lineTo(startPoint.x + 4, startPoint.y)
          startPoint.y -= 5
          context.closePath()
          context.stroke()
        }

        context.restore()
      }
    })
  }
})

export default defineComponent({
  data () {
    return {}
  },

  methods: {
  },

  mounted () {
    const data = [{
      year: '2019',
      expect: 51
    }, {
      year: '2020',
      expect: 89
    }]
    const chart = new F2.Chart({
      el: this.$el,
      padding: 0,
      appendPadding: 0,
      pixelRatio: import.meta.env.DEV ? 1 : window.devicePixelRatio
    })

    chart.source(data)
    chart.interval()
      .shape('lined-tick')
      .size(10)
      .position('year*expect')
      .color('l(-90) 0:#7CE8D7 1:#8DC0F2')
      .animate(false)

    chart.axis('expect', {
      grid: false
    })
    chart.render()
  }
})
</script>

<style lang="scss">
.custom-shape {
  width: 300px;
  height: 100px;
}
</style>

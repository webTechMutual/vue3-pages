import {createFilter} from '@rollup/pluginutils'

function createPxReplace(pixels, viewportSize, unitPrecision, viewportUnit) {
  return (pixels / viewportSize * 100).toFixed(unitPrecision) + viewportUnit;
}

export default (ops = {}) => {
  const filter = createFilter(ops.include, ops.exclude)

  return {
    name: 'px2vw',
    transform (source, id) {
      if (!filter(id)) return null 
      const options = Object.assign({},{
        viewportWidth: 750,
        viewportUnit: 'vw',
        minPixelValue:1,
        decimal:3
      }, ops)

      const matchPXExp = /([0-9.]+px)([;,| |}|'|"\)\r|\n])/g

      let newSource = source.replace(matchPXExp, function (match, m1, m2) {
        var pixels = parseFloat(m1.slice(0, m1.length - 2));
        if (pixels <= options.minPixelValue) {
            return match;
        }
        return createPxReplace(pixels, options.viewportWidth, options.decimal, options.viewportUnit) + m2;
      })
      return newSource
    }
  }
}
// 分析色值的红绿蓝三原色
const parseColor = (color: string) => {
  return {
    red: parseInt(color.slice(1, 3), 16),
    green: parseInt(color.slice(3, 5), 16),
    blue: parseInt(color.slice(5, 7), 16)
  }
}

// 根据百分比计算渐变色，比如#000000渐变至#ffffff，那么百分之50%处的渐变色为#808080
const getRadientColor = (startColor:string, endColor:string, rate:number) => {
  console.log('rate:', rate)
  const startColors = parseColor(startColor)
  const endColors = parseColor(endColor)
  // 红色的差异值
  const redDiff = endColors.red - startColors.red
  // 绿色的差异值
  const greenDiff = endColors.green - startColors.green
  // 蓝色差异值
  const blueDiff = endColors.blue - startColors.blue

  const radientColors = {
    red: startColors.red + Math.round(redDiff * rate),
    green: startColors.green + Math.round(greenDiff * rate),
    blue: startColors.blue + Math.round(blueDiff * rate)
  }

  return '#' + radientColors.red.toString(16) + radientColors.green.toString(16) + radientColors.blue.toString(16)
}

export default {
  getRadientColor
}

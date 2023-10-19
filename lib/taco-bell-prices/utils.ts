export const priceToColor = (x, avg) => {
  if(avg < 0.1) {
    if(x <= avg) return "hsl(120, 100%, 33%)"
    return "hsl(0, 100%, 33%)"
  }

  return `hsl(${120 - 120 / (1 + Math.exp(-4 * (x - avg) / avg))}, 100%, 33%)`
}
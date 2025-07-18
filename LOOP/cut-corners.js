const ip = x => {
  let a = x < 0 ? -x : x, p = 1, r = 0
  while (p <= a / 2) p *= 2 
  while (p >= 1) {            
    r + p <= a && (r += p)
    p /= 2
  }
  return x < 0 ? -r : r            
}

const trunc = x => ip(x)
const floor = x => x >= 0
  ? ip(x)
  : (x === ip(x) ? ip(x) : ip(x) - 1)

const ceil  = x => x <= 0
  ? ip(x)
  : (x === ip(x) ? ip(x) : ip(x) + 1)
const round = x => floor(x + 0.5)
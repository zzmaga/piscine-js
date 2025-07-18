// race: первый завершившийся промис
export function race(arr) {
  return new Promise((resolve, reject) => {
    for (const p of arr) {
      Promise.resolve(p).then(resolve, reject)
    }
  })
}

export function some(arr, count) {
  if (!Array.isArray(arr) || arr.length === 0 || count < 1) return Promise.resolve([])
  return new Promise(resolve => {
    const resolved = []
    let done = false
    arr.forEach((p, i) => {
      Promise.resolve(p).then(val => {
        if (done) return
        resolved.push({ idx: i, value: val })
        if (resolved.length === count) {
          // Сортируем по индексу и собираем значения
          resolved.sort((a, b) => a.idx - b.idx)
          resolve(resolved.map(x => x.value))
          done = true
        }
      }, () => {})
    })
  })
}
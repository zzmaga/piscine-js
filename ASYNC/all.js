export function all(obj) {
  const keys = Object.keys(obj)
  if (!keys.length) return Promise.resolve({})
  const values = keys.map(k => Promise.resolve(obj[k]))
  return new Promise((resolve, reject) => {
    let count = 0
    const results = {}
    values.forEach((p, i) => {
      p.then(v => {
        results[keys[i]] = v
        if (++count === keys.length) resolve(results)
      }, reject)
    })
  })
}

export function interpolation({ step, start, end, callback, duration }) {
  const interval = duration / step
  const delta = (end - start) / step

  let i = 0

  function next() {
    if (i >= step) return
    callback([+(start + delta * i), +(interval * (i + 1))])
    i++
    if (i < step) {
      setTimeout(next, interval)
    }
  }

  setTimeout(next, interval)
}

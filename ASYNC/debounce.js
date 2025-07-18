// debounce: стандартное поведение (trailing)
export function debounce(fn, delay) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), delay)
  }
}

// opDebounce: поддержка опции { leading }
export function opDebounce(fn, delay, options = {}) {
  let timer, called = false

  return function (...args) {
    const context = this
    const { leading } = options

    if (leading && !called) {
      fn.apply(context, args)
      called = true
      timer = setTimeout(() => { called = false }, delay)
    } else {
      clearTimeout(timer)
      timer = setTimeout(() => {
        if (!leading) fn.apply(context, args)
        called = false
      }, delay)
    }
  }
}

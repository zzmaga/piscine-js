export function retry(count, callback) {
  return async function (...args) {
    let tries = 0
    let lastError
    while (tries <= count) {
      try {
        return await callback(...args)
      } catch (e) {
        lastError = e
        tries++
      }
    }
    throw lastError
  }
}

export function timeout(delay, callback) {
  return async function (...args) {
    return Promise.race([
      callback(...args),
      new Promise((_, reject) => setTimeout(() => reject(Error('timeout')), delay))
    ])
  }
}

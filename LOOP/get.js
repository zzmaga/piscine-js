export function get(src, path) {
    const keys = path.split('.')
    let val = src
    for (let k of keys) {
        if (val == null) return undefined
        val = val[k]
    }
    return val
}
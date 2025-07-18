export function sums(n) {
    if (n === 0) return []
    const res = []
    function helper(sum, arr, last) {
        if (sum === n) {
            if (arr.length > 1) res.push(arr)
            return
        }
        for (let i = last; i <= n - sum; i++) {
            helper(sum + i, [...arr, i], i)
        }
    }
    helper(0, [], 1)
    return res
}

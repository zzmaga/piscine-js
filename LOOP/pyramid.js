export function pyramid(char, n) {
    const charLen = char.length
    let res = ""
    for (let i = 1; i <= n; i++) {
        const chars = char.repeat(2 * i - 1)
        const line = chars.padStart(((n - i) * charLen) + chars.length, " ")
        res += line
        if (i !== n) res += "\n"
    }
    return res
}
export function triangle(char, n) {
    let res = ""
    for (let i = 1; i <= n; i++) {
        res += char.repeat(i)
        if (i !== n) res += "\n"
    }
    return res
}
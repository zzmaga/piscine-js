export function RNA(dna) {
    let res = ""
    for (let i = 0; i < dna.length; i++) {
        const c = dna[i]
        if (c === "G") res += "C"
        else if (c === "C") res += "G"
        else if (c === "T") res += "A"
        else if (c === "A") res += "U"
    }
    return res
}

export function DNA(rna) {
    let res = ""
    for (let i = 0; i < rna.length; i++) {
        const c = rna[i]
        if (c === "C") res += "G"
        else if (c === "G") res += "C"
        else if (c === "A") res += "T"
        else if (c === "U") res += "A"
    }
    return res
}
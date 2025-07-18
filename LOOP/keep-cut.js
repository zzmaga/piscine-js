// const test =  "ty"

function cutFirst(str) { // "erty"
    if (str.length <= 2) return ''
    return str.slice(2)
};

function cutLast(str) { // "qwer"
    if (str.length <= 2 ) return ''
    return str.slice(0, -2)
};

function cutFirstLast(str) { // "er"
    if (str.length <= 4) return '' 
    return str.slice(2, -2)
};

function keepFirst(str) { // "qw"
    if (str.length <= 2 ) return str
    return str.slice(0, 2)
};

function keepLast(str) { // "ty"
    if (str.length <= 2 ) return str
    return str.slice(-2)
};

function keepFirstLast(str) { // "qwty
    if (str.length <= 3) return str
    return str.slice(0, 2) + str.slice(-2) 
};

// function l(str) {
//    console.log(str)
//  }

// l(cutFirst(test))
//  l(cutLast(test))
// l(cutFirstLast(test))
//  l(keepFirst(test))
// l(keepLast(test))
// l(keepFirstLast(test))
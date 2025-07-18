// 1. adder
function adder(arr, initial = 0) {
  return arr.reduce((sum, n) => sum + n, initial);
}

// 2. sumOrMul
function sumOrMul(arr, initial = 0) {
  return arr.reduce((acc, n) =>
    n % 2 === 0 ? acc * n : acc + n
  , initial);
}

// 3. funcExec
function funcExec(arr, initial) {
  return arr.reduce((acc, fn) =>
    typeof fn === 'function' ? fn(acc) : acc
  , initial);
}

// console.log(adder([1, 2, 3, 4])); // 10
// console.log(adder([1, 2, 3, 4], 5)); // 15

// console.log(sumOrMul([1, 2, 3, 5, 8], 5)); // 160
// // ((((5 + 1) * 2) + 3) + 5) * 8 = 160

// // funcExec example
// function f1(x) { return x + 1 }
// function f2(x) { return x * 3 }
// function f3(x) { return x - 9 }

// console.log(funcExec([f1, f2, f3], 2)); // ((2+1)*3)-9 = 0

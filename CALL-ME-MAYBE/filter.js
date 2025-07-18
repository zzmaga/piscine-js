function filter(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) res.push(arr[i]);
  }
  return res;
}

function reject(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i], i, arr)) res.push(arr[i]);
  }
  return res;
}

function partition(arr, fn) {
  const pass = [];
  const fail = [];
  for (let i = 0; i < arr.length; i++) {
    (fn(arr[i], i, arr) ? pass : fail).push(arr[i]);
  }
  return [pass, fail];
}

function map(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i], i, arr));
  }
  return res;
}

function flatMap(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const val = fn(arr[i], i, arr);
    if (Array.isArray(val)) {
      for (let j = 0; j < val.length; j++) res.push(val[j]);
    } else {
      res.push(val);
    }
  }
  return res;
}

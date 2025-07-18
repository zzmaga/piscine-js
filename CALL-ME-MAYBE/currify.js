function currify(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function(...next) {
      return curried(...args, ...next);
    };
  };
}

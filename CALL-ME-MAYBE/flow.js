function flow(funcs) {
  return function(...args) {
    // Первый вызов с args, остальные — по цепочке с результатом предыдущего
    return funcs.slice(1).reduce(
      (acc, fn) => fn(acc),
      funcs[0](...args)
    );
  };
}

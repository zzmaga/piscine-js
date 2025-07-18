function mult2(a) {
  return function(b) {
    return a * b;
  };
}

// или короче: const mult2 = a => b => a * b;

function add3(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
// или: const add3 = a => b => c => a + b + c;

function sub4(a) {
  return function(b) {
    return function(c) {
      return function(d) {
        return a - b - c - d;
      };
    };
  };
}
// или: const sub4 = a => b => c => d => a - b - c - d;

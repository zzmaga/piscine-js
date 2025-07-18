function letterSpaceNumber(str) {
  const re = /([a-zA-Z]) (\d)(?![a-zA-Z0-9])/g;
  const result = [];
  let match;
  while ((match = re.exec(str))) {
    result.push(match[0]);
  }
  return result;
}

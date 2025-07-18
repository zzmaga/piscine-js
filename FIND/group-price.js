function groupPrice(str) {
  const re = /((?:[$€£¥₩]|[A-Z]{2,}))(\d+)\.(\d{2})/g;
  const result = [];
  let match;
  while ((match = re.exec(str))) {
    result.push([match[0], match[2], match[3]]);
  }
  return result;
}

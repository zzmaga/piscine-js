function ionOut(str) {
  // Ищем слова, где есть t + ion подряд, возвращаем слово без 'ion'
  const re = /\b\w*tion\w*\b/g;
  const result = [];
  let match;
  while ((match = re.exec(str))) {
    // Удаляем только первое 'ion' после t
    const out = match[0].replace(/(t)ion/, '$1');
    result.push(out);
  }
  return result;
}

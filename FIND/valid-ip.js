function findIP(str) {
  const ipCandidates = str.match(/\d{1,3}(?:\.\d{1,3}){3}(?::\d{1,5})?/g) || [];
  const res = [];
  for (const cand of ipCandidates) {
    let [ip, port] = cand.split(':');
    const octets = ip.split('.');
    // 4 октета, без лидирующих нулей, в диапазоне
    if (
      octets.length === 4 &&
      octets.every(
        o => o.length > 0 &&
          !(o.length > 1 && o[0] === '0') &&
          Number(o) >= 0 && Number(o) <= 255
      )
    ) {
      if (port) {
        const n = Number(port);
        if (n >= 1 && n <= 65535) {
          res.push(`${ip}:${n}`);
        }
      } else {
        res.push(ip);
      }
    }
  }
  return res;
}

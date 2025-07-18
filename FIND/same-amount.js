function sameAmount(str, re1, re2) {
    function allMatches(s, r) {
         const re = new RegExp(r.source, r.flags.includes('g') ? r.flags : r.flags + 'g')
         return [...s.matchAll(re)].length;
    }
  return allMatches(str, re1) === allMatches(str, re2);
}

// 1. filterShortStateName
function filterShortStateName(arr) {
  return arr.filter(str => str.length < 7);
}

// 2. filterStartVowel
function filterStartVowel(arr) {
  return arr.filter(str => /^[aeiou]/i.test(str));
}

// 3. filter5Vowels
function filter5Vowels(arr) {
  return arr.filter(str => {
    const count = (str.match(/[aeiou]/gi) || []).length;
    return count >= 5;
  });
}

// 4. filter1DistinctVowel
function filter1DistinctVowel(arr) {
  return arr.filter(str => {
    const vowels = (str.toLowerCase().match(/[aeiou]/g) || []);
    const distinct = new Set(vowels);
    return distinct.size === 1 && vowels.length > 0;
  });
}

// 5. multiFilter
function multiFilter(arr) {
  return arr.filter(obj => {
    const hasEnoughCapital = obj.capital && obj.capital.length >= 8;
    const notStartVowel = !/^[aeiou]/i.test(obj.name);
    const tagHasVowel = /[aeiou]/i.test(obj.tag);
    const notSouth = obj.region !== 'South';
    return hasEnoughCapital && notStartVowel && tagHasVowel && notSouth;
  });
}

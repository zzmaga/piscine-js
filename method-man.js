/* 
Write 5 functions:
WORDS: that takes a string, splits it by spaces, and returns an array of those substrings.
SENTENCE: that takes an array of strings, and joins them with spaces to return a single string.
YELL: that takes a string and returns it in upper case.
WHISPER: that takes a string and returns it in lower case, surrounded by *.
CAPITALIZE: that takes a string and transforms it so that the first character is upper case, 
and the subsequent characters are lower case.
*/

function words(str) {
  return str.split(' ');
}

function sentence(arr) {
  return arr.join(' ');
}

function yell(str) {
  return str.toUpperCase();
}

function whisper(str) {
  return `*${str.toLowerCase()}*`;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
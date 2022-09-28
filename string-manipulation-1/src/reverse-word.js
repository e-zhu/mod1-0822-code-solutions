/* exported reverseWord */
// find index at end of word
// concatenate character at index into wordReverse
// iterate until full word is reversed
// return reversed word
function reverseWord(word) {
  var startIndex = word.length;
  var wordReverse = '';
  for (var i = startIndex; i > 0; i--) {
    wordReverse += word.slice(i - 1, i);
  }
  return wordReverse;
}

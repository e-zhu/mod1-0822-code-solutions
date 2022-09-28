/* exported capitalize */
// split word into letters
// make first letter capitalized
// make other letters lowercase
// return fixed word
function capitalize(word) {
  var newWord = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      newWord += word.slice(i, i + 1).toUpperCase();
    } else {
      newWord += word.slice(i, i + 1).toLowerCase();
    }
  }
  return newWord;
}

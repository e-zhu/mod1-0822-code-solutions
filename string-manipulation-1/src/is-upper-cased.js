/* exported isUpperCased */
function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    var checkLetter = word.slice(i, i + 1);
    if (checkLetter !== checkLetter.toUpperCase()) {
      return false;
    }
  }
  return true;
}

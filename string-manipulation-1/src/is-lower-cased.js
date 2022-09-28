/* exported isLowerCased */
function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    var checkLetter = word.slice(i, i + 1);
    if (checkLetter !== checkLetter.toLowerCase()) {
      return false;
    }
  }
  return true;
}

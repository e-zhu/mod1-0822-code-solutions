/* exported isVowel */
// change character to lowercase to reduce case checks
// check if lowercase character equals a/e/i/o/u
// return true if character is lowercase vowel
// return false if not
function isVowel(char) {
  var lowerChar = char.toLowerCase();
  if (lowerChar !== 'a' && lowerChar !== 'e' && lowerChar !== 'i' && lowerChar !== 'o' && lowerChar !== 'u') {
    return false;
  }
  return true;
}

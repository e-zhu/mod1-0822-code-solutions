/* exported getWords */
function getWords(string) {
  var wordArray = [];
  if (string === '') {
    return wordArray;
  }
  wordArray = string.split(' ');
  return wordArray;
}

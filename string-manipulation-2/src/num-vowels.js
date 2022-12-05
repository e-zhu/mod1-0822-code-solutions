/* exported numVowels */

function numVowels(string) {
  var num = 0;
  for (var i = 0; i < string.length; i++) {
    var currentChar = string.at(i).toLowerCase();
    if (currentChar === 'a' || currentChar === 'e' || currentChar === 'i' || currentChar === 'o' || currentChar === 'u') {
      num++;
    }
  }
  return num;
}

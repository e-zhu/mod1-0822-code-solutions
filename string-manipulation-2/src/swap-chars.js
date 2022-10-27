/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  var firstChar = string.at(firstIndex);
  var secondChar = string.at(secondIndex);
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += secondChar;
    } else if (i === secondIndex) {
      newString += firstChar;
    } else {
      newString += string.at(i);
    }
  }
  return newString;
}

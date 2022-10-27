/* exported lastChars */

function lastChars(length, string) {
  var newString = '';
  if (string.length <= length) {
    return string;
  } else {
    for (var i = string.length - length; i < string.length; i++) {
      newString += string.at(i);
    }
    return newString;
  }
}

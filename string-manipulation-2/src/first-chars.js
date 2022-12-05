/* exported firstChars */

function firstChars(length, string) {
  var newString = '';
  if (string.length <= length) {
    return string;
  } else {
    for (var i = 0; i < length; i++) {
      newString += string.at(i);
    }
    return newString;
  }
}

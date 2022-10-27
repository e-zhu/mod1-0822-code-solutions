/* exported truncate */
// check if string is empty, return ellipses
// check if length is longer than string, return original string with ellipses
// else truncate string to desired length

function truncate(length, string) {
  var truncatedString = '';
  if (string === '') {
    truncatedString = '...';
    return truncatedString;
  } else if (length > string.length) {
    truncatedString = string + '...';
    return truncatedString;
  } else {
    for (var i = 0; i < length; i++) {
      truncatedString += string.at(i);
    }
    truncatedString += '...';
    return truncatedString;
  }
}

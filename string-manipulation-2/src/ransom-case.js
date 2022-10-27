/* exported ransomCase */
// iterate through string
// if iterate value is even, letter is lowercase
// if value is odd, letter is uppercase

function ransomCase(string) {
  var ransomString = '';
  for (var i = 0; i < string.length; i++) {
    if ((i % 2) === 0) {
      ransomString += string.at(i).toLowerCase();
    } else {
      ransomString += string.at(i).toUpperCase();
    }
  }
  return ransomString;
}

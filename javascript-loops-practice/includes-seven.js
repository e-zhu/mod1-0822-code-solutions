/* exported includesSeven */
function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    var checkSeven = array[i];
    if (checkSeven === 7) {
      return true;
    }
  }
  return false;
}

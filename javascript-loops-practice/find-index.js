/* exported findIndex */
function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    var checkIndex = array[i];
    if (checkIndex === value) {
      return i;
    }
  }
  return -1;
}

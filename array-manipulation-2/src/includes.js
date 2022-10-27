/* exported includes */
// check if array is empty, return false if so
// else iterate through array
// if value of array is equal to checked value, return true
// return false at the end if no matched value

function includes(array, value) {
  if (array === []) {
    return false;
  } else {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return true;
      }
    }
    return false;
  }
}

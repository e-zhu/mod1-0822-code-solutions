/* exported take */
// check if given array is empty
// else push values into new array up to count value

function take(array, count) {
  var newArray = [];
  if (array === []) {
    return array;
  } else if (count >= array.length) {
    return array;
  } else {
    for (var i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  }
}

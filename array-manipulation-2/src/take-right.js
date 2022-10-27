/* exported takeRight */

function takeRight(array, count) {
  var rightArray = [];
  if (array.length < count) {
    return array;
  } else {
    for (var i = array.length - count; i < array.length; i++) {
      rightArray.push(array[i]);
    }
    return rightArray;
  }
}

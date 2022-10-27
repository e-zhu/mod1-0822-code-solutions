/* exported drop */
// check if count is larger than array length
// else start index from count value
// push values into new array

function drop(array, count) {
  var dropArray = [];
  if (array.length <= count) {
    return array;
  } else {
    for (var i = count; i < array.length; i++) {
      dropArray.push(array[i]);
    }
    return dropArray;
  }
}

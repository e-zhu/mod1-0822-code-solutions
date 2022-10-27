/* exported dropRight */

function dropRight(array, count) {
  var dropArray = [];
  if (array.length < count) {
    return array;
  } else {
    for (var i = 0; i < array.length - count; i++) {
      dropArray.push(array[i]);
    }
    return dropArray;
  }
}

/* exported reverse */
function reverse(array) {
  var arraySize = array.length;
  var lastIndex = arraySize - 1;
  var reverseArray = [];
  if (arraySize === 0) {
    return reverseArray;
  } else if (arraySize === 1) {
    return array;
  }
  for (var i = lastIndex; i >= 0; i--) {
    var pushValue = array[i];
    reverseArray.push(pushValue);
  }
  return reverseArray;
}

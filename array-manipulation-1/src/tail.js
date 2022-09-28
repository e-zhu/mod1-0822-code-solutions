/* exported tail */
// find size of array
// if array is size 0, return empty
// if array is size 1, first element is also last element, return empty
// else iterate and push all values except head into tail array
// return tail array
function tail(array) {
  var arraySize = array.length;
  var tailArray = [];
  if (arraySize === 1 || arraySize === 0) {
    return tailArray;
  }
  for (var i = 1; i < arraySize; i++) {
    var pushValue = array[i];
    tailArray.push(pushValue);
  }
  return tailArray;
}

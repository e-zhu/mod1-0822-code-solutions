/* exported initial */
// find array size first
// find final index to stop iteration
// if array size is 0 return empty
// size 1 array means first element is also last element, return empty
// else loop through rest of array and push every element except tail
// return initial array
function initial(array) {
  var arraySize = array.length;
  var stopIndex = arraySize - 1;
  var initialArray = [];
  if (arraySize === 1 || arraySize === 0) {
    return initialArray;
  }
  for (var i = 0; i < stopIndex; i++) {
    var pushValue = array[i];
    initialArray.push(pushValue);
  }
  return initialArray;
}

/* exported compact */
// find array length for iteration
// check value at each array index
// if value is false/null/0/-0/undefined/empty string
// check for NaN separately, value needs to be both a number and true for isNaN check
// iterate past index if previous conditions met
// push value into new array otherwise
// return compacted array
function compact(array) {
  var arraySize = array.length;
  var compactArray = [];
  var i = 0;
  while (i < arraySize) {
    var checkValue = array[i];
    if (checkValue === false || checkValue === null || checkValue === 0 || Object.is(checkValue, -0) || checkValue === undefined || checkValue === '') {
      i++;
    } else if (isNaN(checkValue) && typeof checkValue === 'number') {
      i++;
    } else {
      compactArray.push(checkValue);
      i++;
    }
  }
  return compactArray;
}

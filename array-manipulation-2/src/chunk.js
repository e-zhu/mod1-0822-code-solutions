/* exported chunk */

function chunk(array, size) {
  var i = 0;
  var j = 0;
  var chunkArray = [];
  var tempArray = [];
  if (array.length < size) {
    return array;
  } else {
    while (i < array.length) {
      while (j < size) {
        tempArray.push(array[i]);
        j++;
        i++;
        if (i === array.length) {
          j = size;
        }
      }
      chunkArray.push(tempArray);
      tempArray = [];
      j = 0;
    }
    return chunkArray;
  }
}

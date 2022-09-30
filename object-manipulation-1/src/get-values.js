/* exported getValues */
// iterate through object
// find value at object key index
// push value into array
// return array
function getValues(object) {
  var valuesArray = [];
  for (var i in object) {
    var value = object[i];
    valuesArray.push(value);
  }
  return valuesArray;
}

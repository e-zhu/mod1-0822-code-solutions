/* exported getKeys */
// iterate through object
// push keys at each key index into array
// return array of object keys
function getKeys(object) {
  var keysArray = [];
  for (var i in object) {
    keysArray.push(i);
  }
  return keysArray;
}

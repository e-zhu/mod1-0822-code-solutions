/* exported toObject */
// separate array values into variables
// create new key for object
// return object
function toObject(keyValuePair) {
  var object = {};
  var key = keyValuePair[0];
  var value = keyValuePair[1];
  object[key] = value;
  return object;
}

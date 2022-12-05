/* exported pick */
// get values of source's keys
// compare all values of source keys to values in keys array
// add key value into new pickKeys object if it exists
// if value is undefined, do not add to new object

function pick(source, keys) {
  var pickKeys = {};
  var sourceKeys = Object.keys(source);
  var sourceValues = Object.values(source);
  var newKey = '';
  for (var i = 0; i < sourceKeys.length; i++) {
    for (var j = 0; j < keys.length; j++) {
      if (sourceKeys[i] === keys[j]) {
        if (sourceValues[i] !== undefined) {
          newKey = sourceKeys[i];
          pickKeys[newKey] = sourceValues[i];
        }
      }
    }
  }
  return pickKeys;
}

/* exported omit */
// check values of keys in source
// if value is equal, iterate to next key in source
// if not equal, check rest of keys in keys array
// add new key with value into omitObject if it does not match any keys

function omit(source, keys) {
  if (source === {}) {
    return source;
  }
  var omitObject = {};
  var sourceKeys = Object.keys(source);
  var sourceValues = Object.values(source);
  var newKey = '';
  var newValue = '';
  var i = 0;
  var j = 0;
  var isMatch = true;

  while (i < sourceKeys.length) {
    while (j < keys.length) {
      if (sourceKeys[i] === keys[j]) {
        j = keys.length;
        isMatch = true;
      } else {
        j++;
        isMatch = false;
      }
    }
    if (!isMatch) {
      newKey = sourceKeys[i];
      newValue = sourceValues[i];
      omitObject[newKey] = newValue;
    }
    i++;
    j = 0;
  }
  return omitObject;
}

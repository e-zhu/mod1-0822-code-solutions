/* exported invert */

function invert(source) {
  if (source === {}) {
    return source;
  }
  var invertKeys = Object.keys(source);
  var invertValues = Object.values(source);
  var invertObject = {};
  var newKey = '';
  var newValue = '';
  for (var i = 0; i < invertKeys.length; i++) {
    newKey = invertKeys[i];
    newValue = invertValues[i];
    invertObject[newValue] = newKey;
  }
  return invertObject;
}

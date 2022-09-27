/* exported filterOutStrings */
function filterOutStrings(values) {
  var noStrings = [];
  for (var i = 0; i < values.length; i++) {
    var indexValue = values[i];
    if (typeof indexValue !== 'string') {
      noStrings.push(indexValue);
    }
  }
  return noStrings;
}

/* exported filterOutNulls */
function filterOutNulls(values) {
  var noNulls = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] != null) {
      var addValue = values[i];
      noNulls.push(addValue);
    } else if (values[i] === undefined) {
      addValue = values[i];
      noNulls.push(addValue);
    }
  }
  return noNulls;
}

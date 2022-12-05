/* exported defaults */

function defaults(target, source) {
  var targetKeys = Object.keys(target);
  var sourceKeys = Object.keys(source);
  var sourceValues = Object.values(source);
  var newKey = '';
  var newValue = '';
  var hasKey = true;
  var i = 0;
  var j = 0;
  if (targetKeys.length === 0) {
    while (i < sourceKeys.length) {
      newKey = sourceKeys[i];
      newValue = sourceValues[i];
      target[newKey] = newValue;
      i++;
    }
  } else {
    while (i < sourceKeys.length) {
      while (j < targetKeys.length) {
        if (targetKeys[j] === sourceKeys[i]) {
          hasKey = true;
          j = targetKeys.length;
        } else {
          hasKey = false;
          j++;
        }
      }
      if (!hasKey) {
        newKey = sourceKeys[i];
        newValue = sourceValues[i];
        target[newKey] = newValue;
      }
      i++;
      j = 0;
    }
  }
}

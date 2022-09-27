/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suffixArray = [];
  for (var i = 0; i < words.length; i++) {
    var wordSuffix = words[i] + suffix;
    suffixArray.push(wordSuffix);
  }
  return suffixArray;
}

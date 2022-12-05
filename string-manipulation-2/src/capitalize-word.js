/* exported capitalizeWord */
// check if word is equal to javascript, make word fully lowercase to check
// else take first letter and make uppercase
// make the rest of the letters lowercase

function capitalizeWord(word) {
  var capital = '';
  if (word.toLowerCase() === 'javascript') {
    capital = 'JavaScript';
    return capital;
  } else {
    var firstLetter = word.at(0);
    capital = firstLetter.toUpperCase();
    for (var i = 1; i < word.length; i++) {
      capital += word.at(i).toLowerCase();
    }
    return capital;
  }
}

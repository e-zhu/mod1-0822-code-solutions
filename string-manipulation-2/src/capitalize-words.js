/* exported capitalizeWords */
// first split string apart into individual words
// split method puts all individual words into stringArray
// iterate through stringArray for individual words
// make first letter of word capital, make rest lowercase
// add a space to the front of the new word if it is not the first word

function capitalizeWords(string) {
  var stringArray = string.split(' ');
  var capitalString = '';
  var currentWord = '';
  var editedWord = '';
  for (var i = 0; i < stringArray.length; i++) {
    currentWord = stringArray[i];
    editedWord = currentWord.at(0).toUpperCase();
    for (var j = 1; j < currentWord.length; j++) {
      editedWord += currentWord.at(j).toLowerCase();
    }
    if (i !== 0) {
      editedWord = ' ' + editedWord;
    }
    capitalString += editedWord;
  }
  return capitalString;
}

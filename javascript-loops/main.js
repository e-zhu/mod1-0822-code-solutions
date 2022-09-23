/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string.charAt(i));
  }
}

function doubleAll(numbers) {
  var doubled = [];
  var numbersIndex = 0;
  for (var i = 0; i < numbers.length; i++) {
    numbersIndex = numbers[i] * 2;
    doubled.push(numbersIndex);
  }
  return doubled;
}

function getKeys(object) {
  var keys = [];
  for (var i in object) {
    keys.push(i);
  }
  return keys;
}

function getValues(object) {
  var values = [];
  var value = '';
  for (var i in object) {
    value = object[i];
    values.push(value);
  }
  return values;
}

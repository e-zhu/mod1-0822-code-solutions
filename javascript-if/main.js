/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  var remainder = number % 2;
  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  var firstLetter = string.charAt(0);
  if (firstLetter === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  var ageCheck = person.age;
  if (ageCheck >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  var ageCheck = person.age;
  if (ageCheck >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH <= 14 && pH > 7) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight everybody!';
  }
}

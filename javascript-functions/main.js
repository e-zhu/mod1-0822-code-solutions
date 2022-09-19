function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('result of convertMinutesToSeconds: ', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greetResult = greet('Beavis');
console.log('result of greet: ', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResult = getArea(17, 42);
console.log('result of getArea: ', getAreaResult);

function getFirstName(person) {
  var name = person.firstName;
  return name;
}

var getFirstNameResult = getFirstName({ firstName: 'Lelouche', LastName: 'Lamperouge' });
console.log('result of getFirstName: ', getFirstNameResult);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('result of getLastElement: ', getLastElementResult);

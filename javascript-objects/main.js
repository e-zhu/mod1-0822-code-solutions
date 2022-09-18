var student = {
  firstName: 'Eric',
  lastName: 'Zhu',
  age: 25
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);
student.livesInIrvine = true;
student.previousOccupation = 'student';
console.log('value of livesInIrvine: ', student.livesInIrvine);
console.log('value of previousOccupation: ', student.previousOccupation);

var vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2018
};

vehicle['color'] = 'dark gray';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]: ', vehicle['color']);
console.log('value of vehicle["isConvertible"]: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'Apollo',
  type: 'cat'
};

delete pet.name;
delete pet.type;
console.log('value of pet: ', pet);

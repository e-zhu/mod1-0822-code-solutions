var numberFirst = 10;
var numberSecond = 15;
var numberThird = 21;
var maximumValue = Math.max(numberFirst, numberSecond, numberThird);
console.log('value of maximumValue: ', maximumValue);
var heroes = ['Batman', 'Superman', 'Flash', 'Aquaman'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex: ', randomIndex);
var randomHero = heroes[randomIndex];
console.log('value of randomHero: ', randomHero);

var library = [
  {
    title: 'Cat in the Hat',
    author: 'Dr. Seuss'
  },
  {
    title: 'Diary of a Wimpy Kid',
    author: 'Jeff Kinney'
  },
  {
    title: '1984',
    author: 'George Orwell'
  }
];
var lastBook = library.pop();
console.log('value of lastBook: ', lastBook);
var firstBook = library.shift();
console.log('value of firstBook: ', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log(library);

var fullName = 'Eric Zhu';
var firstAndLastName = fullName.split(' ');
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName: ', sayMyName);

var bookshelf = [
  {
    isbn: '9780007247912',
    title: 'Cat in the Hat',
    author: 'Dr. Seuss'
  },
  {
    isbn: '9780020198819',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitsgerald'
  },
  {
    isbn: '9780141187358',
    title: '1984',
    author: 'George Orwell'
  }
];
console.log(bookshelf);

console.log(JSON.stringify(bookshelf));
console.log('typeof: ', typeof JSON.stringify(bookshelf));

var student = '{"id":11234,"name":"Eric Zhu"}';
console.log(student);
console.log('typeof: ', typeof student);

var jsonStudent = JSON.parse(student);
console.log(jsonStudent);
console.log('typeof: ', typeof jsonStudent);

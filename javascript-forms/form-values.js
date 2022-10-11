var form = document.querySelector('#contact-form');
form.addEventListener('submit', doStuff);
var formValues = {};

function doStuff(event) {
  event.preventDefault();
  formValues.name = form.elements.name.value;
  formValues.email = form.elements.email.value;
  formValues.message = form.elements.message.value;
  console.log('form values: ', formValues);
  form.reset();
}

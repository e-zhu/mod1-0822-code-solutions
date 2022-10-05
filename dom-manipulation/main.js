var clickCount = 0;
var button = document.querySelector('.hot-button');
var counter = document.querySelector('.click-count');

function incrementText() {
  clickCount++;
  var clickText = 'Click: ' + clickCount;
  counter.textContent = clickText;
}

function updateClass() {
  var buttonClass = button.className;
  if (clickCount >= 4) {
    buttonClass = 'hot-button cool';
  }
  if (clickCount >= 7) {
    buttonClass = 'hot-button tepid';
  }
  if (clickCount >= 10) {
    buttonClass = 'hot-button warm';
  }
  if (clickCount >= 13) {
    buttonClass = 'hot-button hot';
  }
  if (clickCount >= 16) {
    buttonClass = 'hot-button nuclear';
  }
  button.className = buttonClass;
}

button.addEventListener('click', incrementText);
button.addEventListener('click', updateClass);

var lightbulb = document.querySelector('.light');
var background = document.querySelector('.container');

function lightChange(event) {
  var lightClass = lightbulb.className;
  var backClass = background.className;
  if (lightClass === 'light off') {
    lightClass = 'light on';
    backClass = 'container on';
    lightbulb.className = lightClass;
    background.className = backClass;
  } else {
    lightClass = 'light off';
    backClass = 'container off';
    lightbulb.className = lightClass;
    background.className = backClass;
  }
}

lightbulb.addEventListener('click', lightChange);

var taskList = document.querySelector('.task-list');

taskList.addEventListener('click', logEvent);

function logEvent(event) {
  var currentElement = event.target;
  console.log('event.target: ' + event.target);
  console.log('event.target.tagName: ' + event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var currentAncestor = currentElement.closest('.task-list-item');
    console.log(currentAncestor);
    currentAncestor.remove();
  }
}

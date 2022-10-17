var container = document.querySelector('.tab-container');
var tabs = document.getElementsByClassName('tab');
var views = document.getElementsByClassName('view');

container.addEventListener('click', changeTab);

function changeTab(event) {
  var clickTarget = event.target;
  var currentView;

  if (clickTarget.matches('.tab')) {
    currentView = clickTarget.getAttribute('data-view');

    for (var i = 0; i < tabs.length; i++) {
      if (clickTarget === tabs[i]) {
        tabs[i].className = tabs[i].className + ' active';
      } else {
        tabs[i].className = 'tab';
      }
    }

    for (i = 0; i < views.length; i++) {
      if (currentView === views[i].getAttribute('data-view')) {
        views[i].className = 'view';
      } else {
        views[i].className = 'view hidden';
      }
    }
  }
}

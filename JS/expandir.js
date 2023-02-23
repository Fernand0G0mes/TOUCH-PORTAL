var label = document.querySelectorAll('label[for="collapsible-head"]');
var section = document.getElementById('upgrades');

label[0].addEventListener('click', function() {
  section.classList.toggle('expand');
});

label[1].addEventListener('click', function() {
  section.classList.remove('expand');
});
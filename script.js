const toggleThemeBtn = document.getElementById('toggle-theme-btn');
const section1 = document.querySelector('#first');
const section3 = document.querySelector('#third');
const footer1 = document.querySelector('footer');
const content = document.querySelector('#content');
const rese = document.querySelector('#reseaux');

toggleThemeBtn.addEventListener('click', function() {
  toggleThemeBtn.classList.toggle('dark');
  section3.classList.toggle('dark');
  footer1.classList.toggle('dark');
  content.classList.toggle('dark');
  rese.classList.toggle('dark');

});

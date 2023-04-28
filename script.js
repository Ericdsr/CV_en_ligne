const toggleThemeBtn = document.getElementById('toggle-theme-btn');
const section1 = document.querySelector('#first');
const section2 = document.querySelector('#second');
const section3 = document.querySelector('#third');
const section4 = document.querySelector('#four');
const footer1 = document.querySelector('footer');
const content = document.querySelector('#content');

toggleThemeBtn.addEventListener('click', function() {
  toggleThemeBtn.classList.toggle('dark');
  section3.classList.toggle('dark');
  footer1.classList.toggle('dark');
  content.classList.toggle('dark');
});

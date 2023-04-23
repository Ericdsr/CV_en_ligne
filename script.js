const toggleThemeBtn = document.getElementById('toggle-theme-btn');
const section1 = document.querySelector('#first');
const section2 = document.querySelector('#second');
const section3 = document.querySelector('#third');
const section4 = document.querySelector('#four');

toggleThemeBtn.addEventListener('click', function() {
  toggleThemeBtn.classList.toggle('dark');
  section1.classList.toggle('dark');
  section3.classList.toggle('dark');
  section4.classList.toggle('dark');

});

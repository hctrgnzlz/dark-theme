
document.addEventListener("DOMContentLoaded", function() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  var button = document.querySelector('button');

  themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  
  // Toggle the icon on the button
  if (body.classList.contains('dark-theme')) {
    button.innerHTML = 'Light Theme <i class="fas fa-sun"></i>';
  } else {
    button.innerHTML = 'Dark Theme <i class="fas fa-moon"></i>';
  }
});
  });
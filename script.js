// Mobile menu toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');

  menuToggle.addEventListener('click', function () {
    nav.classList.toggle('open');
    menuToggle.classList.toggle('open');
  });

  // Optional: Close the menu when a nav link is clicked (only for mobile UX)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 768 && nav.classList.contains('open')) {
        nav.classList.remove('open');
        menuToggle.classList.remove('open');
      }
    });
  });

  // Optional: Responsive adjustment on window resize
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      nav.classList.remove('open');
      menuToggle.classList.remove('open');
    }
  });
});

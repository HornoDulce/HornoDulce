// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Control del menú para móviles
  const toggleBtn = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.menu');

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }
});

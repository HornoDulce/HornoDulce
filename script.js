document.addEventListener('DOMContentLoaded', () => {
  // Aquí podrías controlar dinámicamente la disponibilidad con JS en el futuro
  // Por ahora, edita manualmente el texto en cada .status

  // Control del menú para móviles
  const toggleBtn = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.menu');

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }
});


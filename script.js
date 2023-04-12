// Obtém o botão para alternar o tema claro e escuro
const themeButton = document.querySelector('.toggle-theme');

// Obtém todos os links da navegação
const navLinks = document.querySelectorAll('.nav-link');

// Alterna entre tema claro e escuro quando o botão é clicado
themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// Adiciona uma classe 'active' ao link de navegação que foi clicado
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    link.classList.add('active');
  });
});

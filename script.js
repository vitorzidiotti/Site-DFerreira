document.querySelectorAll('.Venda button').forEach(button => {
  button.addEventListener('click', () => {
    alert('Mais informações em breve!');
  });
});


const toggleTheme = document.getElementById('toggleTheme');

toggleTheme.addEventListener('click', () => {
document.body.classList.toggle('dark-mode');
toggleTheme.textContent = document.body.classList.contains('dark-mode') ? '☀' : '🌙';
});


const backToTopButton = document.getElementById('backToTop');

// Exibir o botão quando o usuário rolar para baixo
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
      backToTopButton.style.display = 'block';
  } else {
      backToTopButton.style.display = 'none';
  }
});

// Voltar ao topo quando o botão for clicado
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



//  Adicione uma classe para o tema escuro
const darkModeStyles = `
  body.dark-mode {
    background-color: #333;
    color: #fff;
  }
  body.dark-mode .container {
    background: linear-gradient(0deg, #555 0%, #222 100%);
  }
  body.dark-mode button {
    background: #555;
    color: white;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = darkModeStyles;
document.head.appendChild(styleSheet);

// Abri menu hamburguer
document.querySelector(".menu-toggle").addEventListener("click", function() {
  const menu = document.querySelector(".lista_menu");
  menu.classList.toggle("mostrar");
});
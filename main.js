// função para selecionar elementos
const selectElement = (s) => document.querySelector(s);

// abre o menu ao clicar
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

// fecha o menu ao clicar
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});

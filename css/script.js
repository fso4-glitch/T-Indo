console.log("Tô Indo carregado");

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Clique no botão');
    });
});
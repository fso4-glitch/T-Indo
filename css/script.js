console.log("Site carregado");

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Botão clicado');
    });
});
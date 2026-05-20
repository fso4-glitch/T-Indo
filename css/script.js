console.log("Site carregado");

// exemplo de interação
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Botão clicado');
    });
});
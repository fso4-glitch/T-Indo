console.log("Tô Indo carregado com sucesso 🚗");

// efeito leve ao clicar
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log("Redirecionando para a Play Store...");
    });
});
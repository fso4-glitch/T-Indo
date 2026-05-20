console.log("Tô Indo carregado 🚗");

document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll(".btn");

    botoes.forEach(btn => {
        btn.addEventListener("click", () => {
            console.log("Redirecionando para Play Store...");
        });
    });
});
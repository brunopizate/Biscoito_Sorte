document.addEventListener("DOMContentLoaded", function () {
    const botaoBiscoito = document.getElementById("biscoito");
    const mensagemSorte = document.getElementById("mensagem");
    const gameWrapper1 = document.querySelector(".game-wrapper");
    const gameWrapper2 = document.querySelector(".game-wrapper2");

    // Array de mensagens de sorte
    const mensagensDaSorte = [
        "A sorte está ao seu lado hoje!",
        "Grandes oportunidades estão chegando.",
        "Seja paciente; tudo acontecerá no momento certo.",
        "Sorria e o mundo sorrirá de volta para você.",
        "Acredite em si mesmo e siga em frente."
    ];

    // Função para gerar mensagem aleatória
    function sorte() {
        const randomIndex = Math.floor(Math.random() * mensagensDaSorte.length);
        return mensagensDaSorte[randomIndex];
    }

    // Evento de clique no botão
    botaoBiscoito.addEventListener("click", function () {
        const mensagemAleatoria = sorte();
        mensagemSorte.textContent = mensagemAleatoria;

        // Alternar entre as telas
        gameWrapper1.classList.add("hide");
        gameWrapper2.classList.remove("hide");
    });

    // Evento de clique no botão "Abrir outro"
    const abrirOutroBiscoito = document.querySelector(".open-biscuit");
    abrirOutroBiscoito.addEventListener("click", function () {
        gameWrapper1.classList.remove("hide");
        gameWrapper2.classList.add("hide");
    });
});

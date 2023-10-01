const botoes = SelecionarTdsBotoes();

const personagem = SelecionarTdsPersonagem(); 

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        DesselecionarBotoes();

        SelecionarBotoes(botao);

        DesselecionarPersonagem();

        SelecionarPersonagem(indice);

    });
});

















function SelecionarTdsBotoes() {
    return document.querySelectorAll('.botao');
}
    function SelecionarTdsPersonagem() {
        return document.querySelectorAll('.personagem');
    }

    function DesselecionarBotoes() {
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");
    }

    function SelecionarBotoes(botao) {
        botao.classList.add("selecionado");
    }

    function DesselecionarPersonagem() {
        const personagemSeleciona = document.querySelector(".personagem.selecionado");
        personagemSeleciona.classList.remove("selecionado");
    }

    function SelecionarPersonagem(indice) {
        personagem[indice].classList.add("selecionado");
    }



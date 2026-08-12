document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('btnAcao');
    const mensagem = document.getElementById('mensagem');

    botao.addEventListener('click', () => {
        mensagem.classList.toggle('hidden');
    });
});

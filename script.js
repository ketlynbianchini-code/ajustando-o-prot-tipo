document.addEventListener('DOMContentLoaded', () => {
    const actionBtn = document.getElementById('actionBtn');
    const feedbackMessage = document.getElementById('feedbackMessage');

    actionBtn.addEventListener('click', () => {
        // Altera o estado do botão para indicar carregamento
        actionBtn.textContent = 'Processando...';
        actionBtn.style.opacity = '0.7';
        actionBtn.disabled = true;

        // Simula o tempo de resposta do sistema (1 segundo)
        setTimeout(() => {
            actionBtn.textContent = 'Executar Ação';
            actionBtn.style.opacity = '1';
            actionBtn.disabled = false;

            // Exibe a mensagem de confirmação
            feedbackMessage.classList.remove('hidden');
        }, 1000);
    });
});

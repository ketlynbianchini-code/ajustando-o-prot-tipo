document.addEventListener('DOMContentLoaded', () => {
    const actionBtn = document.getElementById('actionBtn');
    const btnText = actionBtn.querySelector('.btn-text');
    const feedbackMessage = document.getElementById('feedbackMessage');

    actionBtn.addEventListener('click', () => {
        // Feedback visual de carregamento
        btnText.textContent = 'Processando...';
        actionBtn.disabled = true;

        // Oculta feedback anterior se estiver visível
        feedbackMessage.classList.add('hidden');

        // Simula o tempo de resposta da ação (1 segundo)
        setTimeout(() => {
            btnText.textContent = 'Executar Ação';
            actionBtn.disabled = false;

            // Exibe o feedback de sucesso
            feedbackMessage.classList.remove('hidden');
        }, 1000);
    });
});

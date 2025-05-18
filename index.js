function next(faseAtual) {
  const index = faseAtual - 1;
  const input = document.getElementById(`q${index}`);
  const resposta = input ? input.value.trim() : null;
  if (!resposta) {
    alert("Responda antes de continuar!");
    return;
  }

  respostas[index] = resposta;

  const atual = document.getElementById(`fase${index}`);
  const proxima = document.getElementById(`fase${faseAtual}`);

  atual.style.opacity = 0;
  setTimeout(() => {
    atual.classList.add("hidden");
    if (proxima) {
      proxima.classList.remove("hidden");
      proxima.style.opacity = 0;
      setTimeout(() => proxima.style.opacity = 1, 50);
    } else {
      // Última fase, envia as respostas
      enviarRespostas();
    }
  }, 300);
}
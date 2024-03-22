// Estratégia: colaborar na primeira rodada, depois repetir a ação do oponente
export function estrategiaColaborarPrimeiraRodada (ultimoJogador) {
  if (ultimoJogador.length === 0) {
      return true; // Colaborar na primeira rodada
  } else {
      return ultimoJogador[ultimoJogador.length - 1]; // Repetir ação do oponente
  }
}
export function estrategiaFalharPrimeiraRodada(ultimoJogador) {
  if (ultimoJogador.length === 0) {
      return false; // Falhar na primeira rodada
  } else {
      return true; // Sempre colaborar após a primeira rodada
  }
}
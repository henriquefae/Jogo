export function estrategiaBruno(ultimasJogadasDoOponente) {
  if (ultimasJogadasDoOponente.length === 0) {
      return false;
  } else {
      return !ultimasJogadasDoOponente[ultimasJogadasDoOponente.length - 1];
  }
}
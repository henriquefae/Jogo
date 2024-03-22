export function estrategiaColaborarPrimeiroERepetir (ultimasJogadasDoOponente) {
  if (ultimasJogadasDoOponente.length === 0) {
      return true;
  } else {
      return ultimasJogadasDoOponente[ultimasJogadasDoOponente.length - 1];
  }
}
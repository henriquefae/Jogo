export function estrategiaColaborarPrimeiroLais (ultimasJogadasDoOponente) {
    if (ultimasJogadasDoOponente.length === 2) {
        return false;
    } else {
        return ultimasJogadasDoOponente[ultimasJogadasDoOponente.length - 1];
    } 
  } 
export function estrategiaOrlando (ultimasJogadasDoOponente) {
  if (Math.random() < 0.75) {
      return false;
  } else {
      return ultimasJogadasDoOponente[ultimasJogadasDoOponente.length - 3];
  } 
}
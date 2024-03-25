export function henrique (ultimasJogadasDoOponente) {
  if (ultimasJogadasDoOponente.length < 2) {
    return false;
  } 
  if (ultimasJogadasDoOponente.length <= 4) {
    return true;
  }
  if (
    ultimasJogadasDoOponente[ultimasJogadasDoOponente.length - 1] === false ||
    ultimasJogadasDoOponente[ultimasJogadasDoOponente.length - 2] === false
  ) {
    return false;
  } else {
    return true;
  }
}
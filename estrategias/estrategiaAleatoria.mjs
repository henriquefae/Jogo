export function estrategiaAleatoria (ultimasJogadasDoOponente) {
  if (Math.random() < 0.5) {
      return true; 
  } else {
      return false;
  }
}
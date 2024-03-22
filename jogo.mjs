import {estrategiaColaborarPrimeiraRodada} from "./estrategias/EstrategiaExemplo1.mjs";
import {estrategiaFalharPrimeiraRodada} from './estrategias/EstrategiaExemplo2.mjs';

function jogoDaBlow(estrategiaJogador1, estrategiaJogador2) {
  let moedasJogador1 = 0;
  let moedasJogador2 = 0;

  const historicoDecisoesJogador1 = [];
  const historicoDecisoesJogador2 = [];

  for (let rodada = 0; rodada < 200; rodada++) {
    const decisaoJogador1 = estrategiaJogador1(historicoDecisoesJogador2);
    const decisaoJogador2 = estrategiaJogador2(historicoDecisoesJogador1);

    historicoDecisoesJogador1.push(decisaoJogador1);
    historicoDecisoesJogador2.push(decisaoJogador2);

    if (decisaoJogador1 && decisaoJogador2) {
      moedasJogador1 += 3;
      moedasJogador2 += 3;
    } else if (!decisaoJogador1 && !decisaoJogador2) {
      moedasJogador1 += 1;
      moedasJogador2 += 1;
    } else if (!decisaoJogador1 && decisaoJogador2) {
      moedasJogador1 += 5;
    } else {
      moedasJogador2 += 5;
    }
  }

  const nomeEstrategiaJogador1 = estrategiaJogador1.name;
  const nomeEstrategiaJogador2 = estrategiaJogador2.name;

  return {
    [nomeEstrategiaJogador1]: moedasJogador1,
    [nomeEstrategiaJogador2]: moedasJogador2
  };
}

// Exemplo de utilização
const resultado = jogoDaBlow(
  estrategiaColaborarPrimeiraRodada, estrategiaFalharPrimeiraRodada
);
console.log(resultado);

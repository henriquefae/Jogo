import {estrategiaColaborarPrimeiroERepetir} from "./estrategias/estrategiaColaborarPrimeiroERepetir.mjs";
import {estrategiaFalharApenasNaPrimeira} from './estrategias/estrategiaFalharApenasNaPrimeira.mjs';
import { estrategiaAleatoria } from "./estrategias/estrategiaAleatoria.mjs";
import { henrique } from './estrategias/henrique.mjs';
import { estrategiaVitor } from "./estrategias/estrategiaVitor.mjs";
import { estrategiaOrlando } from "./estrategias/orlando.mjs";
import { estrategiaBruno } from './estrategias/estrategiaBruno.mjs';
import { estrategiaColaborarPrimeiroLais } from './estrategias/estrategiaLais.mjs';

function jogoDaBlow(estrategiaJogador1, estrategiaJogador2, quantRodadas) {
  let moedasJogador1 = 0;
  let moedasJogador2 = 0;

  const historicoDecisoesJogador1 = [];
  const historicoDecisoesJogador2 = [];

  for (let rodada = 0; rodada < quantRodadas; rodada++) {
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

  return {
    [estrategiaJogador1.name]: moedasJogador1,
    [estrategiaJogador2.name]: moedasJogador2
  };
}

// Teste 1 jogo
// const resultado = jogoDaBlow(
//   estrategiaFalharApenasNaPrimeira, estrategiaAleatoria, quantRodadas
// );
// console.log(resultado);

function campeonatoDaBlow (arrayDeEstrategias, quantRodadas) {
  const resultadosAcumulados = new Array(arrayDeEstrategias.length).fill(0);

  //todos jogadores jogam entre si e consigo mesmo 1 vez, sem repetição
  for (let i = 0; i < arrayDeEstrategias.length; i++) {
    for (let j = i; j < arrayDeEstrategias.length; j++) {
      const resultado = Object.values(
        jogoDaBlow(arrayDeEstrategias[i], arrayDeEstrategias[j], quantRodadas)
      );

      if (i !== j) {
        resultadosAcumulados[i] += resultado[0];
        resultadosAcumulados[j] += resultado[1];
      } else {
        resultadosAcumulados[i] += resultado[0];
      }
    }
  }

  const placar = resultadosAcumulados.map((resultado, index) => ({
    [arrayDeEstrategias[index].name]: resultado
  }));

  return placar;
}

function multiplosCampeonatosDaBlow (
  arrayDeEstrategias, quantCampeonatos
) {
  let resultadosCampeonatao = new Array(arrayDeEstrategias.length).fill(0);
  const arrayQuantRodadas = [];
  for (let i = 0; i < quantCampeonatos; i++) {
    const quantRodadas = Math.ceil(Math.random() * 800 + 200); //entre 200 e 1000 rodadas
    arrayQuantRodadas.push(quantRodadas);
    const placar = campeonatoDaBlow(
      arrayDeEstrategias, quantRodadas
    );
    for (let j = 0; j < arrayDeEstrategias.length; j++){
      resultadosCampeonatao[j] += Object.values(placar[j])[0];
    }
  }
  const placarCampeonatao = resultadosCampeonatao.map((resultado, index) => ({
    [arrayDeEstrategias[index].name]: resultado
  }));
  
  return {
    arrayQuantRodadas,
    placarCampeonatao
  }
}

const arrayDeEstrategias = [
  estrategiaAleatoria,
  henrique,
  estrategiaVitor,
  estrategiaOrlando,
  estrategiaColaborarPrimeiroLais,
  estrategiaBruno
];
const quantCampeonatos = 5;

const resultado = multiplosCampeonatosDaBlow(arrayDeEstrategias, quantCampeonatos);

console.log("Placar de "+ quantCampeonatos + " campeonatos:");
console.log(resultado.placarCampeonatao);
console.log("Quantidade de cada rodada:");
console.log(resultado.arrayQuantRodadas);
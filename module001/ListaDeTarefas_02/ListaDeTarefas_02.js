const prompt = require("prompt-sync")();

// Exercício 01
prompt = require("prompt-sync")();
let cigarettesPerDay = parseInt(
  prompt("Informe a quantidade de cigarros fumados por dia: ")
);
let years = parseInt(prompt("Informe por quantos anos você fumou: "));

let lostDays = (cigarettesPerDay / 144) * (years * 365);

console.log(
  `Você perdeu ${lostDays.toFixed(
    2
  )} dias de vida por ter fumado ${cigarettesPerDay} cigarros por dia, durante ${years} anos.`
);

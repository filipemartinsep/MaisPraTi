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

// Exercício 02
prompt = require("prompt-sync")();
let speed = parseInt(prompt("Informe a velocidade em km/h: "));

if (speed > 80) {
  let trafficTicket = (speed - 80) * 5;
  console.log(
    `Limite de velocidade excedido! Você foi multado em R$ ${trafficTicket.toFixed(
      2
    )}.`
  );
}

// Exercício 03
prompt = require("prompt-sync")();
let distanceToTravel = parseInt(
  prompt("Informe a distância a ser percorrida em km/h: ")
);
let ticketPrice;
if (distanceToTravel <= 200) {
  ticketPrice = distanceToTravel * 0.5;
} else {
  ticketPrice = distanceToTravel * 0.45;
}

console.log(`O valor da passagem é de R$ ${ticketPrice.toFixed(2)}.`);

// Exercício 04
prompt = require("prompt-sync")();
let straight1 = parseInt(
  prompt("Informe o tamanho do primeiro segmento de reta: ")
);
let straight2 = parseInt(
  prompt("Informe o tamanho do segundo segmento de reta: ")
);
let straight3 = parseInt(
  prompt("Informe o tamanho do terceiro segmento de reta: ")
);

let isTriangle =
  straight1 < straight2 + straight3 &&
  straight2 < straight1 + straight3 &&
  straight3 < straight1 + straight2;

if (isTriangle) {
  console.log("É possível formar um triângulo com essas retas!");
} else {
  console.log("Não é possível formar um triângulo com essas retas!");
}

// Exercício 06
prompt = require("prompt-sync")();
let num = Math.floor(Math.random() * 5 + 1);
let guess = parseInt(
  prompt("O computador escolheu um número entre 1 e 5. Tente adivinhar: ")
);
if (num === guess) {
  console.log("Você acertou!");
} else {
  console.log(`Você errou! O valor era ${num}!`);
}

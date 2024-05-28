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

// Exercício 07
prompt = require("prompt-sync")();
let carType = parseInt(
  prompt("Informe o tipo do carro (1 - Popular, 2 - Luxo): ")
);
let rentalDays = parseInt(
  prompt("Informe quantos dias o carro ficou alugado: ")
);
let kilometersTraveled = parseInt(
  prompt("Informe a quantidade de quilometros percorridos: ")
);
let rent;
if (carType === 1) {
  if (kilometersTraveled <= 100) {
    rent = kilometersTraveled * 0.2;
  } else if (kilometersTraveled > 100) {
    rent = kilometersTraveled * 0.1;
  }
  rent += rentalDays * 90;
} else if (carType === 2) {
  if (kilometersTraveled <= 200) {
    rent = kilometersTraveled * 0.3;
  } else if (kilometersTraveled > 200) {
    rent = kilometersTraveled * 0.25;
  }
  rent += rentalDays * 150;
}
console.log(`Valor total do aluguel é de R$ ${rent.toFixed(2)}`);

// Exercício 08
prompt = require("prompt-sync")();
let totalOfPoints;
let amount;
let activityHours = parseInt(
  prompt("Informe quantas horas de atividade foram feitas no mês: ")
);

if (activityHours <= 10) {
  totalOfPoints = activityHours * 2;
} else if (activityHours > 10 && activityHours <= 20) {
  totalOfPoints = activityHours * 5;
} else if (activityHours > 20) {
  totalOfPoints = activityHours * 10;
}
amount = totalOfPoints * 0.05;
console.log(
  `Seu total de pontos é de ${totalOfPoints} e o valor em dinheiros desses pontos é de R$ ${amount.toFixed(
    2
  )}`
);

// Exercício 09
prompt = require("prompt-sync")();
let salary;
let gender;
let totalMaleSalary = 0;
let totalFemaleSalary = 0;
let repeat;
do {
  salary = parseFloat(prompt("Informe o sálario: "));
  gender = prompt("Informe o sexo (m - Masculino, f - Feminino): ");

  if (gender === "m" || gender === "M") {
    totalMaleSalary += salary;
  } else if (gender === "f" || gender === "F") {
    totalFemaleSalary += salary;
  }

  repeat = prompt("Quer continuar? (s - Sim, n - Não): ");
} while (repeat === "s" || repeat === "S");

console.log(
  `Total de salários dos homens é de R$ ${totalMaleSalary.toFixed(2)}.`
);
console.log(
  `Total de salários das mulheres é de R$ ${totalFemaleSalary.toFixed(2)}.`
);

// Exercício 10
prompt = require("prompt-sync")();
let value;
let count = 0;
let total = 0;
let smallestValue;
let repeat2;
let pairCounter = 0;
do {
  value = parseFloat(prompt("Informe um número: "));
  if (!smallestValue) {
    smallestValue = value;
  } else {
    if (value < smallestValue) {
      smallestValue = value;
    }
  }
  total += value;
  count++;
  if (value % 2 == 0) {
    pairCounter++;
  }
  repeat2 = prompt("Quer continuar? (s - Sim, n - Não): ");
} while (repeat2 === "s" || repeat2 === "S");
console.log(`O somatório dos valores é de ${total}.`);
console.log(`O menor valor digitado foi o ${smallestValue}.`);
console.log(`O média dos valores foi de ${(total / count).toFixed(2)}.`);
console.log(`Total de valores pares digitados foi de ${pairCounter}.`);

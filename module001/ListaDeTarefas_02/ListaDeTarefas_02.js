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

// Exercício 11
prompt = require("prompt-sync")();

let firstTerm = parseInt(prompt("Informe o primeiro termo da P.A.: "));
let commonDifference = parseInt(prompt("Informe a razão da P.A.: "));
let listOfTerms = [];

for (let i = 1; i <= 10; i++) {
  let nhtTerm = firstTerm + (i - 1) * commonDifference;
  listOfTerms.push(nhtTerm);
}

let sumOfTerms =
  ((firstTerm + listOfTerms[listOfTerms.length - 1]) * listOfTerms.length) / 2;
console.log(`Os dez primeiros termos da PA é igual à [${listOfTerms}].`);
console.log(`A soma dos dez primeiros termos da PA é igual à ${sumOfTerms}.`);

// Exercício 12
let numA = 1;
let numB = 1;
let numC;
let sequence = [];

for (let i = 0; i < 10; i++) {
  sequence.push(numA);
  numC = numA + numB;
  numA = numB;
  numB = numC;
}

console.log(sequence.join(", "));

// Exercício 13
let fibonacciSequence = function (n) {
  let fibonacci = [];
  fibonacci[0] = 1;
  fibonacci[1] = 1;

  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci;
};

console.log(fibonacciSequence(15));

// Exercício 14
prompt = require("prompt-sync")();

let name;
let listOfNames = [];

for (let i = 1; i <= 7; i++) {
  name = prompt(`Informe o ${i}º nome: `);
  listOfNames.push(name);
}

console.log(`Lista de ordem inversa - [${listOfNames.reverse()}].`);

// Exercício 15
prompt = require("prompt-sync")();

let IntNumber;
let listOfNumbers = [];

for (let i = 1; i <= 10; i++) {
  listOfNumbers.push(parseInt(prompt(`Informe o ${i}º número inteiro: `)));
}

for (let i = 0; i < 10; i++) {
  if (listOfNumbers[i] % 2 === 0) {
    console.log(`O número ${listOfNumbers[i]} é par e é o ${i + 1}º da lista.`);
  }
}

// Exercício 16
let listOfRandomNumbers = [];

for (let i = 0; i < 20; i++) {
  let randomNumber = Math.floor(Math.random() * 99);
  listOfRandomNumbers.push(randomNumber);
}

console.log(`Números gerados - [${listOfRandomNumbers}].`);
console.log(
  `Números ordenados - [${listOfRandomNumbers.sort((a, b) => a - b)}].`
);

//Exercício 17
prompt = require("prompt-sync")();

let vectorNames = [];
let vectorAges = [];
let listOfMinor = [];

for (let i = 0; i < 9; i++) {
  vectorNames.push(prompt(`Informe o nome da ${i + 1}ª pessoa: `));
  vectorAges.push(prompt(`Informe a idade da ${i + 1}ª pessoa: `));
}

for (let i = 0; i < vectorAges.length; i++) {
  if (vectorAges[i] < 18) {
    listOfMinor.push(vectorNames[i]);
  }
}

console.log(`Lista das pessoas menores de idade: [${listOfMinor}].`);

// Exercício 18
prompt = require("prompt-sync")();

const employeeData = ["Nome", "Cargo", "Salário"];
const employeeRecord = {};

for (employee of employeeData) {
  employeeRecord[employee] = prompt(`Informe o ${employee} do funcionário: `);
}

// console.log(employeeRecord);

for (let employee in employeeRecord) {
  console.log(`${employee}: ${employeeRecord[employee]}`);
}

// Exercício 19
prompt = require("prompt-sync")();

const times = [];

function isValidTime(time) {
  const timeFormat = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
  return timeFormat.test(time);
}

for (let i = 0; i < 5; i++) {
  let valid = false;
  let time;

  while (!valid) {
    time = prompt(`Informe o ${i + 1}º horário no formato (HH:MM:SS): `);
    if (isValidTime(time)) {
      valid = true;
      times.push(time);
    } else {
      console.log("Formato inválido. Tente novamente!");
    }
  }
}
console.log("Horários: ", times.join(", "));

// Exercício 21
function idealWeight(alt, sexo) {
  let weight;

  if (sexo === "masculino") {
    weight = 72.7 * alt - 58;
  } else if (sexo === "feminino") {
    weight = 62.1 * alt - 44.7;
  }
  return `Seu peso ideal é ${weight.toFixed(2)} Kg.`;
}

console.log(idealWeight(1.85, "masculino"));

// Exercício 22
prompt = require("prompt-sync")();

let employeeRecords = function () {
  let sumSalary = 0;
  let totalchildren = 0;
  let maxsalary = 0;
  const lowSalary = 350;
  let countLowSalary = 0;
  let count = 0;

  while (true) {
    let salary = parseFloat(
      prompt("Informe o salário (ou deixe vazio par terminar): ")
    );

    if (isNaN(salary)) break;

    let children = parseInt(prompt("Informe o número de filhos: "));
    if (isNaN(children)) break;

    sumSalary += salary;
    totalchildren += children;
    count++;

    if (salary > maxsalary) {
      maxsalary = salary;
    }

    if (salary < lowSalary) {
      countLowSalary++;
    }
  }

  if (count === 0) {
    return {
      averageSalary: 0,
      averageChildren: 0,
      maxsalary: 0,
      lowSalaryPercentage: 0,
    };
  }

  let averageSalary = sumSalary / count;
  let averageChildren = totalchildren / count;
  let lowSalaryPercentage = (countLowSalary / count) * 100;

  return {
    averageSalary: averageSalary,
    averageChildren: averageChildren,
    maxsalary: maxsalary,
    lowSalaryPercentage: lowSalaryPercentage,
  };
};

function main() {
  let data = employeeRecords();
  console.log(`Média salarial: R$ ${data.averageSalary.toFixed(2)}.`);
  console.log(`Média de filhos: ${data.averageChildren.toFixed(2)}.`);
  console.log(`Maior salário: R$ ${data.maxsalary.toFixed(2)}.`);
  console.log(
    `Percentual de pessoas com salário até R$ 350,00: ${data.lowSalaryPercentage.toFixed(
      2
    )}%`
  );
}

main();

// Exercício 23
let identityMatrix = function (n) {
  let matrix = [];

  for (let i = 0; i < n; i++) {
    let matrixrow = [];
    for (let j = 0; j < n; j++) {
      matrixrow.push(i === j ? 1 : 0);
    }
    matrix.push(matrixrow);
  }
  for (let row of matrix) {
    console.log(row.join(" "));
  }
};

identityMatrix(7);

// Exercício 24
const exampleMatrix = [
  [1, -3, 13, -14, -15, 0, -1, 9],
  [1, -3, 13, -14, 15, 0, -1, 9],
  [1, 3, 13, -14, 15, 0, -1, 9],
  [1, 3, 13, -14, 15, 0, -1, 9],
  [-1, -3, -13, -14, 15, 0, -1, 9],
  [1, -3, 13, -14, 15, 0, -1, 9],
];

const vectorC = [];

for (let row of exampleMatrix) {
  let counter = 0;
  for (let element of row) {
    if (element < 0) {
      counter++;
    }
  }
  vectorC.push(counter);
}

console.log(vectorC);

// Exercício 25
const matrix15x20 = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 1],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 3],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 4],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 5],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 6],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 7],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 8],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 11],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 12],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 13],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 14],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 15],
];

for (let j = 0; j < matrix15x20[0].length; j++) {
  let sum = 0;
  for (let i = 0; i < matrix15x20.length; i++) {
    sum += matrix15x20[i][j];
  }

  console.log(`A soma dos elementos da ${j + 1}ª coluna é ${sum}.`);
}

// Exercício 26.1 - Matriz Produto (Hadamard) elemento a elemento
const A = [
  [10, 4, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 8, 13, 4, 1],
];

const B = [
  [2, 6, 4, 5, 6],
  [7, 10, 9, 10, 11],
  [2, 1, 4, 15, 20],
];

const AxB = [];

for (let i = 0; i < A.length; i++) {
  let newRow = [];
  for (let j = 0; j < B[0].length; j++) {
    newElement = A[i][j] * B[i][j];
    newRow.push(newElement);
  }
  AxB.push(newRow);
}
for (let row of AxB) {
  console.log(row.join(" "));
}

// Exercício 26.2 - Matriz Produto
const matrixA = [
  [1, 5, 4, 3, 1],
  [3, 2, 5, 3, 1],
  [3, 2, 5, 3, 1],
];

const matrixB = [
  [4, 8, 1],
  [7, 0, 5],
  [4, 8, 1],
  [7, 0, 5],
  [4, 8, 1],
];

if (matrixA[0].length === matrixB.length) {
  for (let i = 0; i < matrixA.length; i++) {
    let newRow = [];
    for (let j = 0; j < matrixB[0].length; j++) {
      let newElement = 0;
      for (let k = 0; k < matrixA[0].length; k++) {
        newElement += matrixA[i][k] * matrixB[k][j];
      }
      newRow.push(newElement);
    }
    console.log(newRow.join(" "));
  }
} else {
  console.log(
    "Número de colunas da primeira matriz deve ser igual ao número de linhas da segunda matriz."
  );
}

// Exercício 27
const matrixM = [];

prompt = require("prompt-sync")();

for (let i = 0; i < 6; i++) {
  const row = [];

  for (let j = 0; j < 6; j++) {
    row.push(
      parseInt(
        prompt(
          `Informe o número da ${i + 1}ª linha da ${j + 1}ª coluna da matriz: `
        )
      )
    );
  }

  matrixM.push(row);
}

let valueA = parseInt(
  prompt("Informe um número para ser multiplicado na matriz: ")
);

let vectorV = [];

for (let i of matrixM) {
  for (let j of i) {
    vectorV.push(j * valueA);
  }
}

console.log(vectorV.join(" "));

// Exercício 28
const matrix10x10 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, -1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

function sumMatrix(matrix10x10) {
  let sumAbove = 0;
  let sumBelow = 0;

  for (let i = 0; i < matrix10x10.length; i++) {
    for (let j = 0; j < matrix10x10[i].length; j++) {
      if (i < j) {
        sumAbove += matrix10x10[i][j];
      } else if (i > j) {
        sumBelow += matrix10x10[i][j];
      }
    }
  }

  let result = `A soma dos elementos acima da diagonal principal é ${sumAbove}.\nA soma dos elementos abaixo da diagonal principal é ${sumBelow}.`;

  return console.log(result);
}

sumMatrix(matrix10x10);

// Exercício 29
const exampleMatrix5x5 = [
  [1, 3, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [2, 1, 1, 1, 1],
  [1, 1, 1, 1, 4],
];

function matrix5x5(matrix) {
  let sumRow4 = 0;
  let sumCol2 = 0;
  let diagonalSum = 0;
  let sumAllElements = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sumAllElements += matrix[i][j];

      if (i === 3) {
        sumRow4 += matrix[i][j];
      }

      if (j === 1) {
        sumCol2 += matrix[i][j];
      }

      if (i === j) {
        diagonalSum += matrix[i][j];
      }
    }
  }
  return {
    "Soma da quarta linha": sumRow4,
    "Soma da segunda coluna": sumCol2,
    "Soma da diagonal principal": diagonalSum,
    "Soma de todos os elementos": sumAllElements,
    "Matriz original": matrix,
  };
}

console.log(matrix5x5(exampleMatrix5x5));

// Exercício 30
const exampleMatrix2 = [
  [1, 3, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [2, 1, 1, 1, 1],
  [1, 1, 1, 1, 4],
];

function sumMatrix(matrix) {
  let vectorSumCol = [];
  let vectorSumRow = [];

  for (let i = 0; i < matrix.length; i++) {
    let sumCol = 0;
    let sumRow = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      sumRow += matrix[i][j];
      sumCol += matrix[j][i];
    }
    vectorSumRow.push(sumRow);
    vectorSumCol.push(sumCol);
  }

  return {
    "Vetor soma das linhas": vectorSumRow,
    "Vetor soma das colunas": vectorSumCol,
    "Matriz original": matrix,
  };
}

console.log(sumMatrix(exampleMatrix2));

// Exercício 31
// Matriz exemplo
const matrixV = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

const intNumberA = 3;
const matrixX = [];

function test(number, matrix) {
  let counterA = 0;
  for (let row of matrix) {
    const matrixrow = [];

    for (let element of row) {
      if (element !== number) {
        matrixrow.push(element);
      } else {
        counterA++;
      }
    }

    matrixX.push(matrixrow);
  }

  return {
    Contador: counterA,
    Matriz: matrixX,
  };
}

console.log(test(intNumberA, matrixV));

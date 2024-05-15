// 1

let calculateLostDays = function (cigarettesPerDay, years) {
  return (cigarettesPerDay / 144) * (years * 365); // resultado em minutos
};

let result = calculateLostDays(10, 3);
console.log(result);

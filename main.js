// let numberDickInAss = "150pie";
// numberDickInAss = Number.parseInt(numberDickInAss);
// console.log("Кількіть хуїв запханих в сраку:", numberDickInAss);

// let salaryInSuckDick = 16578.6548754;
// salaryInSuckDick = Number(salaryInSuckDick.toFixed(3));
// console.log("Зарплата за виконану роботу:", salaryInSuckDick);

let vala = prompt("Введіть рандоме число в діапазоні від 0 до 100");
vala = Number(vala);

// console.log(vala);

let gala = prompt("Введіть рандомне число яке більше ніж попереднє");
gala = Number(gala);

// console.log(gala);

// const result = vala ** gala;
// console.log(result);

let max = gala;
let min = vala;

let result = Math.round(Math.random() * (max - min) + min);

let mass = alert(result);

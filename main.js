// let numberDickInAss = "150pie";
// numberDickInAss = Number.parseInt(numberDickInAss);
// console.log("Кількіть хуїв запханих в сраку:", numberDickInAss);

// let salaryInSuckDick = 16578.6548754;
// salaryInSuckDick = Number(salaryInSuckDick.toFixed(3));
// console.log("Зарплата за виконану роботу:", salaryInSuckDick);

const massege = alert(
  'Вас вітає генератор рандомного числа, для генерації натисніть "Ок" та слідуйте підсказкам '
);

let vala = prompt("Введіть перше число");
vala = Number.parseInt(vala);

// console.log(vala);

let gala = prompt("Введіть друге число яке від'ємне від попереднього");
gala = Number.parseInt(gala);

// console.log(gala);

// const result = vala ** gala;
// console.log(result);

const max = gala;
const min = vala;

const num = Math.round(Math.random() * (max - min) + min);

const result = "Ваше випадкове число: " + num;

const mass = alert(result);

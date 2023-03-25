// задача 1
let userNum = +prompt("Введите число: ");
let power1 = 3;
let cubeNum = (num, power) => {
  return Math.pow(num, power);
};
alert(`Число ${userNum} в кубе равно: ${cubeNum(userNum, power1)}`);
// задача 1
// задача 2
let salary = +prompt("Введите заработную плату без учета налогов: ");
function NDS(salary) {
  if (salary === Number.isNaN(NaN)) {
    alert(`Введите число!`);
  } else {
    salary = salary * 0.87;
  }
  return salary;
}
alert(`Заработная плата с учетом налогов равна: ${NDS(salary)}.`);
// задача 2
// задача 3
let num1 = +prompt("Введите первое число: ");
let num2 = +prompt("Введите второе число: ");
let num3 = +prompt("Введите третье число: ");
let maxNum = (a, b, с) => {
  return Math.max(a, b, с);
};
alert(`Максимальное число: ${maxNum(num1, num2, num3)}`);
// задача 3
// задача 4
let num5 = +prompt("Введите первое число: ");
let num6 = +prompt("Введите второе число: ");
let sum = (a, b) => {
  return a + b;
};
function diff(a, b) {
  if (a > b) {
    return a - b;
  } else if (a < b) {
    return b - a;
  } else {
    return 0;
  }
}
let mult = (a, b) => {
  return a * b;
};
let div = (a, b) => {
  return a / b;
};
alert(`Сумма чисел равна: ${sum(num5, num6)}`);
alert(`Разность чисел равна: ${diff(num5, num6)}`);
alert(`Произведение чисел равно: ${mult(num5, num6)}`);
alert(`Частное чисел равна: ${div(num5, num6)}`);
// задача 4

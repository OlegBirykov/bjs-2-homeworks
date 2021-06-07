'use strict';

// Задача №1

function solveEquation(a, b, c) {
  let arr;
  const D = b ** 2 - 4 * a * c;

  if (D < 0) {
    arr = [];
  } else if (D === 0) {
    arr = [-b / (2 * a)];
  } else {
    arr = [
      (-b + D ** 0.5) / (2 * a),
      (-b - D ** 0.5) / (2 * a)
    ];
  }

  return arr;
}

// Задача №2

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  const nPercent = +percent;
  if (isNaN(nPercent) || (nPercent < 1) || (nPercent > 100)) {
    console.log(`Параметр "процентная ставка" содержит неправильное значение ${percent}\nДопустимый диапазон - число от 1 до 100`);  
    return;
  }
  const P = nPercent / 1200;

  const nContribution = +contribution;
  if (isNaN(nContribution) || (nContribution < 0) || (nContribution > 1e7)) {
    console.log(`Параметр "начальный взнос" содержит неправильное значение ${contribution}\nДопустимый диапазон - число от 0 до 10000000`);
    return;
  }

  const nAmount = +amount;
  if (isNaN(nAmount) || (nAmount < 1) || (nAmount > 1e7)) {
    console.log(`Параметр "общая стоимость" содержит неправильное значение ${amount}\nДопустимый диапазон - число от 1 до 10000000`); 
    return;
  }

  const S = nAmount - nContribution;
  if (S < 0) {
    console.log('Ошибка ввода параметров, общая стоимость не должна превышать начальный взнос');
    return;
  }

  if (isNaN(date.getTime()) || (date.getFullYear() > 2100)) {
    console.log(`Параметр "срок ипотеки" содержит неправильное значение ${date}\nДопустимое значение - до 31.12.2100 включительно`);  
    return;
  }
  const now = new Date();
  const n = (date.getFullYear() - now.getFullYear()) * 12 + date.getMonth() - now.getMonth();

  totalAmount = S * (P + P / (((1 + P) ** n) - 1));
  totalAmount *= n;
  totalAmount = +totalAmount.toFixed(2);

  return totalAmount;
}

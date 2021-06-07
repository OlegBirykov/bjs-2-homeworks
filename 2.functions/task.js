'use strict'

// Задание 1

function getArrayParams(arr) {
  let min,max,sum,avg;

  if (Array.isArray(arr) && arr.length) {
    min = arr[0];
    max = arr[0];
    sum = 0;

    for (const num of arr) {
      min = Math.min(min, num);
      max = Math.max(max, num);
      sum += num;
    }

    avg = (sum / arr.length).toFixed(2);
  }

  return { min:min, max:max, avg:avg };
}

// Задание 2

function worker(arr) {
  let sum;

  if (Array.isArray(arr) && arr.length) {
    sum = 0;
    for (const num of arr) {
      sum += num;
    }
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  if (Array.isArray(arrOfArr) && arrOfArr.length) {
    max = func(arrOfArr[0]);
    for (const arr of arrOfArr) {
      max = Math.max(max, func(arr));
    }
  }
  
  return max;
}

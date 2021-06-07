'use strict'

function compareArrays(arr1, arr2) {
  let result;

  result = arr1.length === arr2.length;
  result &&= arr1.every((item, index) => item === arr2[index]);

  return result;
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter((item) => item > 0)
    .filter((item) => !(item % 3))
    .map((item) => item * 10);

  return resultArr;
}

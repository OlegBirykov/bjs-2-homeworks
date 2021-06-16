'use strict';

function cachingDecoratorNew(func) {
  const cache = [];

  return (...args) => {
    const hash = args.join(',');
    const index = cache.findIndex((item) => item.hash === hash);
    let result;

    if (index !== -1) {
      result = 'Из кэша: ' + cache[index].value;
    } else {
      const value = func(...args);
      cache.push({ hash, value });
      if (cache.length > 5) { 
        cache.shift();
      }
      result = 'Вычисляем: ' + value; 
    }

    console.log(result);
    return result;
  }
}

function debounceDecoratorNew(func, time) {
  let flag = false;
  let timerId;

  return (...args) => {
    console.log(args);
    console.log(flag);
    if (!flag) {
      func(...args);
      flag = true;
    }
    clearTimeout(timerId);
    timerId = setTimeout(() => flag = false, time);
  }
}

function debounceDecorator2(func, time) {
  let flag = false;
  let timerId;
  let count = 0;

  return (...args) => {
    if (!flag) {
      func(...args);
      count++;
      console.log(count);
      flag = true;
    }
    clearTimeout(timerId);
    timerId = setTimeout(() => flag = false, time);
  }
}

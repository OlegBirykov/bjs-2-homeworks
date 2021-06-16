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

function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}

const addThree = (a, b, c) => (a + b + c); 
const upgradedAddThree = cachingDecoratorNew(addThree);
upgradedAddThree(1, 2, 3); 
upgradedAddThree(1, 2, 3); 
upgradedAddThree(2, 2, 3); 
upgradedAddThree(3, 2, 3); 
upgradedAddThree(4, 2, 3); 
upgradedAddThree(5, 2, 3); 
upgradedAddThree(6, 2, 3); 
upgradedAddThree(1, 2, 3); 

const times = [0, 300, 900, 1200, 2300, 4400, 4500];

const sendSignal = (time) => console.log(`Задача 2: сигнал послан - время ${time} мс`); 
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);

times.forEach((item) => setTimeout(() => {
  console.log(`Задача 2: время ${item} мс`);
  upgradedSendSignal(item);
}, item));

times.push(5000, 7500, 8000);

const sendSignal2 = (time) => console.log(`Задача 3: сигнал послан - время ${time} мс`); 
const upgradedSendSignal2 = debounceDecorator2(sendSignal2, 2000);

times.forEach((item) => setTimeout(() => {
  console.log(`Задача 3: время ${item} мс`);
  upgradedSendSignal2(item);
  console.log(`Задача 3: количество вызовов функции - ${upgradedSendSignal2.count}`);
}, item));

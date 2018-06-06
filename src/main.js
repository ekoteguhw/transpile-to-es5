var pasta = 'Spaghetti'; //ES5

const meat = 'Pancetta'; //ES6

let sauce = 'Eggs and cheese'; //ES6

const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;

const SayHi = name => {
  console.log(`Hi, my name is ${name}`);
};
SayHi('Teguh');
const names = ['Eko', 'Teguh', 'Widodo'];
const maps = names.map(name => console.log(name));
const numbers = [1, 4, 6, 34, 67, 32, 5, 67];
const moreThanTen = numbers.filter(number => number > 10);
console.log(moreThanTen);
const sumOfNumbers = numbers.reduce((number1, number2) => number1 + number2);
console.log(sumOfNumbers);

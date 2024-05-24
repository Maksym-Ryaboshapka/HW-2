// 1

const celsius = 17;
const fahrenheit = celsius * (9 / 5) + 32;

console.log(celsius + "°C = " + fahrenheit + "°F");

// 2

const days = 30;
const hours = days * 24;
const minutes = hours * 60;

console.log(
  "У цьому місяці " +
    days +
    " днів " +
    hours +
    " годин та " +
    minutes +
    " хвилин"
);

// 3

const health = 100;
const energy = 100;

console.log("Здоров'я: " + (health - 25) + " Енергія: " + (energy - 43));

// 4

const sum = 734;
const discount = sum * 0.9;

console.log(discount);

// 5

const myNumber = 56.547;
const floorMyNumber = Math.floor(myNumber);

console.log(floorMyNumber);

// 6

const price = "30.50 грн";
const priceValue = Number.parseFloat(price);

console.log(priceValue);

// 7

const elementWidth = "500px";
const elementWidthValue = Number.parseInt(elementWidth);

console.log(elementWidthValue);

// 8

const myNum = 16;
const myNumSqrt = Math.sqrt(myNum);

console.log(myNumSqrt);

// 9

const number = 4;
const string = "7";
const numberToString = number.toString();
const stringToNumber = Number.parseInt(string);

console.log(numberToString, stringToNumber);
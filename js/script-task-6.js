"use strict";
let total = 0;
let input;
const numbers = [];
let sum = 0;

while (input !== null) {
  input = prompt("Введите произвольное число");
  if (!Number.isNaN(Number(input)) && Number(input) > 0) {
    let insNumber = Number(input);
    console.log("insNumber :", insNumber);
    numbers.push(insNumber);
    console.log(numbers);  
  }

}
for(const count of numbers){
      total += count;
    }

alert(`Общая сумма чисел равна ${total}`);


const arr = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
const arrNumb  = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const logItems = function(array) {
  let member;
  for(let i = 0; i < array.length; i +=1){
    console.log(`${i+1} - ${array[i]}`);
  }
return array;
}


console.log(logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));

console.log(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));
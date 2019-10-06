// "use strict";
// 1-й способ=================================

// const formatString = function(string){
//     if(string.length < 39){
//       return string;
//     }
//     else{
//       let formstring = string.substring(0, 39) + '...';
//       return formstring
//     }
// }

//2-й способ==================================
// const formatString = function(string) {
//   let arr = string.split();
//   if (arr[0].length < 40) {
//     return arr.join(" ")
//   } 
//   else {
//     arr = string.split('');
//     arr.splice(39);
//     return arr.join("") + '...'
//   }

// }

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );
// // вернется форматированная строка

"use strict";
const checkForSpam = function(str) {
  const spamWord1 = 'sale';
  const spamWord2 = '[SPAM]';
  const array = str.split(' ');
  if(array.includes(spamWord1) || array.includes(spamWord2)){
    return true
    }
  return false  
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

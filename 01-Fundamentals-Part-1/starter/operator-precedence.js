//# operator precedence

console.log('//#########################//')
console.log('//#### operator precedence ####')
console.log('//#########################//')
console.log('    ')// blank line



//* operator precedence: order of which operators are executed first
//* Order of Precedence: 
//* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

//console.log(now - 1991 > now - 2018); // true
console.log(25 - 10 - 5)
   

let x, y; 
x = y = 25 - 10 - 5;
console.log( x, y); // x = y = 10, x = 10

const avgAge = ageJonas + ageSarah / 2;
console.log(ageJonas, ageSarah, avgAge);

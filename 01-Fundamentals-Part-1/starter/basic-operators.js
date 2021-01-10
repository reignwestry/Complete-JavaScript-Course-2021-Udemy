//# basic operators

console.log('//#########################//')
console.log('//#### let, const, var ####')
console.log('//#########################//')
console.log('    ')// blank line


//Math Operators
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah) //46 19

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 92 4.6 8
// 2 ** 3 means 2 to the power of 3 = 2*2*2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + " " +lastName); //Jonas Schmedtmann


// Assignment Operators
let x = 10 + 5; // 15
x += 10;   // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; //x = x + 1
x--; // x = x - 1
x--;
console.log(x); 


// Comparison Operators
// >, <, >=, <=
console.log(ageJonas > ageSarah);   // is ageJonas greater than ageSarah? = true
console.log(ageSarah >= 18); // Is ageSarah greater or equal to 18? = true

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018); // true


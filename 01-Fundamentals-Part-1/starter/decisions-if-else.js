console.log("//#########################//");
console.log("//#### Taking Decisions: if / else statements ####");
console.log("//#########################//");
console.log("    "); // blank line

let age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
  // if isOldEnough = true
  console.log(`Sarah can start driving license🚗`);
}

age = 15;
if (age >= 18) {
  console.log(`Sarah can start driving license🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  let century = 20;
} else {
    let century = 21;
}
console.log(century);

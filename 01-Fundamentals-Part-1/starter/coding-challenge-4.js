console.log("//#########################//");
console.log("//#### Coding Challenge 4 ####");
console.log("//#########################//");
console.log("    "); // blank line

//////////////////////////////////////////////////
//#     Coding Challenge 4

/*
* Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country,
*  it's usual to tip 15% if the bill value is between 50 and 300. if the value is different, the tip is 20%.
*
*   1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's
*  not allowed to use an if/else statement. (If it's easier for you, you can start with an if/else statement, and
*  then try to convert it to a ternary operator!)
*   2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
*   EXAMPLE: 'The bill was 275, the tip was 41.25, and the total value 316.25'
*
*   TEST DATA: Test for bill values 275, 40 and 430
*
* */

//? TIP CALCULATOR

//dumby data
const bill1 = 275;
const bill2 = 40;
const bill = 430;

//# A) Calculate tip

const tip = bill >= 50 || bill <= 300 ? bill * .15 : bill * .2
console.log( tip )
const totalValue = bill + tip
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${totalValue} `);
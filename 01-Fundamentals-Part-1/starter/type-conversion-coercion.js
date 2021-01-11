console.log("//#########################//");
console.log("//#### Type Conversion & Coercion ####");
console.log("//#########################//");
console.log("    "); // blank line

//# Type Conversion = when we manually convert from one type to another

    const inputYear = '1991';
    console.log(Number(inputYear), inputYear); // 1991 "1991"    Number() converts string to a number
    console.log(Number(inputYear) + 18);    //2009

    console.log(Number('Jonas')); //Nan === Not A Number === actually means invalid number
    console.log(typeof NaN);    //number

    console.log(String(23), 23); //"23", 23  String() == converts a Number to a string

//# Type Coersion = when javascript automatically converts from one type to another

console.log('I am ' + 23 + ' years old'); //auto converts the number to a string 
console.log('I am ' + '23' + ' years old'); 
console.log('23' - '10' - 3); // 10 === auto converts the string to a number
console.log('23' * '2');    //11.5
console.log('23' > '18'); // true


//# GUESS THE OUTPUT

let n = '1' + 1; // 11 === adds two strings
n= n - 1;   // converts to a number then subtracts
console.log(n);

console.log('10' - '4' -'3' - 2 + 5);


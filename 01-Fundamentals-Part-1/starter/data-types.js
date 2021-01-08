//# Data Types

//* Values can only be an OBJECT or a PRIMITIVE

//* PRIMITIVE
// let firstName = 'Jonas'
// let age = 30;

//* OBJECT
let me = {
  name: "Jonas",
};
//* 7 PRIMITIVE Data Types

//*    1) NUMBER: Floating point numbers === Always used for decimals (23.0) and integers
let age = 23;

//*    2) STRINGS: Sequence of characters === Always used for text
let firstName = "Jonas";

//*    3) Boolean: Logical type that can only be TRUE or FALSE === Always used for taking decisions
let fullAge = true;

true; //Boolean
console.log(true);

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

//*    4) Undefined: Value taken by a variable that is not yet defined ("empty value ")
let children;

//*     5) Null : Also means 'empty value'

//*     6) Symbol (ES2015): Value that is unique and cannot be changed [ Not useful for now ]

//*     7) BigInt (ES2020): Larger integers than the Number type can hold

//? Javascript dynamic typing: We do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.

//? Value has a type, not the variable

// typeof === tells the data type
// console.log(typeof true)    // boolean
console.log(typeof javaScriptIsFun); // boolean
console.log(typeof 23); // Number
console.log(typeof "Jonas"); // string

javascriptIsFun = "YES";

let year; //declared variables are defaulted to undefined
console.log(year);
console.log(typeof year); // undefined

year = 1991;
console.log(typeof year);
console.log(typeof null); // object

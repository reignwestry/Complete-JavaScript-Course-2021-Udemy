console.log("//#########################//");
console.log("//#### Taking Decisions: if / else statements ####");
console.log("//#########################//");
console.log("    "); // blank line

///////////////////////////////////////////////////
//# Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code 
you already wrote, and improve it:

1.  Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's 

2.  Use a template string to include the BMI values to the outputs. EXAMPLE: "Mark's BMI (28.3) is higher than John's (23.9) */

//# TEST 1
const markWeight = 75
const markHeight = 1.69

const johnWeight = 85;
const johnHeight = 1.95
// //# TEST 1
// const markWeight = 95
// const markHeight = 1.69

// const johnWeight = 85;
// const johnHeight = 1.95

//# function version
function calcBMI (mass, height) {
    let BMI = mass / height ** 2; 
    return BMI
}

let markBMI = calcBMI(markWeight, markHeight)

let johnBMI = calcBMI(johnWeight, johnHeight)


if (markBMI > johnBMI) {
    console.log(`Mark's BMI(${markBMI}) is higher than John's BMI(${johnBMI})`) // Template Literal
} else {
    console.log(`John's BMI(${johnBMI}) is higher than Marks's BMI(${markBMI})`)
}
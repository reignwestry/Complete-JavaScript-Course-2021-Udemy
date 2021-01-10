//////////////////////////////////
//# Coding Challenge #1

/*
    Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
    BMI = mass / height ** 2 = mass / (height * height).
    (mass in kg and height in meter).

    1. Store Mark's and John's mass and height in variables
    2. Calculate both their BMIs using the formula (you can even impement both versions)
    3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

    TEST DATA 1: Marks weight is 78 kg and is 1.69 m tall.
                    John's weight is 92 kg and is 1.95 m tall.


    TEST DATA 2: Mark's weight is 95 kg and is 1.88 m tall.
                    John's weight is  85 kg and is 1.76 m tall.

*/
//# TEST 1
let markWeight = 78
let markHeight = 1.69

let johnWeight = 92;
let johnHeight = 1.95

//# TEST 2
// let markWeight = 78
// let markHeight = 1.69

// let johnWeight = 92;
// let johnHeight = 1.95

function calcBMI (mass, height) {
    let BMI = mass / height ** 2; 
    return BMI
}
function calcBMI2 (mass, height) {
    let BMI2= mass / (height * height)    
    return(BMI2)
}


console.log("BMI-ONE") 
console.log("Mark", calcBMI(markWeight, markHeight));
console.log("John", calcBMI(johnWeight, johnHeight));

let markHigherBMI = calcBMI(markWeight, markHeight) > calcBMI(johnWeight, johnHeight);
console.log(markHigherBMI) 

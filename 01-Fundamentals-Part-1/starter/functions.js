console.log("//#########################//");
console.log("//#### Functions ####");
console.log("//#########################//");
console.log("    "); // blank line

function logger () {
    //# Code block of instructions
    console.log('My name is Jonas');
}
//# invoke, call, running the function
logger();
logger();
logger();

// function fruitProcessor(parameter, parameter) {
function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}
// fruitProcessor(5, 0) //logs parameters values only
// fruitProcessor(6, 7)

const appleJuice = fruitProcessor(5,2); //MUST BE STORED IN A VARIABLE to log (test + parameters)
console.log(appleJuice);
console.log(fruitProcessor(5,2)); //LOGS (text + parameters)

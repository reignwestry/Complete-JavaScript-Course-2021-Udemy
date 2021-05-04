//# FUNCTIONS  
//#============

/*
    function descriptiveName ((parameter/arguments), (parameter/arguments), .. , ...)
*/                                          

function logger () {
    //body
    console.log('My name is Reign');
}

//Calling / running / invoking function
logger(23);
logger();
logger();

function fruitProcessor( apples, oranges ) {
    console.log(apples, oranges);
     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;   //# STRING LITERAL
     //# STRING LITERALS === strings with variables inside
     return juice;  //? returns values from function passed in " 5, 0"
}
fruitProcessor(5, 0);
const appleJuice = fruitProcessor(5, 0); // saves whole function value to the variable
console.log( appleJuice); //? logs whole string literal
console.log( fruitProcessor(5, 0));//# DID NOT STORE THE VALUE IN A VARIABLE

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


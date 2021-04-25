console.log("//#########################//");
console.log("//#### Equality Operators ####");
console.log("//#########################//");
console.log("    "); // blank line


//# Equality Operators: 
    // === STRICT EQUALITY OPERATOR: only true when all 3 (type, value, boolean) are exactly the same : true DOES NOT TYPE COERCION (DOES NOT CONVERT)
    console.log(18 === 18) //true
    console.log(18 === 19) //true

    // == LOOSE EQUALITY OPERATOR: only true when either values  or boolean are exactly the same
    console.log('18' == 18) //true : converts to a number than compares
    console.log('18' == 19) //false

const age = '18';
if(age === 18) console.log('You just became a adult (STRICT)'); //false
if(age == 18) console.log('You just became a adult (LOOSE)');   //true

//toasts a question and stores the input as a string in favorite
const favorite = Number(prompt("What is your favorite number?"));
console.log('favorite:', favorite);
console.log(typeof favorite);

if(favorite === 23){ // Loose Operator: converts, then compares, returns true; 23 === 23
     console.log(`Cool! ${favorite} is an amazing number!`)
} else if (favorite === 7 ){
    console.log('7 is also a cool number');
} else {
    console.log('Number is not 23 or 7');
}

if(favorite !== 23) { // != NOT (LOOSE OPERATOR) !== (STRICT OPERATOR)
    console.log('Why not 23')
};
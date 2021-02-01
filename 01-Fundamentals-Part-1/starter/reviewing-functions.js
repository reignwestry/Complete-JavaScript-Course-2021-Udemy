console.log("//###########################################//");
console.log("//#### Reviewing Functions ####");
console.log("//#####################################################//");
console.log("    "); // blank line

const calcAge = function(birthYeah){
    return 2037 - birthYeah;
}
const yearsUntilRetirement = function (birthYeah, firstName) {
    
    const age = calcAge(birthYeah);
    const retirement = 65 - age;
    
    if(retirement > 0 ) {
         console.log(retirement);
        return console.log(`${firstName} retires in ${retirement}years`);
    } else {
        return -1; //exits the func
        console.log(`${firstName} retires in ${retirement}years`); //ignored
    }
    return retirement;
    //return `${firstName} retires in ${retirement}years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));   //19
console.log(yearsUntilRetirement(1979, 'Mike')); //-1


//Function declaration === function that can be used before it's declared

//Function Expression === essentially a function value stored in a variable

//Arrow Function === Great for a quick one-line functions. Has no this keyword (more later..)

//THREE WAYS OF WRITING FUNCTION: receive input data, transform data, and then output data
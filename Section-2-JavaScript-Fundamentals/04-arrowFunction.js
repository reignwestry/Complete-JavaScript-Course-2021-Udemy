'use strict';

console.log('//# ARROW FUNCTION ')
console.log('//################# ')

    //* SHORTER AND FASTER TO WRITE


// Function Expression
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah
}

//# ARROW FUNCTION
const calcAge3 = birthYeah => 2021 - birthYeah;
const age3 = calcAge3(1982);
console.log(age3); //46

//# ARROW FUNCTION with MULTIPLE COMMANDS
const yearsUntilRetirement = birthYeah => { 
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1991));

//# ARROW FUNCTION with MULTIPLE PARAMETERS
const yearsUntilRetirement2 = (birthYeah, firstName) => { 
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement2(1991, 'Jonas'));
console.log(yearsUntilRetirement2(1980, 'Bob'));

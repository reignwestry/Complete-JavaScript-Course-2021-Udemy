console.log("//###########################################//");
console.log("//#### Function Expressions vs Function Declarations ####");
console.log("//#####################################################//");
console.log("    "); // blank line


//Function Declaration
function calcAge1 (birthYeah){
    return 2037 - birthYeah;
    //return age;
}
const age1 = calcAge1(1991);
console.log(age1);

//Function Expression
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);



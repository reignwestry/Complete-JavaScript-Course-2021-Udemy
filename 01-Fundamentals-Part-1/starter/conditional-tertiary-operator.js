console.log("//#########################//");
console.log("//#### Conditional (Tertiary) Operator ####");
console.log("//#########################//");
console.log("    "); // blank line

const age = 23;
//# if              THEN                                    ELSE
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

//# if then else statement (One Line)
//# if age >= 18
//#      then(?) console.log('I like to drink wine')
//#      else(:) console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

//# same as above
let drink2;
if(age => 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
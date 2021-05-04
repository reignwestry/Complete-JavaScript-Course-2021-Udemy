console.log('####################################')
console.log('#### For Loop ############')
console.log('####################################')


//# FOR LOOP
//##########

/* 
        + Initial value === starting point ex. 1 or 0
        + logical condition === how it runs through iterations
        + iteration (rep++) === adds 1 to rep after each iteration
        + typeof === show what type of variable in console

        for(initialValue; logical condition;how the loop counts){
            What it does
        }

        2 loop statements
        + continue === exits the current iteration of the loop and continue to the next one
        + break === completly terminate the whole loop
*/

//RUNS 5 times
// for (let rep = 1; rep <= 5; rep++){
//     console.log(`Lifting weights repetition ${rep}🏋️‍♀️`)
// }



//# LOOP THROUGH AN ARRAY

//ARRAY
const jonas = [

    'Jonas',
    'Schmedtmann',
    'teacher',
    ['Micheal', 'Peter', 'Steven'],
    true
]
const types = []; //CREATES empty array

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);

    //# saves new typeof values to new array types
    //types[i] = typeof jonas[i];

    //# alt method
    types.push(typeof jonas[i]);
}

// console.log(types)

const years = [1991, 2007, 1969, 2020];
const ages = [];

// for (let i = 0; i < years.length; i++){
//     ages.push(2037 - years[i]);
//     console.log(ages[i])
// }

//# continue and break

// continue === exits the current iteration of the loop and continue to the next one
// break === completly terminate the whole loop

        console.log("-----------ONLY STRINGS")
for (let i = 0; i < jonas.length; i++) {

    // IF typeof jonas[i] is not a string skip and continue loop
    if (typeof jonas[i] !== 'string') continue;

        console.log(jonas[i], typeof jonas[i]);
        types.push(typeof jonas[i]);
}

console.log("-----BREAK WHEN A NUMBER ---------")
for (let i = 0; i < jonas.length; i++) {

    // IF typeof jonas[i] is a number break(stop) the loop
    if (typeof jonas[i] === 'number') break;

        console.log(jonas[i], typeof jonas[i]);
        types.push(typeof jonas[i]);
}
console.log('###################################')
console.log('# LOOPING BACKWARDS AND LOOPS IN A LOOP #')
console.log('###################################')


//# LOOPING BACKWARDS AND LOOPS IN A LOOP
//#######################################

//ARRAY
const jonas = [
    'Jonas',
    'Schmedtmann',
    '2037-1991',
    'teacher',
    ['Micheal', 'Peter', 'Steven'],
    true
];

// i-- === subtracts by 1

for (let i = jonas.length - 1; i >= 0; i--) {

    console.log(i, jonas[i]);

}

//# Loop INSIDE A LOOP (Multi-Dimensional Loop)
// ############################################

for (let exercise = 1; exercise < 4; exercise++){
    console.log(`------------- Starting exercise ${exercise}`)
    
    for (let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise} Lifting weight repetition ${rep}`)
    }

}
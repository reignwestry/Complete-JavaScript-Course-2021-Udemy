'use strict';

console.log('#####################################################')
console.log('#### Debugging with the Console and Breakpoints ###')
console.log('#####################################################')
/*
   ? PROBLEM: the solution for degrees in Kelvin is incorrect
        ? FIND THE BUG: measurement.value is a string instead of a integer
        ? FIX THE BUG: converted all inputs strings to integers
        ? PREVENT THE BUG:
*/

const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        //FIX()
        // Number() = converts input to a number
        value: Number(prompt('Degrees Celsius'))
    }

    //? DEBUGGING
    // console.log(measurement.value); //? SEE INPUT
    // console.warn(measurement.value); //? CONVERTS TO A Warnings IN THE CONSOLE(IN YELLOW)
    // console.error(measurement.value); //? CONVERTS TO A ERROR IN THE CONSOLE(IN RED)
    console.table(measurement); //? Displays array in a table format IN THE CONSOLE(IN RED)
    console.error(measurement);//? ERROR is that measurement.value is a string instead of a integer

    //parseInt() = converts string to integer
    const kelvin = measurement.value + 273;
    return kelvin;
}

// console.log(`${measureKelvin()} degrees Kelvin`)


/*
    ? DEBUGGING IN THE CONSOLE DEBUGGER 
    ?    1) GO TO THE PAGE WITH THE PROBLEM IN THE LEFT PANEL
    ?    2) ADD A BREAKPOINT ON THE LINE WITH THE PROBLEM BY CLICKING THE LEFT SIDE OF THE LINE NUMBER
    ?    3) RELOAD PAGE
    ?    4) CHECK DATA IN THE RIGHT PANEL

*/



const calcTempAmplitudeBug = function (t1, t2) {
    
    // const arrayOne = ['a', 'b', 'c']
    // const arrayTwo = ['d', 'e', 'f']

    //? .concat = combines multiple arrays or values to a array
    // const arrayThree = arrayOne.concat(arrayTwo)
    // console.log(arrayThree);

    const temps = t1.concat(t2)
    
    let max = 0;
    let min = 0;

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];

        if (typeof curTemp !== 'number') continue; //# if the type of the variable is not a number continue to the next iteration
        
        debugger; //? calls the debugger
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(`MAX: ${max}  MIN: ${min}`)
    console.log(`TEST: ${max}`)
    return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 0, 1]);
// A) Identify
console.log(amplitudeBug);
// Remember, we're gonna use strict mode in all scripts now!
'use strict';


// Problem:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//NOTE 1) Understanding the problem

            //? What is temperature amplitude: 
            //# difference between the highest and lowest in the data set
            //? How to compute the max and min temperatures
            //? What's a sensor error? And what to do when it occurs?


    

//NOTE 2) Breaking up into sub-problem

            //* How to ignore errors?
            //* Find max value in temp array
            //* Find min value in temp array
            //* Subtract min from max temp and return it

const calcAmplitude = function () {
    let lowestNum = 0;
    let highestNum = 0;
    //# A) Identify the lowest number in the data set
    for (let i = 0; i <= temperatures.length; i++){

        if (typeof temperatures[i] === 'string') {
            //# ignore errors
            continue;
            console.log(`temperatures[${i}]: "${temperatures[i]}" is not a integer `);

        } else
        if(lowestNum > temperatures[i]){
            lowestNum = temperatures[i];
            // console.log(lowestNum);
        
        }else if(lowestNum < temperatures[i]) {
            // console.log(`${lowestNum} is lowest`);
        
            //# B) Identify the highest number in the data set
            if (highestNum < temperatures[i]) {
                highestNum = temperatures[i];
                // console.log(`${highestNum} is highest`);
            
            } else if(highestNum > temperatures[i]){
                // console.log(`${highestNum} is highest`);
            }

        }
    }
    console.log(`LowestNum: ${lowestNum}  HighestNum: ${highestNum}`)

    //# C) Get the Range === (Subtract lowest number from the highest number)

    let range = highestNum - lowestNum;
    console.log(`Range: ${range}`)   
}

calcAmplitude(temperatures)

//####################
//# TEACHER's ANSWER #
//####################

/**
    1) Search Google "javascript get max value  in a array"
    2) Check Stackoverflow:
        A) Check the solutions for the one you understand
        B) Implement the solution and adapt it to what you need
 
 */
const temps = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const calcTempAmplitude = function(temps) {
    
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];

        if (typeof curTemp !== 'number') continue; //# if the type of the variable is not a number continue to the next iteration
        
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(`TEST: ${max}`)
    return max - min;
};
calcTempAmplitude([3, 7, 4, 23]);
const amplitude = calcTempAmplitude(temperatures);
console.log(`Amplitude: ${amplitude}`)


// # Problem 2
// Function should recieve 2 arrays of temps

//# 1) Understanding the problem
// With 2 arrays, should we implement functionality twice? NO! just merge two arrays

//# 2) Breaking up into sub-problems
// merge 2 arrays


const calcTempAmplitudeNew = function (t1, t2) {
    
    // const arrayOne = ['a', 'b', 'c']
    // const arrayTwo = ['d', 'e', 'f']

    //? .concat = combines multiple arrays or values to a array
    // const arrayThree = arrayOne.concat(arrayTwo)
    // console.log(arrayThree);

    const temps = t1.concat(t2)
    
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];

        if (typeof curTemp !== 'number') continue; //# if the type of the variable is not a number continue to the next iteration
        
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(`MAX: ${max}  MIN: ${min}`)
    console.log(`TEST: ${max}`)
    return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9,0,1]);
console.log(amplitudeNew);
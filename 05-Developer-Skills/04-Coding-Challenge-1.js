///////////////////////////////////////////////
////#   Coding Challenge #1

/*
    Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

    Example: [17, 21, 23] will print "... 17degreeC in 1 days.... 21 degreesC in 2 days ...23degreesC in 3 days..."

    Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

    Use the problem-solving framework: Understand the problem and break it up into sub-problems!

    TEST DATA 1: [17, 21, 23]
    TEST DATA 1: [12, 5, -5, 0, 4]
*/
//# MY ANSWER
//###########
const testDataOne = [17, 21, 23];
const testDataTwo = [12, 5, -5, 0, 4];

const extendedData = testDataOne.concat(testDataTwo);
// console.log(extendedData);

const myPrintForecast = function (arr) {
    let newString = "";
 
    for (let i = 0; i <= extendedData.length; i++) {

            newString.concat(`${arr[i]} degrees C in ${Number([i])});+1} day ...`);
       
    }
    console.log(newString)
}

myPrintForecast(extendedData);



//# TEACHER'S METHOD
//#=================


//? 1st STEP: Understand the problem
    // - Array transformed to string, separated by ...
    // What is the X days  === (index + 1) === number of array value[i] + 1

//? 2nd Step: Breaking up into sub-problems
   // 0 Transform array into string
    // - Tranform each element to string with degrees C
    // - Strings need to contain day (index + 1)

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const combinedData = data1.concat(data2);
console.log(`${data1[0]}°C ... ${data1[0]}°C ...  ${data1[0]}°C ...`);

const printForecast = function (arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}°C in ${i + 1} days ... `;
    }
    console.log('... ' + str);
};
printForecast(data1);

printForecast(combinedData);
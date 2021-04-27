// OBJECTS INTRO
//#

console.log('OBEJECTS INTRO') 
console.log('##############') 

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven']
]



//Object
const jonas = {

        //Key value pairs
    //# properties: values
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven']
}
console.log(jonas); // displays whole array
console.log(jonas.lastName);    //Schmedtmann
console.log(jonas['lastName'])  //Schmedtmann & //# can change it OR add a result of a function

const nameKey = 'Name';
console.log(jonas['first' + nameKey]); //adds first + Name and calls jonas[firstName]
console.log(jonas['last' + nameKey]);  // calls lastName

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends')
// console.log(jonas[interestedIn]) // adds jonas. + interestedIn THEN calls

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn])
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends ')
// }

//# ADD a properties to object
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

//# Challenge
//# "Jonas has 3 friends, and his best friend is called Micheal"

//  .length counts the number of values in a array

//console.log(jonas.firstName + ' has ' + jonas.friends.length + ' friends, and his best friend is called ' + jonas.friends[0])    //? MY ANSWER
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best frined is call ${jonas.friends[0]}`); //? CORRECT WAY
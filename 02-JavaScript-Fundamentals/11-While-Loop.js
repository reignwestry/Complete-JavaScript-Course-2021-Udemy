console.log('#################')
console.log('### While Loop ###')
console.log('#################')



    //# while loop
let rep = 1;
// while (rep <= 6) {

//     console.log(`Lifting weight repetition ${rep}`)
//     rep++
// }


// Math.trunc() === removes any numbers below the decimal
// Math.random() === picks a random number between 1 and 6
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !==  6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6 ) console.log('Loop is about to end... ')
}
//////////////////////////////////////////
// Coding Challenge #4

/* 
Steven wants to build a very simple tip calculator for whenever he goes eating in a restuarant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement (IF it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (Bill + tip).
Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430
*/
console.log('Tip Calculator');
// const cost = prompt('What is the cost?')
// let cost = 40;
// let cost = 275;
let cost = 430;

function calcTip(cost) {
    let tip;
    // quest;
    tip = cost * .15
    console.log("Your Tip is: $" + tip);

    //# FINISH CONFIGGING SWITCH

    switch(tip){
        case tip > 50 || tip < 100:  //# if day === 'monday' : then follow instructions...
            console.log('Plan course structure');
            console.log('Go to coding meetup')
            break;      //# stop === END the switch statement
        case 'tuesday': //# if 'tuesday' : then ..
            console.log('Prepare theory videos');
            break;
        case 'wednesday':
        //# continues to the thursday instructions
        case 'thursday':
            console.log('Write code examples');
            break;
        case 'friday':
            console.log('Record videos')
        case 'saturday':
        case 'sunday':
            console.log('Enjoy the weekend :?');
            break;
        default:
            console.log('Not a valid day')
    }


}

calcTip(cost);
console.log("//#########################//");
console.log("//#### SWITCH STATEMENTS ####");
console.log("//#########################//");
console.log("    "); // blank line

//# SWITCH STATEMENT
const day = 'wednesday';

switch(day){
    case 'monday':  //# if day === 'monday' : then follow instructions...
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

//# CHALLENGE
    //# CONVERT SWITCH TO IF-ELSE STATEMENT

const dayofweek = 'monday';

if( dayofweek === 'monday') {
    console.log('Plan course structure')
    console.log('Go to coding meetup')
}  else if( dayofweek === 'tuesday') {
    console.log('Prepare theory videos')
} else if( dayofweek === 'wednesday' || dayofweek === 'thursday') {
    console.log('Write code examples')
} else if( dayofweek === 'friday') {
    console.log('Record videos')
} else if( dayofweek === 'saturday' || dayofweek === 'sunday') {
    console.log('Enjoy your weekend :}')
} else {
    console.log( 'Not a valid day');
}
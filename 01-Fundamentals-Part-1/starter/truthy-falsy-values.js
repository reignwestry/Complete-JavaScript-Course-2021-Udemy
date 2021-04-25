console.log("//#########################//");
console.log("//#### Truthy & Falsy Values ####");
console.log("//#########################//");
console.log("    "); // blank line

//# FALSY Values = values that are not exactly false but will become false when we try to convert them in a boolean
// 5 falsy values: 0, '', undefined, null, NaN
//Boolean() = converts to a boolean
console.log(Boolean(0));    //false
console.log(Boolean(undefined));    //false
console.log(Boolean(''));    //false
console.log("  ");



//# TRUTHY Values = values that are not exactly true but will become true when we try to convert them in a boolean
// Any number that is not 0 and any string that is not an empty string when we try to convert them in a boolean
console.log(Boolean(0));

console.log(Boolean('Jonas'));  //true
console.log(Boolean({}));   // {empty object} = true

const money = 0; // false
if(money){  //if money = true 
    console.log("Don't spend it all ;)");
}else {
    console.log('You should get a job');
}

let height; //undefined === falsy value
let height = 123; //defined === truthy value

if(height){ //if height is true
    console.log('YAY! Height is defined')
} else {
    console.log('Height is undefined')
}
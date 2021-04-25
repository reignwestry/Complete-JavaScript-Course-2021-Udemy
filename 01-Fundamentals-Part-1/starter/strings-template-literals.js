console.log('//#####################################//')
console.log('//#### Strings & Template Literals ####//')
console.log('//#####################################//')
console.log('    ')// blank line




const firstName = 'Jonas' 
const job = 'teacher'
const birthYear = 1991;
const year = 2037
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas) // I'm Jonas, a 46 years old teacher!

//# TEMPLATE STRING === how you should embed variables into strings
//  `blah blah blah`  = template string
// ${javascriptVariable} = string literal === embedded variables
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`; // TEMPLATE STRING
console.log( jonasNew);
console.log( `Just a string ...`);

//MULTI-LINE STRING
console.log(`String with \n\
multiple \n\
lines
`)// empty line

//NEW WAY to write multi-line strings
console.log(`String
multiple
lines`)
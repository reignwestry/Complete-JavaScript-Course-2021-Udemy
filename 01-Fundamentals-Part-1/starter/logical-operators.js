console.log("//#########################//");
console.log("//#### Logical Operators ####");
console.log("//#########################//");
console.log("    "); // blank line


const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); // AND true
console.log(hasDriversLicense || hasGoodVision); // OR true
console.log(!hasDriversLicense); // NOT true
console.log(!hasGoodVision); // NOT true

const shouldDrive = hasDriversLicense && hasGoodVision;

// if(hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!')
// } else { console.log('Someone else should drive...')}

const isTired = true; //
console.log(hasDriversLicense && hasGoodVision && isTired); //true
if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sara is able to drive!')
} else {
    console.log('Someone else should drive...')
}


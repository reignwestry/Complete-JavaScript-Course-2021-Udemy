console.log('Object Methods')
console.log('###############')

const jonas = {

    //Key value pairs
    //# properties: values
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven'],
    hasDriversLicense: true,

    //function value ( expression )
    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);  // logs the objects key value pairs or properties
    //     return 2037 - this.birthYear;
    // }

    // this ==> 'this' keyword means this object //# A generic way of referencing the objectName 'jonas'

    //# METHODS
    //##########
    calcAge: function () {
        this.age = 2037 - this.birthYear;

        return this.age; // creates & saves in jonas.age
    },

    getSummary: function () {

        // if (this.hasDriversLicense) {
        //     this.license =` has a driver's license.`
        // }
        // else {
        //     this.license = `does not have a driver's license`
        // }

        return `${this.firstName} is a ${ this.calcAge() }-year old teacher, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(jonas.calcAge());   // 46
// console.log(jonas['calcAge'](1991)); //ALT
console.log(jonas.age);

//! Challenge 
// "Jonas is a 46-year old teacher, and he has a driver's license";
console.log(jonas.getSummary())
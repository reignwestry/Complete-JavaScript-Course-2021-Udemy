console.log('####################################')
console.log('#### Coding Challenge 3 ############')
console.log('####################################')

/*

    Let's go back to Mark and John comparing their BMI's!
    This time, let's use objects to implement the 
    calculations! Remember: BMI = mass / height ** 2 = 
    mass / (height * height). (mass in kg and height in meter)

    1. For each of them, create an object with properties
     for their full name, mass and height (Mark Miller and John Smith)
     
    2. Create a `calcBMI` method on each object to 
    calculate the BMI (the same method on both objects).
    Store the BMI value to a property, and also return it from the method.

    3. Log to the console who has the higher BMI, 
    together with the full name and the respective BMI.
    Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

    TEST DATA: Marks weights 78kg and is 1.69 m tall.
    John weights 92 kg and is 1.95 m tall.
*/

//object
const mark = {
    fullName: 'Mark Miller',
    Mass: 78,
    Height: 1.69,

    calcBMI: function () {
        this.BMI = this.Mass / (this.Height / this.Height)
        return this.BMI
    }
}
// console.log(mark.calcBMI()) // 78

const john = {
    fullName: 'John Smith',
    Mass: 92,
    Height: 1.95,

        calcBMI: function () {
        this.BMI = this.Mass / (this.Height / this.Height)
        return this.BMI
    }
}

// if (mark.calcBMI() < john.calcBMI()) {
//     console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})`)
// } else {
//     console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`)
// }

//Terniary  ALTERNATIVE METHOD
mark.calcBMI() < john.calcBMI() ?
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})`) :
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`)
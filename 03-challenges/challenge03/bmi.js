/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
Your tasks:
1. Foreachofthem,create an object with properties for their fullname, mass, and height (Mark Miller and John Smith)
2. Createa'calcBMI'method on each object to calculate the BMI (thesame method on both objects). Store the BMI value to a property, and also return it from the method
3. Log to the console who has the higher BMI,togethe with the full name and the respective BMI. Example:

"John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
*/

'use strict';

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function (mass, height) {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function (mass, height) {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();

console.log((john.bmi > mark.bmi)
    ?
    `${john.fullName}'s BMI (${john.bmi}) is higher thank ${mark.fullName}'s BMI (${mark.bmi})!`
    :
    `${mark.fullName}'s BMI (${mark.bmi}) is higher thank ${john.fullName}'s BMI (${john.bmi})!`);

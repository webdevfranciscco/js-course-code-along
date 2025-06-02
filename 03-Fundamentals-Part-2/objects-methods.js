
const jonasObject = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function (birthYear) {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    /* My code:
    
        logNameAndLicenseStatus: function () {
            if (this.hasDriversLicense) {
                licenseStatus = 'a';
            } else licenseStatus = 'no';
    
            return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${licenseStatus} driver's license.`;
        }
    
    */

    //  The teacher's code (better, shorter)

    logNameAndLicenseStatus: function () {


        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }

};

// Challenge

// Produce the statement:

// "Jonas is a 46 year old teacher, and he has a/no driver's license"

// with a new method on the jonasObject using the object's data

console.log(jonasObject.logNameAndLicenseStatus());

// Engineer must have:
// - All employee things
//  - school
//  -getSchool()
// - getRole() - overridden to return Intern

const Employee = require(`./employee`);
class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.role = `Intern`;
        this.school = school;
    }
    getSchool() {
        //console.log(`Intern's School: ${this.school}`);
        return this.school;   
    }
}

module.exports = Intern
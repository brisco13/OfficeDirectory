// Engineer must have:
// - All employee things
//  - school
//  -getSchool()
// - getRole() - overridden to return Intern

const employee = require(`./employee`);
class Intern extends employee {
    constructor (school) {
        this.school = school;
        super(role);
        this.role = `Intern`
    }
    getGit() {
        console.log(`Intern's School: ${this.school}`);
        return this.school;   
    }
}
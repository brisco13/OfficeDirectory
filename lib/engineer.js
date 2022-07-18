// Engineer must have:
// - All employee things
//  -github
//  -getGithub()
// - getRole() - overridden to return Engineer

const Employee = require(`./employee`);
class Engineer extends Employee {
    constructor (name, id, email, git) {
        super(name, id, email);
        this.role = `Engineer`;
        this.git = git;
    }
    getGit() {
        //console.log(`Engineer's Github: ${this.git}`);
        return this.git;   
    }
}

module.exports = Engineer
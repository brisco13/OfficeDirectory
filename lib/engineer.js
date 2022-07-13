// Engineer must have:
// - All employee things
//  -github
//  -getGithub()
// - getRole() - overridden to return Engineer

const employee = require(`./employee`);
class Engineer extends employee {
    constructor (git) {
        this.git = git;
        super(role);
        this.role = `engineer`
    }
    getGit() {
        console.log(`Engineer's Github: ${this.git}`);
        return this.git;   
    }
}
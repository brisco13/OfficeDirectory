// Manager must have:
// - All employee things
// - office number
// - getRole() - overridden to return Manager

const employee = require(`./employee`);
class Manager extends employee {
    constructor (office) {
        this.office = office;
        super(role);
        this.role = `Manager`
    }
    getOffice() {
        console.log(`Manager's Office: ${this.office}`);
        return this.office;   
    }
}
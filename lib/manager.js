// Manager must have:
// - All employee things
// - office number
// - getRole() - overridden to return Manager

const Employee = require(`./employee`);
class Manager extends Employee {
    constructor (name, id, email, office) {
        super(name, id, email);
        this.role = "Manager";
        this.office = office;
    }
    getOffice() {
        //console.log(`Manager's Office: ${this.office}`);
        return this.office;   
    }
}

module.exports = Manager
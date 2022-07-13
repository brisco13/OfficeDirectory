// Employee must have:
// - name
// - id 
// - email
// - getName()
// - getID()
// - getEmail()
// - getRole()

class Employee {
    // constructor of employee parameters
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee"
    }
    //functions
    getName () {
        console.log(`Employee's Name: ${this.name}`);
        return this.name;
    }
    getID () {
        console.log(`Employee's ID: ${this.id}`);
        return this.id;
    }
    getEmail () {
        console.log(`Employee's Email: ${this.email}`);
        return this.email;
    }
    getRole () {
        console.log(`Employee's role: ${this.role}`);
        return this.role;
    }

}
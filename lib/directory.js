// facilitate prompting for roles and compiling information - hands off to src/pageGenerator.js to make the html/css
//class requirements
const Manager = require(`./manager`);
const Engineer = require(`./engineer`);
const Intern = require(`./intern`);
//module requirements
const inquirer = require(`inquirer`);
const writeToFile = require(`../src/generateHTML.js`)

//all employee questions
//manager prompt questions
const managersQs = [
    {   type: `input`,
        name: 'name',
        message: "Hello! What is your name?"},
    {   type: `input`,
        name: 'id',
        message: "What is your ID numer?"},
    {   type: `input`,
        name: 'email',
        message: "What is your email?"},
    {   type: `input`,
        name: 'office',
        message: "What is your office number?"}
];
//prompt to add more employees?
//this can be a single line
const promptQ = [
    {
        type: 'list',
        name: 'type',
        message: "Thank you for your addition! is there anyone else you'd like to add?",
        choices: ["Engineer","Intern","That's my team, I'm done!"]
    },
];

//engineer prompt questions
const engineerQs = [
    {   type: `input`,
        name: 'name',
        message: "What is their name?"},
    {   type: `input`,
        name: 'id',
        message: "What is their ID numer?"},
    {   type: `input`,
        name: 'email',
        message: "What is their email?"},
    {   type: `input`,
        name: 'git',
        message: "What is their Github username?"}   
];

//intern prompt questions
const internQs = [
    {   type: `input`,
        name: 'name',
        message: "What is their name?"},
    {   type: `input`,
        name: 'id',
        message: "What is their ID number?"},
    {   type: `input`,
        name: 'email',
        message: "What is their email?"},
    {   type: `input`,
        name: 'school',
        message: "What school do they attend?"}   
];


class Directory {
constructor (team) {
//make Team array to fill
this.team = [];}

// if team is complete, call html generator

addManager() {
    inquirer
        .prompt(managersQs)
        .then((res) => {
            if (res.name && res.id && res.email && res.office) {
                const newManager = new Manager(res.name, res.id, res.email, res.office);
            this.team.push(newManager);
            this.addAnother();
            } else {
            console.info("Looks like you forgot an input - please try again!\r\n")
            return;}
        })
}

addAnother() {
    inquirer
        .prompt(promptQ)
        .then((res) => {
            if (res.type == "Engineer") {
                this.addEngineer();
            } else if (res.type == "Intern") {
                this.addIntern();
            } else {
                this.execute(this.team);
            }
        })
}

addEngineer() {
    
    inquirer
        .prompt(engineerQs)
        .then((res) => {
            if (res.name && res.id && res.email && res.git) {
                const newEngineer = new Engineer(res.name, res.id, res.email, res.git);
                this.team.push(newEngineer);
                this.addAnother();
            }
            else {
                console.info("Looks like you forgot an input - please try again!\r\n");  
                this.addAnother();}
        })
    
    }

addIntern() {
    inquirer
        .prompt(internQs)
        .then((res) => {
            if (res.name && res.id && res.email && res.school) {
                const newIntern = new Intern(res.name, res.id, res.email, res.school);
                this.team.push(newIntern);
                this.addAnother();                
            } else {
                console.info("Looks like you forgot an input - please try again!");
                this.addAnother();
            }
            
        })
    
    }

execute(team) {
    writeToFile(team);
    console.info(`Thank you! Your team page has been created.`)
}


}

module.exports = Directory
// facilitate prompting for roles and compiling information - hands off to src/pageGenerator.js to make the html/css
//class requirements
const Manager = require(`./manager`);
const Engineer = require(`./engineer`);
const Intern = require(`./intern`);
//module requirements
const inquirer = require(`inquirer`);
const path = require(`path`);

const generateHTML = require(`../src/generateHTML.js`)
//This is where the html will be made
const page = path.resolve(__dirname, "page"); 
const pagePath = path.join(page, "team.html"); 
//make Team array to fill
const team = [];

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
        message: "What is their ID numer?"},
    {   type: `input`,
        name: 'email',
        message: "What is their email?"},
    {   type: `input`,
        name: 'school',
        message: "What school do they attend?"}   
];

// if team is complete, call html generator

function addManager() {
    inquirer
        .prompt(managersQs)
        .then((res) => {
            if (res.name && res.id && res.email && res.office) {
                console.info("Looks like you forgot an input - please try again!")
                return;
            }
            const newManager = new Manager(res.name, res.id, res.email, res.office);
            team.push(newManager);
            
            addAnother();
        })
}

function addAnother() {
    inquirer
        .prompt(promptQ)
        .then((res) => {
            if (res.type == "Engineer") {
                addEngineer();
            } else if (es.type == "Intern") {
                addIntern();
            } else {
                execute();
            }
            addAnother();
        })
}

function addEngineer() {
    inquirer
        .prompt(engineerQs)
        .then((res) => {
            if (res.name && res.id && res.email && res.git) {
                console.info("Looks like you forgot an input - please try again!");  
                addAnother();
            }
            const newEngineer = new Manager(res.name, res.id, res.email, res.git);
            team.push(newEngineer);
            
            addAnother();
        })
    
    }

function addIntern() {
    inquirer
        .prompt(engineerQs)
        .then((res) => {
            if (res.name && res.id && res.email && res.school) {
                console.info("Looks like you forgot an input - please try again!");
                addAnother();
            }
            const newIntern = new Manager(res.name, res.id, res.email, res.school);
            team.push(newIntern);
            
            addAnother();
        })
    
    }

function execute() {
    generateHTML(team);
    console.info(`Thank you! Your team page has been created.`)
}
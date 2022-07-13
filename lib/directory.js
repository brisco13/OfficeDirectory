// facilitate prompting for roles and compiling information - hands off to src/pageGenerator.js to make the html/css
//class requirements
const manager = require(`./manager`);
const engineer = require(`./engineer`);
const intern = require(`./intern`);
//module requirements
const inquirer = require(`inquirer`);
const path = require(`path`);
const fs = require(`fs`);

const generateHTML = require(`../src/html.js`)
//This is where the html will be made
const page = path.resolve(__dirname, "page"); 
const pagePath = path.join(page, "team.html"); 
//make Team array to fill
const team = [];

//all employee questions
//manager prompt questions
const managersQs = [
    "Hello! What is your name?",
    "What is your ID numer?",
    "What is your email?",
    "What is your office number?"
];
//prompt to add more employees?
//this can be a single line
const promptQs = [
    "Thank you for your addition! is there anyone else you'd like to add?"
];

//engineer prompt questions
const engineerQs = [
    "What is their name?",
    "What is their ID numer?",
    "What is their email?",
    "What is their Github username?"
];

//intern prompt questions
const internQs = [
    "What is their name?",
    "What is their ID numer?",
    "What is their email?",
    "What school do they attend?"
];

// if team is complete, call html generator
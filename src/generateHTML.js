const fs = require(`fs`);
const path = require(`path`);
//where to put the output
const page = path.resolve(__dirname, "page"); 
const pagePath = path.join(page, "team.html");


let cards = [];
console.log("attempt path: " + page)
let boiler = fs.readFileSync(path.resolve(__dirname,'htmlTempStart.html'),"utf8");
let caboose = fs.readFileSync(path.resolve(__dirname,'htmlTempEnd.html'),"utf8");

//actually make html file
function writeToFile(data) {
    const team = generateHTML(data);

        if (!fs.existsSync(page)){
            fs.mkdirSync(page)
        }
      fs.writeFile(pagePath, team, (err) =>
        err ? console.log(err) : console.log(`Team Page successfully created!`)
      );
}

//loop thourgh and make html content
function generateHTML(team) {
    //clear list
    cards = [];
    //add boilerplate html
    cards.push(boiler);
    //loop through team array and generate an appropriate card
    team.forEach(element => {
        if(element.getRole() == "Manager") {
            let cardAdd = mgrCard(element);
            cards.push(cardAdd);
        }
        if(element.getRole() == "Engineer") {
            let cardAdd = engCard(element);
            cards.push(cardAdd);
        }
        if(element.getRole() == "Intern") {
            let cardAdd = intCard(element);
            cards.push(cardAdd);
        }
    }
    );
    //add the end of the html code
    cards.push(caboose);
    //combine everything and return
    return cards.join("");
}

//make an engineer card
function engCard(emp) {
    let newCard = fs.readFileSync(path.resolve(__dirname,'engineerTemp.html'),"utf8");
    newCard = replaceDummys("name", newCard, emp.getName());
    newCard = replaceDummys("id", newCard, emp.getID());
    newCard = replaceDummys("email", newCard, emp.getEmail());
    newCard = replaceDummys("role", newCard, emp.getRole());
    newCard = replaceDummys("git", newCard, emp.getGit());
    return newCard;
}

//make a manager card
function mgrCard(emp) {
    let newCard = fs.readFileSync(path.resolve(__dirname,'managerTemp.html'),"utf8");
    newCard = replaceDummys("name", newCard, emp.getID());
    newCard = replaceDummys("id", newCard, emp.getID());
    newCard = replaceDummys("email", newCard, emp.getEmail());
    newCard = replaceDummys("role", newCard, emp.getRole());
    newCard = replaceDummys("office", newCard, emp.getOffice());
    return newCard;
}

// make an intern card
function intCard(emp) {
    let newCard = fs.readFileSync(path.resolve(__dirname,'internTemp.html'),"utf8");
    newCard = replaceDummys("name", newCard, emp.getName());
    newCard = replaceDummys("id", newCard, emp.getID());
    newCard = replaceDummys("email", newCard, emp.getEmail());
    newCard = replaceDummys("role", newCard, emp.getRole());
    newCard = replaceDummys("school", newCard, emp.getSchool());
    return newCard;
}

//function to go into card templates and replace content
const replaceDummys = (dummyVar, card, value) => {
    const pattern = new RegExp(`{{ ${dummyVar} }}`, "gm");
    return card.replace(pattern, value);
  };

module.exports = writeToFile
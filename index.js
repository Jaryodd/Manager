const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const generateHtml = require("./src/generatehtml.js")



const questions = {
    initialQs: [
        {
            type: "input",
            message: "What is you name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is you id number?",
            name: "id",
        },
        {
            type: "input",
            message: "What is you email?",
            name: "email",
        },
    ],
    manager: [{
        type: "input",
        message: "What is you office number?",
        name: "officeNumber"
    }],
    engineer: [{
        type: "input",
        message: "What is you github user name?",
        name: "github"
    }],
    intern: [{
        type: "input",
        message: "What is the name of your school?",
        name: "school"
    }],
    final: [{
        type: "list",
        message: "Do you want to build a team or add a teammate",
        choices: ["yes", "no"],
        name: "yesNo"
    }],
    secondFinal: [{
        type: "list",
        message: "Do you want to add a Engineer or a Intern?",
        choices: ["Engineer", "Intern"],
        name: "engineerIntern"
    }],
};

const inquirer = require("inquirer")
const team = []

const init = async () => {
    try {
        const answers = await inquirer.prompt(questions.initialQs)
        secondInit(answers)
    } catch (err) {
        console.log(err)
    }
}
const secondInit = async (initAnswers) => {
    try {
        let role; 
        if (team.length > 0) {
        role = await inquirer.prompt(questions.secondFinal)
        } else {
            role = {
                engineerIntern: "Manager"
            }
        } 
        let answers; 
        let emp;
        if (role.engineerIntern === "Manager") {
            answers = await inquirer.prompt(questions.manager)
            emp = new Manager (initAnswers.name,initAnswers.id,initAnswers.email,answers.officeNumber)
        } else if (role.engineerIntern === "Engineer") {
            answers = await inquirer.prompt(questions.engineer)
            emp = new Engineer(initAnswers.name, initAnswers.id, initAnswers.email, answers.github)
        } else if (role.engineerIntern === "Intern") {
            answers = await inquirer.prompt(questions.intern)
            emp = new Intern(initAnswers.name, initAnswers.id, initAnswers.email, answers.school)
        }
        team.push(emp)
        final()
    } catch (err) {
        console.log(err)
    }
}

const final = async () => {
    const answers = await inquirer.prompt(questions.final)
    if (answers.yesNo === "yes") {
        init()
    } else {
       generateHtml(team) 
    }

}

init()
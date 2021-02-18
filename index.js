// TODO: Include packages needed for this application
const fs = require("fs"); 
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "checkbox",
        message: "Which headings would you like to include?",
        choices: ["Description", "Contents", "User Stories", "Usage", "Installation", "Tests", "License", "Contributors", "Sources Consulted", "Features"],
        name: "sections"
    },
    // {
        // type: "checkbox",
        // message: "Which badges would you like to add?",
        // choices: ["HTML", "CSS", "JavaScript", "MySQL", "AJAX", "JSON", "Inquirer", "FS", "Node.js"],
        // name: "badges"
    // },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your Github ID?",
        name: "github"
    },
];

inquirer.prompt(questions)
.then((response) => {
    console.log(response);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("readMe.md", content), err => 
    err ? console.log(err) : console.log("Excelsior!");
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
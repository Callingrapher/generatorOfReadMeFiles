// TODO: Include packages needed for this application
const fs = require("fs"); 
const inquirer = require("inquirer");
const genMD = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter a description of your project.",
        name: "description"
    },
    {
        type: "checkbox",
        message: "Which headings would you like to include?",
        choices: ["User Stories", "Usage", "Installation", "Tests", "License", "Contributors", "Sources Consulted", "Features"],
        name: "sections"
    },
    {
        type: "checkbox",
        message: "Which badges would you like to add? (You can pick multiple badges)",
        choices: ["HTML", "CSS", "JavaScript", "MySQL", "AJAX", "JSON", "Inquirer", "FS", "Node.js"],
        name: "badges"
    },
    {
        type: "list",
        message: "Would you like to use one of these common licenses? If so, please select one.",
        choices: ["BSD 3-Clause", "GPL v3", "ISC", "MIT", "Unlicense"],
        name: "license"
    },
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
    {
        type: "input",
        message: "What command should be run to install the application?",
        name: "installCmd",
        default: "npm install"
    },
    {
        type: "input",
        message: "What command should be run to test the application?",
        name: "testCmd",
        default: "npm test"
    },
    {
        type: "input",
        message: "Are there any special usage instructions?",
        name: "usage"
    },
    {
        type: "input",
        message: "Are there any special instructions for contributing?",
        name: "contributing"
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
    err ? console.log(err) : console.log("Excelsior!");
    });
}

// TODO: Create a function to initialize app
function init() {
    var dir = './readMe';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    inquirer.prompt(questions).then(response => {
        writeToFile(dir + "/README.md", genMD(response));
        // console.log(response.badges);
    });
}


// Function call to initialize app
init();
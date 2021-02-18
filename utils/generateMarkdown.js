// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "BSD 3-Clause":
      return "[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
    case "GPL v3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    case "Unlicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";
    default:
      return "";
  }
}

//Function to generate badges for langs/features
function renderLangBadge(badges) {
  switch (badges) {
    case "HTML":
      return "![HTML](https://img.shields.io/badge/HTML-33%25-brightgreen?style=plastic&logo=HTML5)]";
    case "CSS":
      return "[![CSS](https://img.shields.io/badge/CSS-33%25-blue?style=plastic&logo=CSS3)]";
    case "JavaScript":
      return "[![JS](https://img.shields.io/badge/JavaScript-34%25-orange)]";
    case "MySQL":
      return "[![MySQL](https://img.shields.io/badge/MySQL-vs.8.0.23-yellow.svg)]";
    case "AJAX":
      return "[![AJAX](https://img.shields.io/badge/AJAX-Bloop-blue.svg)]";
    case "JSON":
      return "[![JSON](https://img.shields.io/badge/JSON-Bloop-blue.svg)]";
    case "Inquirer":
      return "[![Inquirer](https://img.shields.io/badge/Inquirer-3rdParty-blue.svg)]";
    case "FS":
      return "[![FS](https://img.shields.io/badge/FileSystem-internal-blue.svg)]";
    case "Node.js":
      return "[![Node.js](https://img.shields.io/badge/Node-.JS-blue.svg)]";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "BSD 3-Clause":
      return "(https://opensource.org/licenses/BSD-3-Clause)";
    case "GPL v3":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
    case "ISC":
      return "(https://opensource.org/licenses/ISC)";
    case "MIT":
      return "(https://opensource.org/licenses/MIT)";
    case "Unlicense":
      return "(http://unlicense.org)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "") {
    return `
## License  
This application is covered under the **${license}** license. More info can be found here: [${license}]${renderLicenseLink(license)}
`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
  ${renderLangBadge(data.badges)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Credits](#credits)
  * [Features](#features) 
  * [Tests](#tests)
  * [Contact](#contact)
  ${data.license !== "" ? '* [License](#License)\n' : ""}* [Questions](#Questions)
  ## Installation
  To install the programme, in the command line run:  
  \`\`\`
  ${data.installCmd}
  \`\`\`
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Credits
  ${data.credits}
  ## Features
  ${data.features}
  ## Tests
  To test, run the following command:  
  \`\`\`
  ${data.testCmd}
  \`\`\`
  ${renderLicenseSection(data.license)}
  ## Contact
  If you'd like to contact me about this programme, write to ${data.email} or see my source code on GitHub at ${"[" + data.github + "](https://github.com/" + data.github + ")"}
`;
}

module.exports = generateMarkdown;


//format for badges
// ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
//![](https://img.shields.io/)
//link to shields  [shields.io](https://shields.io/).
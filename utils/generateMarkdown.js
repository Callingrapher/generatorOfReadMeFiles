// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "BSD 3-Clause":
      if(license === "BSD 3-Clause")
      return "[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
      break;
    case "GPL v3":
      if(license === "GPL v3")
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
      break;
    case "ISC":
      if(license === "ISC")
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]";
      break;
    case "MIT":
      if(license === "MIT")
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      break;
    case "Unlicense":
      if(license === "Unlicense")
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";
      break;
    default:
      return "";
  }
}
 

//Function to generate multiple badges for langs/features/etc.
function renderLangBadge(badges) {
  const temp = Object.values(badges);
  const items  = [];
  for (i = 0; i < temp.length; i++) {
    // console.log("Testing to see if this loops enough times");
  switch (temp[i]) {
    case "HTML":
     items.push( "![HTML](https://img.shields.io/badge/HTML-33%25-brightgreen?style=plastic&logo=HTML5)]");
      break;
    case "CSS":
     items.push("[![CSS](https://img.shields.io/badge/CSS-33%25-blue?style=plastic&logo=CSS3)]");
      break;
    case "JavaScript":
      items.push("[![JS](https://img.shields.io/badge/JavaScript-34%25-orange)]");
      break;
    case "MySQL":
     items.push("[![MySQL](https://img.shields.io/badge/MySQL-vs.8.0.23-yellow.svg)]");
      break;
    case "AJAX":
     items.push("[![AJAX](https://img.shields.io/badge/AJAX-Bloop-blue.svg)]");
      break;
    case "JSON":
     items.push("[![JSON](https://img.shields.io/badge/JSON-Bloop-blue.svg)]");
      break;
    case "Inquirer":
     items.push("[![Inquirer](https://img.shields.io/badge/Inquirer-3rdParty-blue.svg)]");
      break;
    case "FS":
     items.push("[![FS](https://img.shields.io/badge/FileSystem-internal-blue.svg)]");
      break;
    case "Node.js":
     items.push("[![Node.js](https://img.shields.io/badge/Node-.JS-blue.svg)]");
      break;
    default:
     items.push ("");
  }} return items.join(" ");
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "BSD 3-Clause":
      if(license === "BSD 3-Clause")
      return "(https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "GPL v3":
      if(license === "GPL v3")
      return "(https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "ISC":
      if(license === "ISC")
      return "(https://opensource.org/licenses/ISC)";
      break;
    case "MIT":
      if(license === "MIT")
      return "(https://opensource.org/licenses/MIT)";
      break;
    case "Unlicense":
      if(license === "Unlicense")
      return "(http://unlicense.org)";
      break;
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
  To test the programme, in the command line run:  
  \`\`\`
  ${data.testCmd}
  \`\`\`
  ${renderLicenseSection(data.license)}
  ## Contact
  If you'd like to contact me about this programme, write to ${data.email} or see my source code on GitHub at ${"[" + data.github + "](https://github.com/" + data.github + ")"}
`;
}

module.exports = generateMarkdown;
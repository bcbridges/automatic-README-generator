// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  "What is the title of your application?",
  "Please give a description of your project.",
  "What are the installation instructions?",
  "What usage information does a user need to know?",
  "How can a user contribute to this repository?",
  "How can a user run tests on this applicaiton, if available?",
  "What email can you be contacted at?",
  "What is your GitHub username?",
];

// Propmts user questions in the console
inquirer
  .prompt([
    {
      type: "input",
      message: questions[0],
      name: "appTitle",
    },
    {
      type: "input",
      message: questions[1],
      name: "appDesc",
    },
    {
      type: "input",
      message: questions[2],
      name: "installInstr",
    },
    {
      type: "input",
      message: questions[3],
      name: "usageInfo",
    },
    {
      type: "input",
      message: questions[4],
      name: "repoContribute",
    },
    {
      type: "input",
      message: questions[5],
      name: "appTests",
    },
    {
      type: "input",
      message: questions[6],
      name: "emailContact",
    },
    {
      type: "input",
      message: questions[7],
      name: "theHub",
    },
    {
      type: "list",
      message: "What type of license is this application under?",
      choices: [
        "GNU General Public License v2.0",
        "MIT License",
        "Mozilla Public License 2.0",
        "Do What the F*ck You Want To Public License",
      ],
      name: "license",
    },
  ])

  .then((response) => {
    writeToFile("README", response);
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // Switch to assign correct license badge
  var licenseURL = "";
  switch (data.license) {
    case "GNU General Public License v2.0":
      licenseURL =
        "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    case "MIT License":
      licenseURL =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Do What the F*ck You Want To Public License":
      licenseURL =
        "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
      break;
    case "Mozilla Public License 2.0":
      licenseURL =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
  }

  fs.writeFile(
    `${fileName}.md`,
    `
 # ${data.appTitle}\n

## Description\n
${data.appDesc}\n
${licenseURL}\n

## Table of Contents\n
- [Installation](#installation)\n
- [Usage](#usage)\n
- [Credits](#credits)\n
- [License](#license)\n
- [How To Contribute](#how-to-contribute)\n
- [Tests](#tests)\n
- [Questions](#questions)

## Installation\n
${data.installInstr}\n

## Usage\n
${data.usageInfo}\n

Please add a screenshot/gif/video here!\n

## Credits\n
List Collaborators here and links to their GitHub profiles\n

## License\n
This project is licensed under the ${data.license}.\n 

## How to Contribute\n
${data.repoContribute}\n

## Tests\n
${data.appTests}\n

## Questions\n
Email all questions to the following: ${data.emailContact}\n
You can connect with me on [GitHub here](https://github.com/${data.theHub})!`,

    (err) => (err ? console.error(err) : console.log("Commit logged!"))
  );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

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
];

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
      type: "list",
      message: "What type of license is this application under?",
      choices: [
        "GNU General Public License v2.0",
        "MIT License",
        "Educational Community License v2.0",
        "Do What the F*ck You Want To Public License",
      ],
      name: "license",
    },
    //GitHub username
    //Email
  ])

  .then((response) => {
    writeToFile("README", response);
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(
    `./Example/${fileName}.md`,
    `
 # <${data.appTitle}>\n

## Description\n
${data.appDesc}\n

## Table of Contents\n
- [Installation](#installation)\n
- [Usage](#usage)\n
- [Credits](#credits)\n
- [License](#license)\n
- [How To Contribute](#howToContribute)\n
- [Tests](#Tests)\n

## Installation\n
${data.installInstr}\n

## Usage\n
${data.usageInfo}\n

Please add a screenshot/gif/video here ![alt text](./filePath/file.ext)\n

## Credits\n
List Collaborators here and links to their GitHub profiles\n

## License\n
This project is licensed under the ${data.license}.\n 

## How to Contribute\n
${data.repoContribute}\n

// ## Tests\n
${data.appTests}\n`,

    (err) => (err ? console.error(err) : console.log("Commit logged!"))
  );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

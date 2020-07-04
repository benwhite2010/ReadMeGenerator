// import the required npm
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// promisify the writeFile function
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "repository",
      message: "What is the name of repository?",
    },
    {
      type: "input",
      name: "description",
      message: "What is the description of the application?",
    },
    {
      type: "input",
      name: "installation",
      message: "What is your favorite hobby?",
    },
    {
      type: "list",
      name: "license",
      message: "What license would you like to initialize with?",
      choices: [
        "MIT",
        "Mozilla Public License 2.0",
        "Open Software License 3.0",
        "ISC",
      ],
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
    },
    {
      type: "input",
      name: "linkedin",
      message: "Enter your LinkedIn URL.",
    },
  ]);
}

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();

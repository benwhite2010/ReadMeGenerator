// import the required npm
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");

// promisify the writeFile function
const writeFileAsync = util.promisify(fs.writeFile);

// function to prompt the user for data that we will be writing to the readMe

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
      message: "What files need to be installed?",
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
      message: "Enter your email address.",
    },
  ]);
}

// function to write README file
// takes in the answers object and writes to the markdown file
// function writeToFile(fileName, answers) {}

async function init() {
  console.log("hi");
  try {
    const answers = await promptUser();

    const html = generateMarkdown(answers);

    await writeFileAsync("Markdown.md", html);

    console.log("Successfully wrote to Markdown.md");
  } catch (err) {
    console.log(err);
  }
}
init();
// function to initialize program
// function init() {}

// function call to initialize program
// init();

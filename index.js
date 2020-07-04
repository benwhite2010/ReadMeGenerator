// import the required npm
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");

// promisify the writeFile function
const writeFileAsync = util.promisify(fs.writeFile);

// function to prompt the user for data that we will be writing to the readMe
// stores all relevant data within the answers object

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
        "Open Database License",
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
      name: "email",
      message: "Enter your email address.",
    },
  ]);
}

// function to write README file
// takes in the answers object and writes to the markdown file
// function writeToFile(fileName, answers) {}

// function to initialize program
async function init() {
  console.log("working");
  try {
    const answers = await promptUser();

    const readMe = generateMarkdown(answers);

    await writeFileAsync(`${answers.repository}.md`, readMe);

    console.log(`Successfully wrote to ${answers.repository}.md`);
  } catch (err) {
    console.log(err);
  }
}
// call the function to initialize the page
init();

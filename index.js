const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "projectName",
        message: "Enter the project name:",
      },
      {
        type: "input",
        name: "description",
        message: "Enter a project description:",
      },
      {
        type: "input",
        name: "installation",
        message: "Enter installation instructions:",
      },
      {
        type: "input",
        name: "usage",
        message: "Enter usage information:",
      },

      {
        type: "list",
        name: "license",
        message: "Choose a license for your project:",
        choices: ["MIT", "GNU GPLv3", "Apache 2.0", "ISC", "None"],
      },
      {
        type: "input",
        name: "contributing",
        message: "Enter contribution guidelines:",
      },
      {
        type: "input",
        name: "tests",
        message: "Enter test instructions:",
      },
      {
        type: "input",
        name: "username",
        message: "Enter your GitHub username:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address:",
      },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
  }

// function to initialize program
function init() {

}

// function call to initialize program
init();

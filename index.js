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
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

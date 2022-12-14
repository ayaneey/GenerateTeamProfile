
//  Imports

const path = require("path");


// Profiles

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "teamProfile.html");
const generateTeam = require("./lib/GenerateHTML");
const teamMembers = [];

// Packages

const inquirer = require("inquirer");
const fs = require("fs");



// Manager Prompt Questions

const promptManager = () => {
  return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter your name:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "Please enter your employee ID:",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log("Please enter your employee Id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email address:",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter your email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter your office number:",
        validate: (officeNumber) => {
          if (officeNumber) {
            return true;
          } else {
            console.log("Please enter your office number!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const manager = new Manager(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      promptMenu();
    });
};

const promptMenu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Please select from the following options:",
        choices: ["Add an Engineer", "Add an Intern", "Finish"],
      },
    ])
    .then((userInput) => {
      switch (userInput.menu) {
        case "Add an Engineer":
          promptEngineer();
          break;
        case "Add an Intern":
          promptIntern();
          break;
        default:
          finishTeam();
      }
    });
};

const promptEngineer = () => {
  return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer name?",
        validate: (engineerName) => {
          if (engineerName) {
            return true;
          } else {
            console.log("Please enter the name of the engineer!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "Please enter your employee ID:",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log("Please enter your employee Id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email address:",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter your email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "githubUser",
        message: "Please enter your Github username:",
        validate: (githubUser) => {
          if (githubUser) {
            return true;
          } else {
            console.log("Please enter your Github username!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const engineer = new Engineer(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.githubUser
      );
      teamMembers.push(engineer);
      promptMenu();
    });
};

const promptIntern = () => {
  return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern name?",
        validate: (internName) => {
          if (internName) {
            return true;
          } else {
            console.log("Please enter the name of the intern!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "Please enter your employee ID:",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log("Please enter your employee Id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email address:",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter your email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please enter your school name:",
        validate: (school) => {
          if (school) {
            return true;
          } else {
            console.log("Please enter your school name!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const intern = new Intern(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      promptMenu();
    });
};

const finishTeam = () => {
  console.log("Team Built!");

  fs.writeFileSync(outputPath,generateTeam(teamMembers), "UTF-8");
};

promptManager();
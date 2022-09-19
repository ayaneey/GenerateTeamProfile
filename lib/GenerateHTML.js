const Manager = require("./Manager");

const generateTeam = (team) => {
  console.log(team);

  const html = [];

  const generateManager = (manager) => {
    console.log(manager);
    let managerHTML = `
    <div class="card">
          <div class="manager-card">
            <h2><i class="fa-solid fa-mug-hot"></i>${manager.name}</h2>
            <h4>Manager</h4>
            <div class="key-info">
              <p class="id">ID: ${manager.id}</p>
              <p class="email">
                Email: <a href="mailto:${manager.email}">${manager.email}</a>
              </p>
              <p class="office">Office Number:${manager.officeNumber}</p>
            </div>
          </div>
        </div>
    `;
    html.push(managerHTML);
  };
};

const generateEngineer = (engineer) => {
  console.log(engineer);
  let engineerHTML = `
        <div class="card">
          <div class="engineer-card">
            <h2><i class="fa-solid fa-gear"></i>${engineer.name}</h2>
            <h4>Engineer Card</h4>
            <div class="key-info">
              <p class="id">ID:${engineer.id}</p>
              <p class="email">
                Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
              </p>
              <p class="github">
                Github:
                <a href="https://github.com/${engineer.github}">${engineer.github}</a>
              </p>
            </div>
          </div>
        </div>
    `;
  html.push(engineerHTML);
};

const generateIntern = (intern) => {
  console.log(intern);
  let internHTML = `
        <div class="card">
          <div class="intern-card">
            <h2><i class="fa-solid fa-book"></i>${intern.name}</h2>
            <h4>Intern Card</h4>
            <div class="key-info">
              <p class="id">ID:${intern.id}</p>
              <p class="email">
                Email: <a href="mailto:${intern.email}">${intern.email}</a>
              </p>
              <p class="school">School:${intern.school}</p>
            </div>
          </div>
        </div> 
    `;
  html.push(internHTML);
};

// Generate Team Cards

for (let i = 0; i < team.length; i++) {
  if (team[i].getRole() === "Manager") {
    generateManager(team[i]);
  }
  if (team[i].getRole() === "Engineer") {
    generateEngineer(team[i]);
  }
  if (team[i].getRole() === "Intern") {
    generateIntern(team[i]);
  }

  return html.join("");
}

module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    `;
};

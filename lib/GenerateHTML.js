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

  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );

  return html.join("");
};

module.exports = (team) => {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Team Profile</title>
  </head>

  <body>
    <header>
      <nav id="navbar">
        <div class="title-container">
          <div class="row">
            <h1>My Team</h1>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <div class="team-container">
         ${generateTeam(team)}
      </div>
    </main>
  
  </body>
   <script
      src="https://kit.fontawesome.com/0c2d75d450.js"
      crossorigin="anonymous"
    ></script>
</html>
    `;
};

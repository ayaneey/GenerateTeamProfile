// Import Employee constructor
const Employee = require("./Employee");

/* ------- In addition to Employee properties and methods, engineer will also have: 
-github username
-getRole() will be overridden to return 'engineer'------ */

// engineer constructor extends employee constructor
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // calling employee constructor
    super(name, id, email);

    this.github = github;
  }

  // return github from input
  getGitHub() {
    return this.github;
  }

  // override from employer to engineer role
  getRole() {
    return "Engineer";
  }
}

// export Engineer
module.exports = Engineer;


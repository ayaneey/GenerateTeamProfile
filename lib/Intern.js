// Import Employee constructor
const Employee = require("./Employee");

/* ------- In addition to Employee properties and methods, intern will also have: 
-school
-getRole() will be overridden to return 'intern'------ */

// engineer constructor extends employee constructor
class Intern extends Employee {
  constructor(name, id, email, school) {
    // calling employee constructor
    super(name, id, email);

    this.school = school;
  }

  // return school from input
  getSchool() {
    return this.school;
  }

  // override from engineer to intern role
  getRole() {
    return "Intern";
  }
}

// export Intern
module.exports = Intern;

// using Manager constructor
const Manager = require("../lib/Manager");

// creating manager object
test("create Manager object", () => {
  const manager = new Manager("John Doe", 2, "johndoe@gmail.com", 4);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test("gets role of employee", () => {
  const manager = new Manager("Ayan", 205, "ayanahmed0210@gmail.com");

  expect(manager.getRole()).toEqual("Manager");
});

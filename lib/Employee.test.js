const Employee = require("./Employee");

describe("Getters", () => {
  const name = "Ayan Ahmed";
  const id = 205;
  const email = "ayanahmed0210@gmail.com";
  const role = "Employee";

  const testEmployee = new Employee(name, id, email);

  it("Return Employee name when requested", () => {
    expect(testEmployee.getName()).toBe(name);
  });

  it("Return Employee id when requested", () => {
    expect(testEmployee.getId()).toBe(id);
  });

  it("Return Employee email when requested", () => {
    expect(testEmployee.getEmail()).toBe(email);
  });

  it("Return Employee role when requested", () => {
    expect(testEmployee.getRole()).toBe(role);
  });
});

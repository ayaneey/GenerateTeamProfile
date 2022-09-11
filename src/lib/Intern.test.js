const Intern = require("./Intern");
const Engineer = require("./Intern");

describe("Intern", () => {
  const name = "Alice";
  const id = 62;
  const email = "alice-tester@gmail.com";
  const school = "Birmingham University";
  const role = "Intern";

  const testIntern = new Intern(name, id, email, school);

  it("Return Intern school when requested", () => {
    expect(testIntern.getSchool()).toBe(school);
  });

  it("Return Intern name when requested", () => {
    expect(testIntern.getName()).toBe(name);
  });

  it("Return Intern id when requested", () => {
    expect(testIntern.getId()).toBe(id);
  });

  it("Return Intern email when requested", () => {
    expect(testIntern.getEmail()).toBe(email);
  });

  it("Return Intern role when requested", () => {
    expect(testIntern.getRole()).toBe(role);
  });
});



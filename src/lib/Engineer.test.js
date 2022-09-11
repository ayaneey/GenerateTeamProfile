const Engineer = require("./Engineer");

describe("Engineer", () => {
  const name = "Tom Hanks";
  const id = 310;
  const email = "tomHanks@gmail.com";
  const github = "TomHanks";
  const returnGithub = `<a href="https://github.com/${github}">https://github.com/${github}</a>`
  const role = "Engineer";

  const testEngineer = new Engineer(name, id, email, github);

  it("Return Employee Github page when requested", () => {
    expect(testEngineer.getGitHub()).toBe(returnGithub);
  });

  it("Return Engineer name when requested", () => {
    expect(testEngineer.getName()).toBe(name);
  });

  it("Return Engineer id when requested", () => {
    expect(testEngineer.getId()).toBe(id);
  });

  it("Return Engineer email when requested", () => {
    expect(testEngineer.getEmail()).toBe(email);
  });

  it("Return Engineer role when requested", () => {
    expect(testEngineer.getRole()).toBe(role);
  });
});

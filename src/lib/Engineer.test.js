const Engineer = require("./Engineer");

describe("Engineer", () => {
  const name = "Tom Hanks";
  const id = 310;
  const email = "tomHanks@gmail.com";
  const github = "ayaneey";
  const role = "Engineer";

  const testEngineer = new Engineer(name, id, email, github);

  it("Return Engineer Github page when requested", () => {
    expect(testEngineer.getGitHub()).toBe(github);
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

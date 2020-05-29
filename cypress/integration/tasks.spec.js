describe("TaskApp", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("runs at port 3000", () => {
    //Nothing
  });

  it("has a Task Form", () => {
    cy.get(".taskForm");
  });

  it("has a Task display table", () => {
    cy.get("table");
  });

  it("has two items initially", () => {
    cy.get(".Task").should("have.length", 2);
  });

  it("can add a new task using Enter key", () => {
    const taskInput = "Test your app";
    cy.get("input")
      .type(taskInput)
      .type("{enter}")
      .get(".Task")
      .should("have.length", 3);
  });

  it("can add a new task using Add Task button", () => {
    const taskInput = "Test your app";
    cy.get("input")
      .type(taskInput)
      .get(".is-info")
      .click()
      .get(".Task")
      .should("have.length", 3);
  });

  it("can add two tasks", () => {
    const tasks = ["Test your app", "Check if tests have passed"];
    cy.get("input")
      .type(tasks[0])
      .type("{enter}")
      .get("input")
      .type(tasks[1])
      .type("{enter}")
      .get(".Task")
      .should("have.length", 4);
  });

  it("delete a task", () => {
    cy.get(".deleteButton")
      .first()
      .click()
      .get(".Task")
      .should("have.length", 1);
  });

  it("deletes two tasks", () => {
    cy.get(".deleteButton")
      .first()
      .click()
      .get(".deleteButton")
      .first()
      .click()
      .get(".Task")
      .should("not.exist");
  });

  it.only("should visit a API page on clicking the link", () => {
    cy.get("a").click().url().should("contain", "/api");
  });
});

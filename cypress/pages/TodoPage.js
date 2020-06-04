function visit() {
  cy.visit("/");
}

function type(content) {
  cy.get("input").type(content);
}

function clickAddBtn() {
  cy.get(".add-btn").click();
}

function isTaskLength(len) {
  cy.get(".Task").should("have.length", len);
}

function clickADeleteBtn() {
  cy.get(".deleteButton").first().click();
}

function clickTask() {
  cy.get(".taskTitle").first().click();
}

function markAsDone() {
  cy.get(".taskTitle").should("have.class", "completed");
}

function markAsUndone() {
  cy.get(".taskTitle").should("not.have.class", "completed");
}

export {
  visit,
  type,
  clickAddBtn,
  isTaskLength,
  clickADeleteBtn,
  clickTask,
  markAsDone,
  markAsUndone,
};

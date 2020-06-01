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

export { visit, type, clickAddBtn, isTaskLength, clickADeleteBtn };

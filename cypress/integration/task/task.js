import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I visit my app", () => {
  cy.visit("http://localhost:3000");
});

When("I type {string} into the form", (content) => {
  cy.get("input").type(content);
});

When("I click the {string} button", (content) => {
  cy.get(content).click();
});

When("I click a {string} button", function (content) {
  cy.get(content).first().click();
});

Then("a new task should be added", () => {
  cy.get(".Task").should("have.length", 3);
});

Then("a task should be deleted", function () {
  cy.get(".Task").should("have.length", 1);
});

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
var TodoPage = require("../../pom/TodoPage");

Given("I visit my app", () => {
  TodoPage.visit();
});

When("I type {string} into the form", (content) => {
  TodoPage.type(content);
});

When("I click the Add button", () => {
  TodoPage.clickAddBtn();
});

Then("a new task should be added", () => {
  TodoPage.isTaskLength(3);
});

When("I click a Delete button", () => {
  TodoPage.clickADeleteBtn();
});

Then("a task should be deleted", () => {
  TodoPage.isTaskLength(1);
});

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
var TodoPage = require("../../../pages/TodoPage");

Given("I visit the app", () => {
  TodoPage.visit();
});

When("I click on a task", () => {
  TodoPage.clickTask();
});

Then("the task should be marked as done", () => {
  TodoPage.markAsDone();
});

Then("it should be marked Undone", () => {
  TodoPage.markAsUndone();
});

When("I click on the delete button", () => {
  TodoPage.clickADeleteBtn();
});

Then("the task should be deleted", () => {
  TodoPage.isTaskLength(1);
});

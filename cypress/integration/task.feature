Feature: TaskApp
    To check if a new task can be added

    Scenario: Adding a Task
        Given I visit my app
        When I type "Test your App" into the form
        And I click the ".add-btn" button
        Then a new task should be added

    Scenario: Deleting a Task
        Given I visit my app
        When I click a ".deleteButton" button 
        Then a task should be deleted
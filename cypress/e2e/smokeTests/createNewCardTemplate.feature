Feature: Can create new card template functionality

    The user should be abel to create new template 

    Scenario: Verify that the user can create new template
    Given The user navigate to the board
    When Click on the template card button
    And Click on the create a new template
    And Enter template title
    And Click on the add button
    Then The template should have default settings
    And The template should be visible on the list
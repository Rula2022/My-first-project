Feature: Moving template to any list functionality

    The user should be abel to moving template to any list
    
    Scenario: Verify that the user can move template to any list
    Given The user navigated to the board page
    And There is an existing card template on the board
    When Open template card
    And Click on the move link 
    And Select the list that want moving template it
    And Click on the move button
    And Close template card window
    Then The template should be moving to new a list

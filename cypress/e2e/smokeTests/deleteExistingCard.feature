Feature: Delete existing card functionality

    The user should be abel to delete existing card
    
    Scenario: Verify that the user can delete existing card
    Given The user navigated to the board page
    And There is an existing card on the board
    When Click on the card
    And Click on the archive button 
    And Click on the delete button
    And Click on the confirm delete button
    Then The card should be successfully deleted
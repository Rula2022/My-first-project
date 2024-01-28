Feature: Update the template name functionality

    The user should be abel to update the template name
    Scenario: Verify that the user can update the template name
    Given The user navigated to the board page
    And There is an existing card template on the board
    When Open template card
    And Update template name
    And Close template card window
    Then The card template name should be updated successfully

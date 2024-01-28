Feature:  Hide template from list

    The user should be abel to hide template

    Scenario: Verify that the user can hide template
    Given The user navigated to the board page
    And There is an existing card template on the board
    When Open template card
    And Click on the hide from list link
    And Close template card window
    Then The template card should not be visible in the list
Feature: Create a new card functionality

   The user should be abel to create new card

   Scenario:  Verify that the user can create a new card
      Given The user navigated to the board page
      When Click on add card button
      And Enters a title for added card
      And Click on add card button
      Then The new card should be created successfully
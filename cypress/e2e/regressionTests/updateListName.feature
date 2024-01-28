Feature:  Update the list names functionality

    The user should be abel to Update the names of the default lists on a board

    Scenario Outline: Verify that the user can update the list names
    Given The user navigated to the board page
    And Update the list name "<NewListName>" in index <ListIndex>
    Then The list name "<NewListName>" in index <ListIndex> should be updated successfully 
    
    Examples:
  |ListIndex | NewListName  |
  | 0        | Updated To Do|
  | 1        | Updated Doing|
  | 2        | Updated Done |
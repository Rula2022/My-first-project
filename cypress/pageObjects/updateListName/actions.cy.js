class updateListNameActions{
    UpdateTheListName(listIndex,newListName){
    cy.get("[data-testid='list-name-textarea']").eq(listIndex).click({force:true}).clear().type(newListName)
    return this;
    }
}
export default updateListNameActions;
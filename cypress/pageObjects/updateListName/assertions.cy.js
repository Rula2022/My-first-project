class updateListNameAssertions{
    checkListNameIsContain(listIndex,newListName){
    cy.get("[data-testid='list-name-textarea']").eq(listIndex).should("have.text",newListName)
    return this;
    }
}
export default updateListNameAssertions;

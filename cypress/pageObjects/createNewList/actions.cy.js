class createNewListActions{
    clickOnTheAddanotherListButton(){
        cy.get("[data-testid='list-composer-button']").click();
        return this;
    }
    enterListTitleInTextArea(listTitle){
        cy.get("[data-testid='list-name-textarea']").eq(3).type(listTitle);
        return this;
    }
    clickOnTheAddListButton(){
        cy.get("[data-testid='list-composer-add-list-button']").click();
        return this;
    }
    
}
export default createNewListActions;
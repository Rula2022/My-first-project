class createNewListAssertions{
    checkNewlistIsExist(){
        cy.get("[data-testid='list']").eq(3).should("be.visible")
        return this;
    }
    checkNewListIsContain(listTitle){
        cy.get("[data-testid='list-name-textarea']").eq(3).should("have.text",listTitle)
    }
}
export default createNewListAssertions;
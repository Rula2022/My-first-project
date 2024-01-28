class createNewCardActions{
    clickOnAddcardButton(){
        cy.get("[data-testid='list-add-card-button']").first().click()
        return this;
    }
    entersATitleForAddedCard(cardTitle){
        cy.get("[data-testid='list-card-composer-textarea']").type(cardTitle)
        return this;
    }
    clickOnAddCardButton(){
        cy.get("[data-testid='list-card-composer-add-card-button']").click()
        return this;
    }
}
export default createNewCardActions;
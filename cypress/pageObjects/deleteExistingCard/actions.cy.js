class deleteExistingCardActions{
clickOnTheCard(){
cy.get("[data-testid='list-card']").click()
return this;
}

clickOnTheArchiveButton(){
cy.get(".js-archive-card").click()
return this;
}

clickOnTheDeleteButton(){
cy.get(".js-delete-card").click()
return this;
}

clickOnTheConfirmDeleteButton(){
    cy.get(".js-confirm").click()
    return this;
}

}

export default deleteExistingCardActions;
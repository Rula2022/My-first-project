class createNewCardTemplateActions{
clickOnTheTemplateCardButton(){
cy.get("[data-testid='TemplateCardIcon']").first().click()
}

clickOnTheCreateANewTemplate(){
cy.get("[data-testid='create-new-template-card-button']").click()
}
enterTemplatetitle(templateName){
cy.get("[data-testid='create-template-card-composer']").type(templateName)
}
clickOnTheAddButton(){
cy.get("[data-testid='new-template-card-submit-button']").click()
}
}
export default createNewCardTemplateActions;
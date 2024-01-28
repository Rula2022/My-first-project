class sharedActions{
openBoard(url){
    return cy.visit(url)
    
}

openTemplateCard() {
    cy.get("[data-testid='list-card']").first().click();
    return this;
  }

  closeTemplateCardWindow() {
    cy.get(".js-close-window").click();
    return this;
  }

  getCardElement(){
    return cy.get("[data-testid='list-card']")
  }
  
  getListElement(index){
  return cy.get("[data-testid='list-wrapper']").eq(index)
  }
}
export default sharedActions
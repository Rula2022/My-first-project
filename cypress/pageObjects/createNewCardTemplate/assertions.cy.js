class createNewCardTemplateAssertions {

    checkTemplateSettingsIsVisible() {
        return cy.get(".card-detail-window").then((element) => {
          expect(element).to.be.visible;
          cy.get(".js-close-window").click()
        });
      }
  checkTheTemplateIsExist() {
    cy.get("[data-testid='list-card']").first().then((element) => {
      expect(element).to.be.exist;
    });
  }

  
}
export default createNewCardTemplateAssertions;

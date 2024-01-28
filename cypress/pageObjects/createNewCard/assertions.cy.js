class createNewCardAssertions {
  checkCardIsExist() {
    cy.get("[data-testid='list-card']").should("exist")
    return this;
      };
  

  checkCardIsContain(cardTitle) {
    cy.get("[data-testid='card-name']").should("have.text",cardTitle)
    return this;
  }
}
export default createNewCardAssertions;

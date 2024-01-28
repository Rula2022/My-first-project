class deleteExistingCardAssertions{
    checkCardIsNotExist() {
        cy.get("[data-testid='list-card']").should("not.exist")
        return this;
          };
}
export default deleteExistingCardAssertions;
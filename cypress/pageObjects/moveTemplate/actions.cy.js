class moveTemplateActions {
  clickOnTheMoveLink() {
    cy.get(".js-move-card").click();
  }
  selectTheList() {
    cy.get("[data-testid='move-card-popover-select-list-destination']").select(
      "Doing"
    );
  }
  clickOnTheMoveButton() {
    cy.get("[data-testid='move-card-popover-move-button']").click();
  }
}
export default moveTemplateActions;

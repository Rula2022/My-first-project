class hideTemplateActions {
  clickOnTheHideLink() {
    cy.get(".js-archive-card").click({force:true})
  }
}
export default hideTemplateActions;

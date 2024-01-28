class updateNameOfTemplateActions {
  UpdateTemplateName(newTemplateName) {
    cy.get(".js-card-detail-title-input").click().clear().type(newTemplateName);
    return this;
  }
}
export default updateNameOfTemplateActions;

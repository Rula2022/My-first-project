class updateNameOfTemplateAssertions{
checkTheCardTemplateUpdate(newTemplateName){
cy.get("[data-testid='card-name']").should("have.text",newTemplateName)
}
}
export default updateNameOfTemplateAssertions;
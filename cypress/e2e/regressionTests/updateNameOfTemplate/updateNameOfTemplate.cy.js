/// <reference types="cypress" />
import {
  Given,
  Then,
  When,
  Before,
  After,
} from "cypress-cucumber-preprocessor/steps";
import { EMAIL, PASSWORD } from "../../../support/constant";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import updateNameOfTemplateActions from "../../../pageObjects/updateNameOfTemplate/actions.cy";
import sharedActions from "../../../pageObjects/shared/actions.cy";
import updateNameOfTemplateAssertions from "../../../pageObjects/updateNameOfTemplate/assertions.cy";

const sharedDataUtil = new sharedDataUtils();
const sharedAction = new sharedActions();
const updateNameOfTemplateAction = new updateNameOfTemplateActions();
const updateNameOfTemplateAssertion = new updateNameOfTemplateAssertions();

const boardName = "cypressBoard";
const cardTemplateTitle ="Card Template";
let newTemplateName = "Card Template Updated";

Before(() => {
  cy.trelloLogin(EMAIL, PASSWORD);
  sharedDataUtil.createNewBoard(boardName).as("boardResponse");
  cy.wait(4000);
  cy.get("@boardResponse").then((data) => {
    sharedDataUtil.getListsOnABoard(data.body.id).as("listResponse");
  });
});

Given("The user navigated to the board page", () => {
  cy.wait(8000);
  cy.get("@boardResponse").then((data) => {
    sharedAction.openBoard(data.body.url);
  });
});

Given("There is an existing card template on the board", () => {
  cy.get("@listResponse").then((data) => {
    sharedDataUtil.createANewTemplateCard(data.body[0].id, cardTemplateTitle);
  });
  cy.wait(3000);
});

When("Open template card", () => {
  sharedAction.openTemplateCard();
});

When("Update template name", () => {
  updateNameOfTemplateAction.UpdateTemplateName(newTemplateName);
});

When("Close template card window", () => {
  sharedAction.closeTemplateCardWindow();
});

Then("The card template name should be updated successfully", () => {
  updateNameOfTemplateAssertion.checkTheCardTemplateUpdate(newTemplateName);
});

After(() => {
  cy.get("@boardResponse").then((data) => {
    sharedDataUtil.deleteBoard(data.body.id);
  });
});

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
import sharedActions from "../../../pageObjects/shared/actions.cy";
import moveTemplateActions from "../../../pageObjects/moveTemplate/actions.cy";

const sharedDataUtil = new sharedDataUtils();
const sharedAction = new sharedActions();
const moveTemplateAction = new moveTemplateActions();

const boardName ="cypressBoard";
const cardTemplateTitle ="Template Card";

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

When("Click on the move link", () => {
  moveTemplateAction.clickOnTheMoveLink();
});

When("Select the list that want moving template it", () => {
  moveTemplateAction.selectTheList();
});

When("Click on the move button", () => {
  moveTemplateAction.clickOnTheMoveButton();
});

When("Close template card window", () => {
  sharedAction.closeTemplateCardWindow();
});

Then("The template should be moving to new a list", () => {
  sharedAction.getListElement(1).should("contain", cardTemplateTitle);
});

After(() => {
  cy.get("@boardResponse").then((data) => {
    sharedDataUtil.deleteBoard(data.body.id);
  });
});

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
import createNewCardAssertions from "../../../pageObjects/createNewCard/assertions.cy";
import createNewCardActions from "../../../pageObjects/createNewCard/actions.cy";

const sharedDataUtil = new sharedDataUtils();
const sharedAction = new sharedActions();
const createNewCardAction = new createNewCardActions();
const createNewCardAssertion = new createNewCardAssertions();

const boardName ="cypressBoard";
const cardTitle ="cypressTitle";

Before(() => {
  cy.trelloLogin(EMAIL, PASSWORD);
  sharedDataUtil.createNewBoard(boardName).as("boardResponse");
});

Given("The user navigated to the board page", () => {
  cy.wait(5000);
  cy.get("@boardResponse").then((data) => {
    sharedAction.openBoard(data.body.url);
  });
});

When("Click on add card button", () => {
  createNewCardAction.clickOnAddcardButton();
});

When("Enters a title for added card", () => {
  createNewCardAction.entersATitleForAddedCard(cardTitle);
});

When("Click on add card button", () => {
  createNewCardAction.clickOnAddCardButton();
});

Then("The new card should be created successfully", () => {
  createNewCardAssertion.checkCardIsExist().checkCardIsContain(cardTitle);
});

After(() => {
  cy.get("@boardResponse").then((data) => {
    sharedDataUtil.deleteBoard(data.body.id);
  });
});
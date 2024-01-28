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
import deleteExistingCardActions from "../../../pageObjects/deleteExistingCard/actions.cy";
import deleteExistingCardAssertions from "../../../pageObjects/deleteExistingCard/assertions.cy";

const sharedDataUtil = new sharedDataUtils();
const sharedAction = new sharedActions();
const deleteExistingCardAction = new deleteExistingCardActions();
const deleteExistingCardAssertion = new deleteExistingCardAssertions();

const boardName ="cypressBoard";
const cardTitle ="cypressTitle";

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

Given("There is an existing card on the board", () => {
  cy.get("@listResponse").then((data) => {
    sharedDataUtil.createANewCard(data.body[0].id, cardTitle);
  });
});

When("Click on the card", () => {
  deleteExistingCardAction.clickOnTheCard();
});

When("Click on the archive button", () => {
  deleteExistingCardAction.clickOnTheArchiveButton();
});

When("Click on the delete button", () => {
  deleteExistingCardAction.clickOnTheDeleteButton();
});

When("Click on the confirm delete button", () => {
  deleteExistingCardAction.clickOnTheConfirmDeleteButton();
});

Then("The card should be successfully deleted", () => {
  deleteExistingCardAssertion.checkCardIsNotExist();
});

After(() => {
  cy.get("@boardResponse").then((data) => {
    sharedDataUtil.deleteBoard(data.body.id);
  });
});
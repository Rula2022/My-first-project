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
import createNewListActions from "../../../pageObjects/createNewList/actions.cy";
import createNewListAssertions from "../../../pageObjects/createNewList/assertions.cy";

const sharedDataUtil = new sharedDataUtils();
const sharedAction = new sharedActions();
const createNewListAction = new createNewListActions();
const createNewListAssertion = new createNewListAssertions();

const boardName ="cypressBoard";
const listTitle = "cypressListTitle";

Before(() => {
  cy.trelloLogin(EMAIL, PASSWORD);
  sharedDataUtil.createNewBoard(boardName).as("boardResponse");
});

Given("The user navigate to the board where the list will be created", () => {
  cy.wait(8000);
  cy.get("@boardResponse").then((data) => {
    sharedAction.openBoard(data.body.url);
    cy.wait(4000);
    cy.screenshot("openBoard", { capture: "fullPage" });
  });
});

When("Click on the add another list button", () => {
  cy.wait(3000);
  createNewListAction.clickOnTheAddanotherListButton();
});

When("Enter list title in textarea", () => {
  createNewListAction.enterListTitleInTextArea(listTitle);
});
When("Click on the add list button", () => {
  createNewListAction.clickOnTheAddListButton();
});

Then("The list should be added successfully in a board", () => {
  createNewListAssertion.checkNewlistIsExist().checkNewListIsContain(listTitle);
});

After(() => {
  cy.get("@boardResponse").then((data) => {
    sharedDataUtil.deleteBoard(data.body.id);
  });
});
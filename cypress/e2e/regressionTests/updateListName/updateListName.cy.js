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
import updateListNameActions from "../../../pageObjects/updateListName/actions.cy";
import updateListNameAssertions from "../../../pageObjects/updateListName/assertions.cy";

const sharedDataUtil = new sharedDataUtils();
const sharedAction = new sharedActions();
const updateListNameAction = new updateListNameActions();
const updateListNameAssertion = new updateListNameAssertions();

const boardName ="cypressBoard";

Before(() => {
  cy.trelloLogin(EMAIL, PASSWORD);
  sharedDataUtil.createNewBoard(boardName).as("boardResponse");
});

Given("The user navigated to the board page", () => {
  cy.wait(8000);
  cy.get("@boardResponse").then((data) => {
    sharedAction.openBoard(data.body.url);
  });
});

When(
  "Update the list name {string} in index {int}",
  (newListName, listIndex) => {
    cy.wait(4000);
    updateListNameAction.UpdateTheListName(listIndex, newListName);
  }
);

Then(
  "The list name {string} in index {int} should be updated successfully",
  (newListName, listIndex) => {
    updateListNameAssertion.checkListNameIsContain(listIndex, newListName);
  }
);

After(() => {
  cy.wait(7000);
  cy.get("@boardResponse").then((data) => {
    sharedDataUtil.deleteBoard(data.body.id);
  });
});

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
import createNewCardTemplateActions from "../../../pageObjects/createNewCardTemplate/actions.cy";
import createNewCardTemplateAssertions from "../../../pageObjects/createNewCardTemplate/assertions.cy";

const sharedDataUtil = new sharedDataUtils();
const sharedAction = new sharedActions();
const createNewCardTemplateAction = new createNewCardTemplateActions();
const createNewCardTemplateAssertion = new createNewCardTemplateAssertions();

const templateName ="cypresstemplate";
const boardName ="cypressBoard";

Before(() => {
  cy.trelloLogin(EMAIL, PASSWORD);
  sharedDataUtil.createNewBoard(boardName).as("boardResponse");
});

Given("The user navigate to the board", () => {
  cy.wait(8000);
  cy.get("@boardResponse").then((data) => {
    sharedAction.openBoard(data.body.url);
  });
});

When("Click on the template card button", () => {
  createNewCardTemplateAction.clickOnTheTemplateCardButton();
});

When("Click on the create a new template", () => {
  createNewCardTemplateAction.clickOnTheCreateANewTemplate();
});

When("Enter template title", () => {
  createNewCardTemplateAction.enterTemplatetitle(templateName);
});

When("Click on the add button", () => {
  createNewCardTemplateAction.clickOnTheAddButton();
  cy.wait(4000);
});

Then("The template should have default settings", () => {
  createNewCardTemplateAssertion.checkTemplateSettingsIsVisible();
});

Then("The template should be visible on the list", () => {
  createNewCardTemplateAssertion.checkTheTemplateIsExist();
});

After(() => {
  cy.get("@boardResponse").then((data) => {
    sharedDataUtil.deleteBoard(data.body.id);
  });
});
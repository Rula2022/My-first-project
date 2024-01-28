/// <reference types="cypress" />

import { APIKEY, APITOKEN } from "../../support/constant";

class sharedDataUtils {
  createNewBoard = (boardName) => {
    return cy.request(
      "POST",
      `https://api.trello.com/1/boards/?name=${boardName}&key=${APIKEY}&token=${APITOKEN}`
    );
  };
  deleteBoard = (boardId) => {
    return cy.request(
      "DELETE",
      `https://api.trello.com/1/boards/${boardId}?key=${APIKEY}&token=${APITOKEN}`
    );
  };
  getListsOnABoard = (boardId) => {
    return cy.request(
      "GET",
      `https://api.trello.com/1/boards/${boardId}/lists?key=${APIKEY}&token=${APITOKEN}`
    );
  };
  createANewCard = (listId, cardTitle) => {
    return cy.request(
      "POST",
      `https://api.trello.com/1/cards?idList=${listId}&key=${APIKEY}&token=${APITOKEN}&name=${cardTitle}`
    );
  };

  createANewTemplateCard = (listId,newTemplateName) => {
    return cy.request(
      "POST",
      `https://api.trello.com/1/cards?idList=${listId}&key=${APIKEY}&token=${APITOKEN}&name=${newTemplateName}`,
      { isTemplate: true }
    );
  };
}
export default sharedDataUtils;

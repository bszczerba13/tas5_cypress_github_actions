/// <reference types="cypress" />
Cypress.config().waitForAnimations = true;

import { parametersAccountManager, appURLs } from "../fixtures/parameters.js";
import "cypress-mochawesome-reporter/register";

describe("Web form verification", { testIsolation: false }, () => {
  it("should open web app", () => {
    cy.visit(parametersAccountManager.formURL);
  });

  it("should check UI of main page of form", () => {
    cy.verifyFormUI(
      parametersAccountManager.role,
      parametersAccountManager.subtitleMainPage,
      parametersAccountManager.buttonText,
      parametersAccountManager.linkText,
    );
  });

  it("should register to app", () => {
    cy.registerToApp(
      parametersAccountManager.linkText,
      appURLs.registerURL,
      parametersAccountManager.testedLogin,
      parametersAccountManager.testedPassword,
      parametersAccountManager.setUpAccountButton,
    );
  });

  it("should login to app", () => {
    cy.loginToApp(
      parametersAccountManager.testedLogin,
      parametersAccountManager.testedPassword,
      parametersAccountManager.buttonText,
      appURLs.loggedURL,
    );
  });

  it("should logout from app", () => {
    cy.logoutFromApp(parametersAccountManager.logoutButton, appURLs.loginURL);
  });
});

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

import { constant } from "lodash";

Cypress.Commands.add("verifyFormUI", (role, subtitle, buttonText, linkText) => {
  cy.get(".section").should("contain", role);
  cy.get(".section").should("contain", subtitle);
  cy.get("#login").should("exist");
  cy.get("#password").should("exist");
  cy.get("button").should("have.text", buttonText);
  cy.get("a").should("have.text", linkText);
});

Cypress.Commands.add(
  "registerToApp",
  (registerLink, registerUrl, login, password, registerButton) => {
    cy.get("a").should("have.text", registerLink).click();
    cy.url().should("equal", registerUrl);
    cy.get("#login").type(login);
    cy.get("#password").type(password);
    cy.get("button").should("have.text", registerButton).click();
  },
);

Cypress.Commands.add(
  "loginToApp",
  (login, password, loginButton, loggedUrl) => {
    cy.get("#login").type(login);
    cy.get("#password").type(password);
    cy.get("button").should("have.text", loginButton).click();
    cy.url().should("equal", loggedUrl);
    cy.get("#welcomemsg").should("contain", login);
    cy.window().then(($win) => {
      expect($win.localStorage.getItem("logged")).to.eq("1");
      expect($win.localStorage.getItem("username")).to.eq(login);
    });
  },
);

Cypress.Commands.add("logoutFromApp", (logoutButton, loginUrl) => {
  cy.get("button").should("have.text", logoutButton).click();
  cy.url().should("equal", loginUrl);
});

// -- This is a parent command --

Cypress.Commands.add('Login', () => { 
    cy.get('[data-cy="username-input"]').type("up0625pass");
      cy.get('[data-cy="password-input"]').type("Password123");
      cy.get('[data-cy="submit-button"]')
        .contains("LOGIN")
        .should("be.visible")
          .click();
       
 })

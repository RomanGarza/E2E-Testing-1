describe("login page", () => {
  beforeEach(() => {
    cy.visit("https://myaccount.unionallinone.com/");
  });

  context("Input fields", () => {
    it("Contains username & password", () => {
      cy.get('[data-cy="username-input"]').should("exist");
      cy.get('[data-cy="password-input"]').should("exist");
      cy.get('[data-cy="submit-button"]')
        .contains("LOGIN")
        .should("be.visible");
    });
  });

  context("Login with valid credentials", () => {
    it("login", () => {
      cy.get('[data-cy="username-input"]').type("up0625pass");
      cy.get('[data-cy="password-input"]').type("Password123");
      cy.get('[data-cy="submit-button"]')
        .contains("LOGIN")
        .should("be.visible")
        .click();
      cy.location("pathname").should("eq", "/dash");
    });
  });
});

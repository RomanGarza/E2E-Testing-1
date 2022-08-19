describe('visit myaccount login page', () => {
  beforeEach(() => {
    cy.visit("https://myaccount.unionallinone.com/");
  })


  context("Each button should direct the user to a new page", () => {

    it("ATM locations button", () => {
      cy.get('[data-cy="login--locations-button"] > .v-btn__content')
        .should("be.visible")
        .click();
    });

    it("Cash Reload Locations button", () => {
      cy.get('[data-cy="login--locations-reload-button"] > .v-btn__content')
        .should("be.visible")
        .click();
    });

    it("Enter invalid credentials to get an error that you could not log in", () => {
      cy.get('[data-cy="username-input"]').type("fakeUser");
      cy.get('[data-cy="password-input"]').type("fakePassword");
      cy.get('[data-cy="submit-button"]')
        .contains("LOGIN")
        .should("be.visible")
        .click()
      cy.get('[data-cy="login-error"]').should("be.visible");
      cy.get(".cascade--html-text").should("be.visible");
    });

    it("Click on the Don't have a card? Get one now - to be taken to enroll", () => {
      cy.get('[data-cy="login--get-a-card-text"]')
        .should("be.visible")
        .click();
    });

    it("Click on Get A Card button - to be taken to enroll", () => {
      cy.get('[data-cy="login--get-a-card-button"]')
        .should("be.visible")
        .click();
    });

    it("Click on forgot username / forgot password button to be sent to the recovery flow.", () => {
      cy.get('[data-cy="recover-link"]')
        .should("be.visible")
        .click();
      cy.location("pathname").should("eq", "/recover");
    });

    it("Enter valid log in credentials and click the log in button to reach MyAccount", () => {
      cy.get('[data-cy="username-input"]').type("up0625pass");
      cy.get('[data-cy="password-input"]').type("Password123");
      cy.get('[data-cy="submit-button"]')
        .contains("LOGIN")
        .should("be.visible")
        .click();
      cy.location("pathname").should("eq", "/dash");
    });
  })
})
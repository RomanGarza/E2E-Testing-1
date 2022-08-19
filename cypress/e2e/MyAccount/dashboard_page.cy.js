// Description

// The Dashboard contains many main functions such as buttons to lead the user to various pages and quick information like account balance and recent activity.

describe("Login", () => {
  it("Sign in", () => {
    cy.visit("https://myaccount.unionallinone.com/");
    //   Login custom command
    cy.Login();
    cy.get('[data-cy="dash-directDeposit-title"]').should("be.visible");
    cy.get('[data-cy="dash-directDeposit-button"]')
      .should("be.visible")
        .click();
      cy.location("pathname").should("eq", "/dash/directDeposit");
  });
});

// Expected results

// Each button should take the user to the corresponding page as described above.

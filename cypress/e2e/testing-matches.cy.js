/// <reference types="cypress" />

describe("filmfinder film matching", () => {
  function swipe(right, count) {
    for (let i = 0; i < count; i++) {
      if (right) {
        cy.get("button").last().click();
      } else {
        cy.get("button").first().click();
      }
    }
  }

  beforeEach(() => {
    cy.visit("/");
  });

  it("returns no matches", () => {
    cy.contains("Let's go!").click();
    cy.contains("Let's go!").click();
    cy.get("input").type("user1");
    cy.contains("Play as user1").click();
    swipe(false, 10);
    cy.get("input").type("user2");
    cy.contains("Play as user2").click();
    swipe(false, 10);
    cy.contains("You got 0 matches!").should("exist");
  });

  it("returns 1 match", () => {
    cy.contains("Let's go!").click();
    cy.contains("Let's go!").click();
    cy.get("input").type("user1");
    cy.contains("Play as user1").click();
    swipe(false, 2);
    swipe(true, 1);
    swipe(false, 7);
    cy.get("input").type("user2");
    cy.contains("Play as user2").click();
    swipe(false, 2);
    swipe(true, 1);
    swipe(false, 7);
    cy.contains("You got 1 matches!").should("exist");
  });
});

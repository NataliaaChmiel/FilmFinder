/// <reference types="cypress" />

describe("filmfinder homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays home page", () => {
    cy.get("button").should("have.length", 2);
    cy.get("button").first().should("have.text", "Let's go!");
    cy.get("button").last().should("have.text", "About us");
  });
});

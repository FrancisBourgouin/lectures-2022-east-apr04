/// <reference types="cypress" />

describe("Basic functionality of weather app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should have a form to enter a city name", () => {
    cy.get("form.CityForm").should("exist");
  });

  it("should not have a weather section without city", () => {
    cy.get("h1").should("have.text", "Weather magic");
    // cy.wait(10000);
    cy.get(".Weather").should("not.exist");
    // cy.get(".Weather").should("not.be.visible");
  });

  it("should not have a weather section with an invalid city", () => {
    cy.get("form.CityForm input").type("sokoqksqs");

    cy.get("form.CityForm button").click();

    cy.get(".Weather").should("not.exist");
  });
  it("should have a weather section with city", () => {
    cy.get("form.CityForm input").type("Patate");

    cy.get("form.CityForm button").click();

    cy.get(".Weather").should("exist");
  });
});

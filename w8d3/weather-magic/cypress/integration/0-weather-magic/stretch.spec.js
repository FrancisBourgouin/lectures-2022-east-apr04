/// <reference types="cypress" />

describe("Stretch functionality of weather app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should have an empty list of buttons", () => {
    cy.get("h1").should("exist");
    cy.get("section.CityList").should("not.exist");
  });

  it("should show a button for a city with the same name of the previously (valid) searched city", () => {
    cy.get("form.CityForm input").type("Toronto{enter}");

    cy.get("section.CityList button").should("exist");
    cy.get("section.CityList button").should("have.text", "Toronto");
  });

  it("should not add a button for an invalid city that searched", () => {
    cy.get("form.CityForm input").type("aksakasks{enter}");

    cy.get("section.CityList button").should("not.exist");
  });

  it("should not have more than one button per city", () => {
    cy.get("form.CityForm input").type("Toronto{enter}");
    cy.get("form.CityForm input").type("Montreal{enter}");
    cy.get("form.CityForm input").type("Toronto{enter}");

    cy.get("section.CityList button").should("exist");
    cy.get("section.CityList button").should("have.length", 2);
  });
});

// $("...")
// document.querySelectorAll

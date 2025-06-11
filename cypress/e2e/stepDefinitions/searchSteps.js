import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pages/HomePage";
import ResultPage from "../pages/ResultPage";

const homePage = new HomePage();
const resultPage = new ResultPage();

Given("I'm on the MercadoLibre homepage", () => {
  cy.visit("/");
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
});

When("I search for the product {string}", (product) => {
  homePage.searchProduct(product);
});

Then("I should see results related to {string}", (product) => {
  resultPage.validateResults(product);
});


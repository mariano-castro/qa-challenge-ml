import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let query;
let siteId = "MLA";
let response;

Given("I set the search query to {string}", (searchQuery) => {
  query = searchQuery;
});

Given("I set an invalid site ID", () => {
  siteId = "INVALID_SITE";
});

When("I send a GET request to the search API", () => {
  cy.request({
    method: "GET",
    url: `https://api.mercadolibre.com/sites/${siteId}/search?q=${encodeURIComponent(query)}`,
    failOnStatusCode: false, 
  }).then((res) => {
    response = res;
  });
});

Then("the response status should be {int}", (statusCode) => {
  expect(response.status).to.eq(statusCode);
});

Then("the response body should contain {string}", (product) => {
  expect(response.body).to.have.property("results");
  expect(response.body.results.length).to.be.greaterThan(0);
  expect(response.body.message.toLowerCase()).to.include(product);
});

Then("the response body should contain an error message", () => {
  expect(response.body).to.have.property("message");
  expect(response.body.message.toLowerCase()).to.include("invalid");
});

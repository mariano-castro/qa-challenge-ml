const elements = {
  searchInput: "input[name='as_word']",
  searchButton: ".nav-search-btn"
};


class HomePage {
  visitHomePage() {
    cy.visit("/");
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  }

  searchProduct(product) {
    cy.get(elements.searchInput).type(product);
    cy.get(elements.searchButton).click();
  }

  validateSearchField() {
    cy.get(elements.searchInput).should("be.visible");
  }
}

export default HomePage;

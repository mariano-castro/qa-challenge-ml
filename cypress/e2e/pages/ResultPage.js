const elements = {
  resultsTitle: "h1.ui-label-builder.ui-search-breadcrumb__title",
  resultURL: "https://listado.mercadolibre.com.ar"
};

class ResultPage {
  validateResults(product) {
    cy.origin(
      elements.resultURL,
      { args: { product, resultsTitle: elements.resultsTitle } },
      ({ product, resultsTitle }) => {
        cy.get(resultsTitle)
          .should("exist")
          .and("contain.text", product);
      }
    );
  }
}

export default ResultPage;

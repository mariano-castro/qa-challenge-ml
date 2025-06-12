# 🧪 QA Automation Challenge

## 📄 Description  
This project automates UI and API tests using **Cypress**, **Cucumber (Gherkin)**, and the **Page Object Model (POM)** design pattern.

---

## 🚀 Installation

1. Clone the repository:
    `git clone https://github.com/mariano-castro/qa-mercadolibre.git`

2. Install the dependencies:
    `npm install`

3. Run the tests (UI):
    `npx cypress open`

4. Run the tests (Headless):
    `npx cypress run`

5. Run the tests in Chrome:
    `npm run test:chrome`

6. Run the tests in Firefox:
    `npm run test:firefox`

## 📊 Reports & Screenshots

- Reports will be generated in the path `mochawesome-report/mochawesome.html`

- Fail tests screenshots will be generated in the path `cypress/screenshots`


## 🔧 Improvements (Next Steps)

1. Create page objects for API tests

2. Integrate CI/CD pipelines

3. Increase the amount of tests cases and new features

4. Use of fixtures for data parameters

5. Add some custom commands

### ⚠️ Note about API tests with Mercado Libre

During the development of this challenge, we attempted to automate tests on the following endpoint:

```
GET https://api.mercadolibre.com/sites/MLA/search?q=Iphone%2013
```

However, the **Mercado Libre API currently requires authorization (OAuth2)** to access many of its endpoints, including the search endpoint. When accessed without a valid token, the API returns a `401 Unauthorized` or `403 Forbidden` error, making it impossible to perform automated tests without a configured account and authentication flow.
Feature: Product Search on MercadoLibre

  Scenario: Successful iPhone 13 Search
    Given I'm on the MercadoLibre homepage
    When I search for the product "Iphone 13"
    Then I should see results related to "Iphone 13"

  Scenario: Incorrect Search
    Given I'm on the MercadoLibre homepage
    When I search for the product "Asdlkjasdlj"
    Then I should see results related to "Asdlkjasdlj"

  Scenario: Empty Search (Intentional Failure)
    Given I'm on the MercadoLibre homepage
    When I search for the product " "
    Then I should see results related to " "

  Scenario: User searches for iPhone 13 and tries to buy it without logging in
    Given I open Mercado Libre home page
    When I search for "Iphone 13"
    And I click on the first product in the results
    And I attempt to buy the product
    Then I should be prompted to log in

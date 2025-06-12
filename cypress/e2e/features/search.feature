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

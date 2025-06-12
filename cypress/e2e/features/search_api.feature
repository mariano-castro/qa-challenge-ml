Feature: Mercado Libre Search API

  Scenario: Successful search returns status 200
    Given I set the search query to "Iphone 13"
    When I send a GET request to the search API
    Then the response status should be 200
    And the response body should contain "Iphone 13"

  Scenario: Search with invalid site ID returns status 400
    Given I set the search query to "Iphone 13"
    And I set an invalid site ID
    When I send a GET request to the search API
    Then the response status should be 400
    And the response body should contain an error message

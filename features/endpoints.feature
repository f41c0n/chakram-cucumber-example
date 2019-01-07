Feature: As a user, I want to be able to use endpoints 

Scenario: GET endpoint
    Given a httpbin.org
    When I send GET request
    Then the status code should be 200 OK
    Then the response time should be less than 2000 ms

Scenario: POST endpoint
    Given a httpbin.org
    When I send POST request
    Then the status code should be 200 OK
    Then the response time should be less than 2000 ms
Feature: Table selection at Wetherspoon

  Scenario: User enters a valid table number and navigates to the main menu
    Given the user is on the JD Wetherspoon page
    And the user agrees to the terms and conditions
    And the user agrees to the privacy policy
    When the user clicks on the "Proceed" button
    Then the user should be navigated to the table selection page
    When the user enters a valid table number "2"
    And the user clicks on the "Continue" button
    Then the user should be redirected to the main menu page

  Scenario: User enters an invalid table number and remains on the table selection page
    Given the user is on the JD Wetherspoon page
    And the user agrees to the terms and conditions
    And the user agrees to the privacy policy
    When the user clicks on the "Proceed" button
    Then the user should be navigated to the table selection page
    When the user enters an invalid table number "0"
    And the user clicks on the "Continue" button
    Then an error message "Please check your table number and try again" should be displayed
    And the user should remain on the table selection page
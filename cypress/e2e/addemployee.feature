Feature: Verify Add Employee functionality

    Add employee functionality Positive and nagative Tests

    Background: navigate to add employee

         Given User Launch the Application
        When User Enter Valid Username as "Admin" and Valid password as "admin123"
        And  User clicks on login button
        Then User should be navigated to dashbaord page
        When User click on PIM
        And  User click on Add employee Submenu

    Scenario Outline: Verify Add employee with Mandotory details
        And User enter firstname as "<firstname>" and lastname as "<lastname>"
        And User clicks on save button
        Then User should get Succesfully saved message

        Examples:
            | firstname | lastname |
            | Monisha   | N        |
            | Madhu     | N        |

    Scenario: Verify Add employee with Mandotory fileds
        And User clicks on save button
     


Feature: Creating a new "Solar PV" Project

This functionality is about creating a new project like Solar PV, simulating a salesperson on the EOS Loan platform


Scenario: TC001 - Create a new Solar PV project
    Given the user is on the projects page
    |email                |password     |
    |challenge@eosloan.com|Challenge123!|
    When  Press the Add Project button
     And  and select the Solar PV Only option
     And  Fill in the fields relating to project information
    |kwh_Last_12_months|average_electric_bill|kwh_solar_production|estimated_finance_amount|
    |100.00            |200.00               |500.00              |300.00                  |
     And  and click the next step button
     And  choose the HomeShare option
     And  fill in the form fields regarding Details of Customer and press Finish button
    |first_name|last_name|address_1|address_2           |email               |phone      |
    |Igor      |Alves    |Brazil   |Rua Joao Cestari 82 |igor.igr@outlook.com|(123) 456-789|
     And press Skip for now button at bunner massage -> Waiting for customer's interaction. 
     And press Finish button
    Then  will be on the new project page 
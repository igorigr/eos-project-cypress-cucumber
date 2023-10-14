const {Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");



Given("the user is on the projects page", (table) => {
  cy.visit('/');


    // click the button causing the new
    // elements to appear
    cy.xpath('/html/body/div/div[2]/div/div/button').click();

  table.hashes().forEach((row) => {
      cy.get('#credencial-f').type(row.email);
      cy.get('#senha-f').type(row.password);

      cy.xpath("/html/body/div/section/div/div/div/form/section[3]/button").click({ force: true });

      cy.url().should('contains','/propostas')

  });

  
});


When("Press the Add Project button", () =>{

  
  cy.xpath("/html/body/div/main/span/div[1]/section/div[1]/a").click({ force: true });

  cy.url().should('contains','/propostas/nova/manual');

});

When("and select the Solar PV Only option", () =>{

  cy.xpath("/html/body/div/form/div/div/div[2]/div/div[1]/div/div[1]/div/label/input").click();

  cy.get('#kwhUltimoAno-f').should('exist');
  cy.get('#mediaContaEnergia-f').should('exist');
  cy.get('#kwhProjetado-f').should('exist');
  cy.get('#valorProjeto-f').should('exist');

});

When("Fill in the fields relating to project information", (table) => {

  table.hashes().forEach((row) => {
    cy.get('#kwhUltimoAno-f').type(row.kwh_Last_12_months);
    cy.get('#mediaContaEnergia-f').type(row.average_electric_bill);
    cy.get('#kwhProjetado-f').type(row.kwh_solar_production);
    cy.get('#valorProjeto-f').type(row.estimated_finance_amount);

    var vlr_kwh_Last_12_months = row.kwh_Last_12_months + " kWh";
    var vlr_average_electric_bill = "$"+row.average_electric_bill;
    var vlr_kwh_solar_production = row.kwh_solar_production + " kWh";
    var vlr_estimated_finance_amount = "$"+row.estimated_finance_amount;

    cy.get('#kwhUltimoAno-f').should('have.value',vlr_kwh_Last_12_months);
    cy.get('#mediaContaEnergia-f').should('have.value',vlr_average_electric_bill);
    cy.get('#kwhProjetado-f').should('have.value',vlr_kwh_solar_production);
    cy.get('#valorProjeto-f').should('have.value',vlr_estimated_finance_amount);

});

});

When("and click the next step button", () => {

  cy.xpath("/html/body/div/form/header/span[1]/span[2]/button[2]").click().click();


  //cy.get('.hidden > .button--primary > .visible', {timeout: 10000}).click({ force: true });

  cy.get('.block > div > .text-title-xs').should('have.text',"Loan Preferences");

});

When("choose the HomeShare option", () => {

  cy.get('.grid-cols-6 > .grid > :nth-child(1)').click();


  cy.xpath("/html/body/div/form/header/span[1]/span[2]/button[2]").click().click();

  cy.get('.block > div > .text-title-xs').should('have.text',"Customer's Information");

});


When("fill in the form fields regarding Details of Customer and press Finish button", (table) => {

  table.hashes().forEach((row) => {
    cy.xpath('/html/body/div/form/div/div/div[2]/div/div[1]/div/div/input').type(row.first_name);
    cy.xpath('/html/body/div/form/div/div/div[2]/div/div[2]/div/div/input').type(row.last_name);
    cy.xpath('/html/body/div/form/div/div/div[2]/div/div[3]/div[1]/div[1]/div/div/input').type(row.address_1);
    cy.xpath('/html/body/div/form/div/div/div[2]/div/div[3]/div[1]/div[1]/div[2]/button[1]').click();
    
    cy.xpath('/html/body/div/form/div/div/div[2]/div/div[3]/div[2]/div/div/input').type(row.address_2);
    cy.xpath('/html/body/div/form/div/div/div[2]/div/div[4]/div/div/input').type(row.email);
    cy.xpath('/html/body/div/form/div/div/div[2]/div/div[5]/div/div/input').type(row.phone);

    cy.xpath('/html/body/div/form/div/div/div[2]/div/div[1]/div/div/input').should('have.value',row.first_name);
    cy.xpath('/html/body/div/form/div/div/div[2]/div/div[2]/div/div/input').should('have.value',row.last_name);
    cy.xpath('/html/body/div/form/div/div/div[2]/div/div[3]/div[1]/div[1]/div/div/input').should('have.value',row.address_1);
    cy.xpath('/html/body/div/form/div/div/div[2]/div/div[3]/div[2]/div/div/input').should('have.value',row.address_2);
    cy.xpath('/html/body/div/form/div/div/div[2]/div/div[4]/div/div/input').should('have.value',row.email);
    cy.xpath('/html/body/div/form/div/div/div[2]/div/div[5]/div/div/input').should('have.value',row.phone);

  
});

 cy.xpath('/html/body/div[1]/form/header/span[1]/span[2]/button[2]').click().click();
 
 cy.xpath('/html/body/div[2]/div/h1').should('have.text',"Waiting for customer's interaction...");
 
});

When("press Skip for now button at bunner massage -> Waiting for customer's interaction.", () => {

  cy.xpath('/html/body/div[2]/div/div[3]/div/button[2]').click();

  cy.get('.text-title-md').should('have.text',"Waiting for agreement...");

  
  
});

When("press Finish button", () => {
 


  cy.wait(500).get('.hidden > .button > .visible').click({ force: true });


  cy.xpath('/html/body/div[2]/div/h2').should('have.text',"Project successfully created");

});

Then("will be on the new project page", () =>{
  
  return true;

});





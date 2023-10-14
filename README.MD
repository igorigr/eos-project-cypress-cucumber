# This project is based on Cypress + Cucumber

![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![Cucumber](https://img.shields.io/badge/Cucumber-43B02A?style=for-the-badge&logo=cucumber&logoColor=white)

## Tools used:
- [Cypress](https://www.cypress.io/ "Cypress")
- [Cucumber](https://cucumber.io/ "Cucumber")

## DEPENDENCIES

  cucumber

## Prerequisites for use:

- Node.js
- Cypress >= 10.0
- Cucumber
- @bahmutov/cypress-esbuild-preprocessor dependency 
- @badeball/cypress-cucumber-preprocessor dependency
- @badeball/cypress-cucumber-preprocessor/esbuild

## installation: 

Cypress + Cucumber + Dependencies

- Install the Cypress:

npx cypress open

- Install the Cucumber:

npm install --save-dev cypress cypress-cucumber-preprocessor

- Install @bahmutov/cypress-esbuild-preprocessor dependency :

npm install @bahmutov/cypress-esbuild-preprocessor

- Install @badeball/cypress-cucumber-preprocessor dependency :

npm install @badeball/cypress-cucumber-preprocessor

- Install @badeball/cypress-cucumber-preprocessor dependency :

npm install @badeball/cypress-cucumber-preprocessor/esbuild


Referências:

- [Cucumber para Ruby](https://cucumber.io/docs/installation/ruby/ "Cucumber")


### Arquitetura - Bibliotecas utilizadas

In this project, Cypress was used to automate browser actions and Cucumber to write the BDD features.

```
├── README.md
├── cypress
    └── downloads
    └── e2e
        └── ProjectSolarPV
            └── CreateProjectSolarPv.feature
└── support
    ├── step_definitions
        └── CreateProjectSolarPv.js
   
└── .cypress-cucumber-preprocessorrc.json
├── cypress.config.js
├── package-lock.json
├── package.json

```

### About the project

- Step 1 you must log into the system using email and password credentials and
- Step 2 crie um novo projeto "Solar PV", como um vendedor


### How to execute the Project

In the terminal run the following command

npm rum cypress:open
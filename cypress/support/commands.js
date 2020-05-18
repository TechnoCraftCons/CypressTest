// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import { homePg } from '../support/POM/home_page'
import { minutePage } from '../support/POM/minute_page'

Cypress.Commands.add('homePage', () => {
    cy.visit('https://www.cvs.com/')
})

Cypress.Commands.add('usingLink', () => {
    homePg.navigateToMiniteClinicPage()
    minutePage.covidTestUsingLink()
})

Cypress.Commands.add('usingClinicVisit', (zipCode) => {
    homePg.navigateToMiniteClinicPage()
    minutePage.covidTestUsingClinicVisit(32003)
    minutePage.clickHowToGetTestedLink()
})
Cypress.Commands.add('usingClinicVisitButton', () => {
    homePg.navigateToMiniteClinicPage()
    minutePage.covidTestUsingPlanMinuteClinicVisit()
    minutePage.clickHowToGetTestedLink()
})


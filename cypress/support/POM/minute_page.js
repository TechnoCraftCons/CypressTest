/// <reference types="Cypress" />

export class MinuteHomePage {
    covidTestUsingLink() {
        cy.get('a[href="/minuteclinic/covid-19-testing?icid=poct-covid19-mc-clinicvisit-tab-link"]')
            .click()
        cy.url()
            .should('include', '/minuteclinic/covid-19')
    }

    covidTestUsingClinicVisit(zipCode) {
        cy.get('input[id="zip"]')
            .type(zipCode)
        cy.get('button[class="mc-red-button"]')
            .click()
        cy.url()
            .should('include', '/minuteclinic/clinic-locator')

    }
    covidTestUsingPlanMinuteClinicVisit() {
        cy.get('a[href="/minuteclinic/clinic-locator"]')
            .click()

    }
    clickHowToGetTestedLink() {
        cy.get('a[href="/minuteclinic/covid-19-testing"]')
            .click()
        cy.url()
            .should('include', '/minuteclinic/covid-19')
    }
}

export const minutePage = new MinuteHomePage();
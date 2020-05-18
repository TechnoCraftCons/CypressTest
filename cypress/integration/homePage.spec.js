/// <reference types="cypress" />
import { homePg } from '../support/POM/home_page'
import { minutePage } from '../support/POM/minute_page'

describe('COVID-19 flow FL', () => {
    beforeEach('open home page', () => {
        cy.homePage()
    })

    it('Covid Test using link', () => {
        cy.usingLink()
    })

    it('Covid Test using clinic locator', () => {
        cy.usingClinicVisit()
    })
    
    it('Covid Test using Plan A Minute Clinic Visit Button', () => {
        homePg.navigateToMiniteClinicPage()
        minutePage.covidTestUsingPlanMinuteClinicVisit()
        minutePage.clickHowToGetTestedLink()
    })
})



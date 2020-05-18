/// <reference types="Cypress" />
 class HomePage {

    
    navigateToMiniteClinicPage() {
        cy.get('a[href="/minuteclinic?icid=cvsheader:minuteclinic"]')
            .click()
        cy.url()
            .should('include', '/minuteclinic')
    }
}

export const homePg = new HomePage();
export class OpenCreator {
    

    magento_page_sk = Cypress.env('protocol') + '://' + Cypress.env('site_url') + Cypress.env('domains')[0]
    magento_page_cz = Cypress.env('protocol') + '://' + Cypress.env('site_url') + Cypress.env('domains')[1]
    magento_page_de = Cypress.env('protocol') + '://' + Cypress.env('site_url') + Cypress.env('domains')[2]
    magento_page_it = Cypress.env('protocol') + '://' + Cypress.env('site_url') + Cypress.env('domains')[3]
    magento_page_nl = Cypress.env('protocol') + '://' + Cypress.env('site_url') + Cypress.env('domains')[4]

    creator_btn = '.lvl1'

    visitSK() {
        cy.visit(this.magento_page_sk)
    }

    visitCZ() {
        cy.visit(this.magento_page_cz)
    }

    visitDE() {
        cy.visit(this.magento_page_de)
    }

    visitIT() {
        cy.visit(this.magento_page_it)
    }

    visitNL() {
        cy.visit(this.magento_page_nl)
    }

    visitCreator() {
        cy.get(this.creator_btn).eq(1).click({force: true})
    }
}
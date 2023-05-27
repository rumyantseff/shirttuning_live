export class CheckProducts {


    products_count = '.counter-number'

    countChecking() {
        cy.get(this.products_count).should(($product_items) => {
            expect($product_items).to.contain('5')
          })
    }
}
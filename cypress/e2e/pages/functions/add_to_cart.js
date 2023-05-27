export class AddToCart {


    select_amount_and_size_btn = 'g[name="sp_creator_sizeAndAmountButton"]'
    add_to_basket_btn = 'g[name="sp_creator_addToBasketButton"]'
    add_to_cart_request = '/shirtplatform_creator/product/addToCart/'

    addToCart() {
        cy.intercept('POST', this.add_to_cart_request).as('addToCart')
        cy.get(this.select_amount_and_size_btn).click({force: true})
        cy.get(this.add_to_basket_btn).click({force: true})
        cy.wait('@addToCart')
    }
}
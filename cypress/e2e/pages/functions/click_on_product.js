export class ClickOnProduct {


    click_on_product = '#stage > g:nth-child(2) > g:nth-child(1) > g:nth-child(1) > g:nth-child(2) > g:nth-child(2) > g:nth-child(1) > g:nth-child(1) > g:nth-child(1) > g:nth-child(1) > g:nth-child(1) > g:nth-child(1) > g:nth-child(3) > g:nth-child(1) > g:nth-child(1) > g:nth-child(2)'

    clickOnProduct() {
        cy.get(this.click_on_product).click({force: true})
    }
}
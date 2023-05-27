export class RemoveCustomization {


    click_on_text_element = '#stage > g:nth-child(2) > g > g > g:nth-child(2) > g:nth-child(2) > g:nth-child(1) > g:nth-child(1) > g > g > g:nth-child(1) > g > g > g > g > g:nth-child(6) > g > rect'
    remove_button = 'g[name="sp_creator_deleteButton"]'
    click_on_image_element = '#stage > g:nth-child(2) > g > g > g:nth-child(2) > g:nth-child(2) > g:nth-child(1) > g:nth-child(1) > g > g > g > g > g > g > g > g:nth-child(5) > g > rect'

    removeText() {
        cy.get(this.click_on_text_element).click({force: true})
        cy.get(this.remove_button).click({force: true})
    }

    removeImage() {
        cy.get(this.click_on_image_element).click({force: true})
        cy.get(this.remove_button).click({force: true})
    }
}
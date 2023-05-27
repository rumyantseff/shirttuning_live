export class SecondProduct {


    menu_list = '#customMenu'
    selected_menu_item = '.menuItem'

    category_list = '.columns'
    category = '.categoryName'

    product_list = '.products.list.items.product-items'
    selected_product_item = '.customiseLabel'

    add_graphical_text_button = 'g[name="sp_creator_addGfxTextButton"]'
    text_area = '#stage > g:nth-child(2) > g:nth-child(1) > g:nth-child(1) > g:nth-child(2) > g:nth-child(4) > g:nth-child(1) > g:nth-child(3) > g:nth-child(2) > g:nth-child(1) > g:nth-child(1) > g:nth-child(1) > g:nth-child(1) > g:nth-child(1) > foreignObject:nth-child(2) > textarea:nth-child(1)'

    selectCategory() {
        cy.get(this.menu_list).within(() => {
            cy.get(this.selected_menu_item).eq(0).click({force: true})
        })
    }

    selectWomanCategory() {
        cy.get(this.category_list).eq(0).within(() => {
            cy.get(this.category).eq(1).click({force: true})
        })
    }

    selectProduct() {
        cy.get(this.product_list).within(() => {
            cy.get(this.selected_product_item).eq(3).click({force: true})
        })
    }

    typeText() {       
        cy.get(this.add_graphical_text_button).click({force: true})
        cy.get(this.text_area).type('Vlad')
        cy.wait(5000)
    }
}
export class FourthProduct {


    menu_list = '#customMenu'
    selected_menu_item = '.menuItem'

    category_list = '.columns'
    category = '.categoryName'

    product_list = '.products.list.items.product-items'
    selected_product_item = '.customiseLabel'

    add_motive_button = 'g[name="sp_creator_addMotiveButton"]'
    motive_list = '#stage > g:nth-child(2) > g > g > g:nth-child(2) > g:nth-child(13) > g > g:nth-child(4) > g:nth-child(1) > g > g > g:nth-child(3) > g > g > g > g:nth-child(1)'
    selected_motive = 'g'
    
    selectCategory() {
        cy.get(this.menu_list).within(() => {
            cy.get(this.selected_menu_item).eq(0).click({force: true})
        })
    }

    selectAccessoriesCategory() {
        cy.get(this.category_list).eq(0).within(() => {
            cy.get(this.category).eq(3).click({force: true})
        })
    }

    selectProduct() {
        cy.get(this.product_list).within(() => {
            cy.get(this.selected_product_item).eq(0).click({force: true})
        })
        cy.wait(5000)
    }

    addMotive() {       
        cy.get(this.add_motive_button).click({force: true})
        cy.wait(5000)
        cy.wrap([this.motive_list]).each((selector) => {
            cy.get(selector).then((el) => {
                let motive = el.children('g')
                cy.get(motive[Math.floor(Math.random() * motive.length)]).click({force: true})               
            })
        })
        cy.wait(5000)
    }
}
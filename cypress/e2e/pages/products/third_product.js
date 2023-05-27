import { Uploads } from '../functions/uploads'
export class ThirdProduct {


    menu_list = '#customMenu'
    selected_menu_item = '.menuItem'

    category_list = '.columns'
    category = '.categoryName'

    product_list = '.products.list.items.product-items'
    selected_product_item = '.customiseLabel'

    add_image_button = 'g[name="sp_creator_addBitmapButton"]'
    image_folder = 'cypress/fixtures/'
    upload_icon = 'symbol[id="assets/UserBitmapsPanel/uploadBigIconUp.svg"]'
    file_input = '#topLevelSystemManager input[type="file"]'
    image_list = '#stage > g:nth-child(2) > g > g > g:nth-child(2) > g:nth-child(13) > g > g:nth-child(4) > g:nth-child(2) > g > g > g:nth-child(4) > g > g > g > g:nth-child(1)'
    selected_image = 'image'

    remove_background_button = '#stage > g:nth-child(2) > g > g > g:nth-child(2) > g:nth-child(14) > g > g:nth-child(2) > g:nth-child(1) > g > g:nth-child(2) > g > g:nth-child(5) > g:nth-child(2) > g > g > g:nth-child(4)'
    confirm_button = '#stage > g:nth-child(2) > g:nth-child(1) > g:nth-child(1) > g:nth-child(2) > g:nth-child(14) > g:nth-child(1) > g:nth-child(2) > g:nth-child(1) > g:nth-child(4) > g:nth-child(2) > g:nth-child(1) > g:nth-child(6) > g:nth-child(2) > g:nth-child(1) > g:nth-child(3) > text:nth-child(1)'

    selectCategory() {
        cy.get(this.menu_list).within(() => {
            cy.get(this.selected_menu_item).eq(0).click({force: true})
        })
    }

    selectKidsCategory() {
        cy.get(this.category_list).eq(0).within(() => {
            cy.get(this.category).eq(2).click({force: true})
        })
    }

    selectProduct() {
        cy.get(this.product_list).within(() => {
            cy.get(this.selected_product_item).eq(2).click({force: true})
        })
        cy.wait(5000)
    }

    addImage() {
        cy.get(this.add_image_button).click({force: true})
        cy.document().then($document => {
            $document.addEventListener('click', Uploads)
        })
        cy.wait(5000)
    }

    uploadImage() {
        cy.task('showFiles', this.image_folder).then((images) => {
            console.log(images)
            let randImage = images[Math.floor(Math.random() * images.length)]
            cy.get(this.upload_icon).eq(0).click({force: true})
            cy.log(randImage)
            cy.get(this.file_input).last().attachFile(randImage)
        })  
        cy.wait(5000) 
    }

    selectImage() {
        cy.get(this.image_list).within(() => {
            cy.get(this.selected_image).eq(1).click({force: true})
        })
        cy.wait(5000)
    }

    removeBackground() {
        cy.get(this.remove_background_button).click({force: true})
        cy.wait(5000)
        cy.get(this.confirm_button).click({force: true})
        cy.wait(5000)
    }
}
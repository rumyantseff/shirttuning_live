import { OpenCreator } from './pages/start/open_creator'
import { Cookies } from './pages/start/cookies'
import { FirstProduct } from './pages/products/first_product'
import { AddToCart } from './pages/functions/add_to_cart'
import { ClickOnProduct } from './pages/functions/click_on_product'
import { RemoveCustomization } from './pages/functions/remove_customization'
import { SecondProduct } from './pages/products/second_product'
import { ThirdProduct } from './pages/products/third_product'
import { FourthProduct } from './pages/products/fourth_product'
import { CheckProducts } from './pages/functions/check_products'
import { Exceptions } from './pages/functions/exceptions'

const openCreator = new OpenCreator()
const cookies = new Cookies()
const firstProduct = new FirstProduct()
const addToCart = new AddToCart()
const clickOnProduct = new ClickOnProduct()
const removeCustomization = new RemoveCustomization()
const secondProduct = new SecondProduct()
const thirdProduct = new ThirdProduct()
const fourthProduct = new FourthProduct()
const checkProducts = new CheckProducts()
const exceptions = new Exceptions()


describe('Shirttuning live testing', () => { 
  it('SK Domain', () => {
    exceptions.exceptions()
    openCreator.visitSK()
  })

  it('CZ Domain', () => {
    exceptions.exceptions()
    openCreator.visitCZ()
  })

  it('DE Domain', () => {
    exceptions.exceptions()
    openCreator.visitDE()
  })

  it('IT Domain', () => {
    exceptions.exceptions()
    openCreator.visitIT()
  })

  it('NL Domain', () => {
    exceptions.exceptions()
    openCreator.visitNL()
  })

  afterEach('Creator on live', () => {
    openCreator.visitCreator()

    firstProduct.selectCategory()
    firstProduct.selectManCategory()
    firstProduct.selectProduct()
    clickOnProduct.clickOnProduct()
    cookies.closeCookies()
    firstProduct.typeText()
    firstProduct.textColor()
    addToCart.addToCart()

    secondProduct.selectCategory()
    secondProduct.selectWomanCategory()
    secondProduct.selectProduct()

    removeCustomization.removeText()

    clickOnProduct.clickOnProduct()
    secondProduct.typeText()
    addToCart.addToCart()

    thirdProduct.selectCategory()
    thirdProduct.selectKidsCategory()
    thirdProduct.selectProduct()

    removeCustomization.removeText()

    clickOnProduct.clickOnProduct()
    thirdProduct.addImage()
    thirdProduct.uploadImage()
    thirdProduct.selectImage()
    thirdProduct.removeBackground()
    addToCart.addToCart()

    fourthProduct.selectCategory()
    fourthProduct.selectAccessoriesCategory()
    fourthProduct.selectProduct()

    clickOnProduct.clickOnProduct()
    fourthProduct.addMotive()
    addToCart.addToCart()

    checkProducts.countChecking()
  })
})
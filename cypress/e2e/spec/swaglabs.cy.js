const { cartPage } = require("../../support/cartPage")
const { checkoutPage } = require("../../support/checkoutPage")
const { homePage } = require("../../support/homePage")
const { loginPage } = require("../../support/loginPage")


describe('test Assignment',()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })
    it("Test Scenario 1",()=>{
        loginPage.enterUsername("standard_user123")
        loginPage.enterPassword("secret_sauce123")
        loginPage.submit()

        cy.get("[data-test='error']").should("exist")
    })

    it('Test Scenario 2',()=>{
        loginPage.login("standard_user","secret_sauce")
        homePage.addProductInCart()
        homePage.navigateCart()
        cartPage.checkout()
        checkoutPage.checkoutInformation("Test First Name","Test Second NAme","1234")
        checkoutPage.finishCheckout()
        cy.logout()
    })
})

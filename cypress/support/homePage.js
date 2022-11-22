class home{
    addProductInCart(){
        cy.get('#add-to-cart-sauce-labs-backpack:nth-child(2)').click()
        cy.get('#remove-sauce-labs-backpack').should('exist')
    }

    navigateCart(){
        cy.get('.shopping_cart_link').click()
    }
}
export const homePage = new home()

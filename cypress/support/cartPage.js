class Cart{
    checkout(){
        cy.get("#checkout").click()
    }
}
export const cartPage = new Cart()
class Checkout{
    checkoutInformation(firstName, lastName, zipCode){
        cy.get("#first-name").type(firstName)
        cy.get("#last-name").type(lastName)
        cy.get("#postal-code").type(zipCode)
        cy.get("#continue").click()
    }

    finishCheckout(){
        cy.get("#finish").click()
        cy.get("[alt='Pony Express']").should("exist")
    }

}
export const checkoutPage = new Checkout()
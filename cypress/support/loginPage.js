class Login{

    enterUsername(username){
     return cy.get("#user-name").click().type(username)
    
    }

    enterPassword(password){
        return cy.get("#password").click().type(password)
    }

    submit(){
        cy.get('#login-button').click()
    }

    login(username,password){
        this.enterUsername(username)
        this.enterPassword(password)
        this.submit()
    }
    
}

export const loginPage = new Login()

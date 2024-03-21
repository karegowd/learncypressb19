import login from "../../pageObjects/loginPage.po"

import logindata from "../../fixtures/logincreds.json"


describe('Verify Login functionality', () => {

    const creds = ["Admin", "admin123"]
    after("Test ends", ()=>{

        cy.log("test case execution completed")
    })

    beforeEach("Lauch url", ()=>{
      //  cy.viewport(375,667)

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    })

    afterEach("Test completion", ()=>{

        cy.log("test case scussessfully executed")
    })

    before("Test Staarted", ()=>{

        cy.log("test case execution started")
    })


    specify.only('Verify login with valid creds', () => {

       

        // cy.get(login.usernameInput(), { timeout: 40000 }).type(creds[0])

        // cy.get(login.passwordInput()).type(creds[1])

        // cy.get(login.loginBtn()).click()

        login.loginwithcreds(creds[0],creds[1])

        cy.contains('Time at Work').should('be.visible')

        cy.contains('Dashboard').should('be.visible')

        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

        //or

        cy.url().should("include", "/web/index.php/dashboard/index")



    })

    it('Verify login with valid username and invalid password', () => {

  

        cy.get(login.usernameInput()).type("Admin")

        cy.get(login.passwordInput()).type("admiyg34uhtn123")

        cy.get(login.loginBtn()).click()

        cy.contains(login.loginerrorMessage).should('be.visible')


    })

    it('Verify login with invalid username and valid password', () => {

     

     

        cy.contains(login.loginerrorMessage).should('be.visible')


    })


    it.only('Verify login with invalid username and invalid password', () => {

        let invalidcreds = {

            invalidusername: "wiufjwriuhng",
            invalidpassword: "kjewnf"
        }



        // cy.get(login.credsinput("username")).type(invalidcreds.invalidusername)

        // cy.get(login.credsinput("password")).type(invalidcreds.invalidpassword)

        //cy.get(login.loginBtn()).click()

        login.loginwithcreds("fbrehybgf","rbvfuhreufy")

        cy.contains(login.loginerrorMessage).should('be.visible')


    })

})
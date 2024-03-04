
import logindata from "../../fixtures/logincreds.json"

describe('Verify Login functionality', () => {

    it('Verify login with valid creds', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get('input[name="username"]', {timeout:40000}).type(logindata.username)

        cy.get("input[placeholder='Password']").type(logindata.password)

        cy.get('button[type="submit"]').click()

        cy.contains('Time at Work').should('be.visible')

        cy.contains('Dashboard').should('be.visible')

        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

        //or

        cy.url().should("include", "/web/index.php/dashboard/index")



    })

    it('Verify login with valid username and invalid password', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get('input[name="username"]').type("Admin")

        cy.get("input[placeholder='Password']").type("admiyg34uhtn123")

        cy.get('button[type="submit"]').click()

        cy.contains('Invalid credentials').should('be.visible')


    })

    it('Verify login with invalid username and valid password', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get('input[name="username"]').type("fjrnekjg")

        cy.get("input[placeholder='Password']").type("admin123")

        cy.get('button[type="submit"]').click()

        cy.contains('Invalid credentials').should('be.visible')


    })


    it('Verify login with invalid username and invalid password', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get('input[name="username"]').type("fjrnekjg")

        cy.get("input[placeholder='Password']").type("rufgy")

        cy.get('button[type="submit"]').click()

        cy.contains('Invalid credentials').should('be.visible')


    })

})
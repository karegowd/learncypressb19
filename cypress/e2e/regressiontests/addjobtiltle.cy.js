import login from "../../pageObjects/loginPage.po"

describe('Verify add job title functionality', () => {

    it('Verify adding job title with valid details', () => {

        cy.visit(`/web/index.php/auth/login`)

        //cy.wait(30000)

        cy.get(login.usernameInput()).type(Cypress.env('username'))

        cy.get(login.passwordInput()).type(Cypress.env('password'))

        cy.get(login.loginBtn()).click()

        cy.contains('Time at Work').should('be.visible')

        cy.contains('Admin').click()
        cy.contains('Job').click()
        cy.contains('Job Titles').click()
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

        let r = (Math.random() + 1).toString(36).substring(7);
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type("Test Job title"+r)

        cy.get('button[type="submit"]').click()
        cy.contains('Successfully Saved').should("be.visible")
    })


})
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import login from "../../pageObjects/loginPage.po"
import dashboard from '../../pageObjects/dashbaordpage.po'
Given('User Launch the Application', () => {
    cy.visit('web/index.php/auth/login')
  })

  When(`User Enter Valid Username as {string} and Valid password as {string}`, (username, password) => {

       cy.xpath(login.usernameInput()).type(username)
       cy.get(login.passwordInput()).type(password)
  })

  And('User clicks on login button', () => {
    cy.get(login.loginBtn()).click()
  })


  Then('User should be navigated to dashbaord page', () => {
    cy.contains('Dashboard').should('be.visible')

    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    //or

    cy.url().should("include", "/web/index.php/dashboard/index")
  })


  When(`User Enter Valid Username as {string} and invalid password as {string}`, (username, password) => {

    cy.xpath(login.usernameInput()).type(username)
    cy.get(login.passwordInput()).type(password)
})

Then('User should get login error Message', () => {
    cy.contains(login.loginerrorMessage).should("be.visible")
  })

  When(`User Enter invalid Username as {string} and valid password as {string}`, (username, password) => {

    cy.xpath(login.usernameInput()).type(username)
    cy.get(login.passwordInput()).type(password)
})

When(`User Enter invalid Username as {string} and invalid password as {string}`, (username, password) => {

    cy.xpath(login.usernameInput()).type(username)
    cy.get(login.passwordInput()).type(password)
})
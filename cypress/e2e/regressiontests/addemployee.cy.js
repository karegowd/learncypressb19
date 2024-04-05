import login from "../../pageObjects/loginPage.po"
import dashboard from "../../pageObjects/dashbaordpage.po"
import addemployeedata from "../../fixtures/addemployee.json"
import addemployee from "../../pageObjects/addemployeepage.po"
describe('Verify add employee functionality', () => {

  const creds = {

    username: "Admin",
    password: "admin123"
  }


  const menuitems = {

    menu1: "Admin",
    menu2: "PIM",
    menu3: "Time",
    menu4: "Leave",
    menu5: "Recruitment",
    menu6: "My Info"
  }

  const arryitems = ["Admin", "PIM", "Time", "Leave", "Recruitment", "My Info"]
  it.only('Verify adding employee with valid details', () => {

     cy.login("Admin", "admin123")

    for (let item in menuitems) {
      cy.contains(menuitems[item]).should('be.visible')

    }

    for (let item of arryitems) {
      cy.contains(item).should('be.visible')

    }
    cy.contains(dashboard.timeNworkHeader()).should('be.visible')

    cy.contains(dashboard.pimMenu()).click()
    cy.Raju(addemployeedata.firstname, addemployeedata.lastsame)
    cy.log("Test is completed ")

  })


  it.only('Verify Mandotory fileds in Add employee page', () => {

    cy.login(Cypress.env('username'), Cypress.env('password'))

    cy.contains('Time at Work').should('be.visible')

    cy.contains('PIM').click()
    cy.contains('Add Employee').click()

    cy.get('button[type="submit"]').click()

    cy.log("clicked on submit button")

    cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').eq(0).should("be.visible")
    cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').eq(1).should("be.visible")

  })
})
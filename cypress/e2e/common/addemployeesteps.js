import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import dashboard from "../../pageObjects/dashbaordpage.po";
import addemployee from '../../pageObjects/addemployeepage.po'
import data from "../../fixtures/addemployee.json"
When('User click on PIM', () => {
    
    cy.contains(dashboard.pimMenu()).click()
  })

  And('User click on Add employee Submenu', () => {
    
    cy.contains(addemployee.addEmployeeSubmenu()).click()
  })

  And('User enter firstname as {string} and lastname as {string}', (firstname, lastname) => {
    
    cy.get(addemployee.firstnameInput()).type(firstname)
    cy.get(addemployee.lastNameInput()).type(lastname)
  })

  And('User clicks on save button', () => {
    
    cy.get(addemployee.saveBtn()).click()
  })

  Then('User should get Succesfully saved message', () => {
    
    cy.contains(addemployee.successMessage()).should("be.visible")
  })
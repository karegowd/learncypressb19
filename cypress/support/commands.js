// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('@4tw/cypress-drag-drop')
import 'cypress-file-upload';
require('cypress-downloadfile/lib/downloadFileCommand')

import addemployee from '../pageObjects/addemployeepage.po'

Cypress.Commands.add('addEmpoyee', (firstname, lastname) => { 

    //cy.contains(addemployee.addEmployeeSubmenu()).click()

    cy.get(addemployee.firstnameInput()).type(firstname)

    cy.get(addemployee.lastNameInput()).type(lastname)

    cy.get(addemployee.saveBtn()).click()

    cy.contains(addemployee.successMessage()).should("be.visible")

 })


 Cypress.Commands.add('login', (username, password) => { 
    
     cy.visit("/web/index.php/auth/login")
     cy.get('input[name="username"]').type(username)
     cy.get('input[name="password"]').type(password)
     cy.get('button[type="submit"]').click()


  })
///<reference types="cypress"/>

import data from '../fixtures/ExceltoJson/user_data.json'
import login from '../pageObjects/loginPage.po'

describe('Automation - Working With Data driven testing json', function () {

  data.forEach((data) =>{

        
        it('Cypress Test Case - Understanding Data driven testing json', function () {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
            cy.xpath(login.usernameInput()).type(data.username);
            cy.get(login.passwordInput()).type(data.password);
            cy.get(login.loginBtn()).click();
            cy.contains(login.loginerrorMessage).should("be.visible")

          })

    })
    
  })



  
        // it('Cypress Test Case - Understanding Data driven testing json', function () {
        //     cy.visit('https://the-internet.herokuapp.com/login'); 
        //     cy.get('#username').type(data.username);
        //     cy.get('#password').type(data.password);
        //     cy.get('button[type="submit"]').click();
        //     cy.get('.flash.error').should("be.visible")

        //   })


///<reference types="cypress"/>

describe('Automation - Working Mouse events', function () {


    it('Cypress Test Case - Understanding Right click, Mouse over, doubleclick', function () {

      
  
      cy.visit('https://www.programsbuzz.com/');

      cy.get('.slide__description').rightclick({force: true});

      cy.wait(2000)

      cy.log("check the context menu")

      cy.contains('Tutorials').trigger('mouseover');
      
      cy.log("Hovering on Tutorials")
      
      cy.wait(2000)
      cy.contains('Contact').dblclick({force:true});
    })


    it.only('Cypress Test Case - Unstand Scrlling', function () {

      
      cy.visit("https://docs.cypress.io/api/commands/dblclick")

      cy.wait(5000)

      cy.get('a[href="https://github.com/cypress-io/cypress-realworld-app"]').scrollIntoView() 
    })

  })
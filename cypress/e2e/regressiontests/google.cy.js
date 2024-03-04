describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com/')

    cy.get("#APjFqb").type("Pets{enter}")
    
  })
})
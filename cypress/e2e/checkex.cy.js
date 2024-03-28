describe('check box', () => {
  it('checkbox', () => {

    cy.visit('https://register.rediff.com/register/register.php')

    cy.get('.nomargin').check()
    cy.get('.nomargin').should('be.checked')

    cy.wait(2000)

    cy.get('.nomargin').uncheck().should('not.be.checked')



  })


  it.only("check box 2", () => {


    cy.visit('https://bit.ly/3vswFBe')

    cy.get('input[type="checkbox"]').check()

    cy.wait(2000)

    cy.get('input[type="checkbox"]').uncheck()

    cy.wait(3000)

    cy.get('input[type="checkbox"]').check(["HTML", "Python", "C#"])

    cy.wait(2000)
    cy.get('input[type="checkbox"]').uncheck(["Python", "HTML"])

    for (let i = 1; i <= 5; i + 2) {

      cy.get('input[type="checkbox"]').eq(i).check()
    }


  })
})
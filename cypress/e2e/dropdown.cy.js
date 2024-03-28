describe('Drop down', () => {
  it('dropdown', () => {

    cy.visit('https://register.rediff.com/register/register.php')

    //Text

    cy.get('select[name*="DOB_Month"]').select("OCT").should("have.value", "02")

    //value 

    cy.get('select[name*="DOB_Month"]').select("11")

    //index 

    cy.get('select[name*="DOB_Month"]').select(2)




  })

  it.only("dropdown2", () => {


    Cypress.on("uncaught:exception", () => {

      return false;
    });
    cy.visit('https://chercher.tech/practice/dropdowns')

    cy.get('#order-changed').select(2)
  })

})
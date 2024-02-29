describe('Verify add employee functionality', () => {

  it('Verify adding employee with valid details', () => {

    cy.visit("/web/index.php/auth/login")

    cy.get('input[name="username2"]').type("Admin")

    cy.get("input[placeholder='Password']").type("admin123")

    cy.get('button[type="submit"]').click()

    cy.contains('Time at Work').should('be.visible')

    cy.contains('PIM').click()
    cy.contains('Add Employee').click()

    cy.get('input[name="firstName"]').type("Madhu")

    cy.get('input[name="lastName"]').type("N")

    cy.get('button[type="submit"]').click()

    cy.contains('Successfully Saved').should("be.visible")

  })


  it('Verify Mandotory fileds in Add employee page', () => {

    cy.visit("/web/index.php/auth/login")

    cy.get('input[name="username"]').type("Admin")

    cy.get("input[placeholder='Password']").type("admin123")

    cy.get('button[type="submit"]').click()

    cy.contains('Time at Work').should('be.visible')

    cy.contains('PIM').click()
    cy.contains('Add Employee').click()

    cy.get('button[type="submit"]').click()

    cy.log("clicked on submit button")

    cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').eq(0).should("be.visible")
    cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').eq(1).should("be.visible")

  })
})
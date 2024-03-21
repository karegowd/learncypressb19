describe('Delete ', () => {
    it('passes', () => {


        cy.visit("/web/index.php/auth/login")

        //cy.wait(30000)

        cy.get('input[name="username"]').type("Admin")

        cy.get("input[placeholder='Password']").type(Cypress.env('password'))

        cy.get('button[type="submit"]').click()

        cy.contains('Time at Work').should('be.visible')

        cy.contains('PIM').click()
        for (let i = 1; i <= 10; i++) {
            cy.get('button[class="oxd-icon-button oxd-table-cell-action-space"]').first().click()
            cy.contains(' Yes, Delete ').click()
        }
    })
})


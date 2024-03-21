class addEmployeePage {

   addEmployeeSubmenu() {

      return 'Add Employee'
   }

   firstnameInput() {

      return 'input[name="firstName"]'
   }

   lastNameInput() {
      return 'input[name="lastName"]'

   }

   saveBtn() {

      return 'button[type="submit"]'
   }

   successMessage() {

      return 'Successfully Saved'
   }

   addEmployee(firstname, lastName) {

      cy.contains(this.addEmployeeSubmenu()).click()

      cy.get(this.firstnameInput()).type(firstname)

      cy.get(this.lastNameInput()).type(lastName)

      cy.get(this.saveBtn()).click()

      cy.contains(this.successMessage()).should("be.visible")
   }

}

const addemployee = new addEmployeePage()

export default addemployee
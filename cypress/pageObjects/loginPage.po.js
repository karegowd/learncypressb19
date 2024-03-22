class loginPage {

   orangeHrmLogo() {

      return 'img[alt="company-branding"]'
   }


   usernameInput() {

      return '//input[@name="username"]'

   }

   passwordInput() {

      return 'input[name="password"]'

   }

   // credsinput(field){

   //     return 'input[name="'+field+'"]'
   // }

   loginBtn() {

      return 'button[type="submit"]'

   }

   loginerrorMessage = 'Invalid credentials'

   loginwithcreds(username, password) {

      cy.xpath(this.usernameInput()).type(username)

      cy.get(this.passwordInput()).type(password)

      cy.get(this.loginBtn()).click()
   }

}

const login = new loginPage()

export default login
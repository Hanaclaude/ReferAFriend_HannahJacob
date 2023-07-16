import BasePage from './basePage'
import dashboardPage from './dashboardPage'

class LoginPage extends BasePage {
  constructor() {
    super()
    this.mainElement = '#new_session'
    this.username = 'input#username'
    this.password = 'input#password'
  }

  isDisplayed() {
    cy.get(this.mainElement)
      .should('be.visible')
  }

  login(user) {
    // Enter username and password and click Login
    this.enterValueIntoInputField(this.username, user.mobileNumber)
    this.enterValueIntoInputField(this.password, user.password)
    cy.get(this.mainElement)
      .contains('Login')
      .click()

    // Wait for dashboard to be displayed
    dashboardPage.isDisplayed()

    return dashboardPage
  }
}

export default new LoginPage()

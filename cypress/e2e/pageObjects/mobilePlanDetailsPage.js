import BasePage from './basePage'
import ReferAFriend from './referAFriend'

class MobilePlanDetailsPage extends BasePage {
  constructor() {
    super()
    this.menu = '#menu_list'
    this.pageTitle = 'div.ama-page-header'
  }

  isDisplayed() {
    cy.get(this.menu)
      .should('be.visible')
    cy.get(this.pageTitle)
      .should('contain', 'plan')
      .and('be.visible')
  }

  goToReferAFriend() {
    cy.get(this.menu)
      .contains('Refer a friend')
      .should('be.visible')
      cy.get(this.menu)
      .contains('Refer a friend')
      .click()
    ReferAFriend.isDisplayed()
    return ReferAFriend
  }
}

export default new MobilePlanDetailsPage()

import BasePage from './basePage'
import mobilePlanDetailsPage from './mobilePlanDetailsPage'

class DashboardPage extends BasePage {
  constructor() {
    super()
    this.mainElement = 'section[data-automation-id="mobile"]'
    this.serviceTile = 'div[data-automation-id="mobile-tileheader"'
  }

  isDisplayed() {
    cy.get(this.mainElement)
      .should('be.visible')
  }

  viewServiceDetails() {
    cy.get(this.serviceTile)
      .should('be.visible')

    // This is to handle the mixed content error in firefox as there is a redirect to a http url
    cy.intercept('GET', /https:\/\/www.*\.amaysim\.com\.au\/my-account\/oauth\/callback\?code.*/, (req) => {
      req.on('response', (res) => {
        res.headers.location = res.headers.location.replace('http:', 'https:')
      })
    })

    cy.get(this.serviceTile)
      .click()
      mobilePlanDetailsPage.isDisplayed()
    return mobilePlanDetailsPage
  }
}

export default new DashboardPage()

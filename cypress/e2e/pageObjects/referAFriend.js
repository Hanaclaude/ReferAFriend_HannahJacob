import BasePage from './basePage'

class ReferAFriend extends BasePage {
  constructor() {
    super()
    this.menu = '#menu_list'
    this.pageTitle = 'div.ama-page-header'
    this.Widget = 'div#friendbuylandingpage'
    this.referralLink = 'div#r'
    this.copyButton = 'div#s'
  }

  isDisplayed() {
    cy.get(this.menu).should('be.visible')
    cy.get(this.pageTitle).should('contain', 'refer a friend').and('be.visible')
  }

  copyReferralLink() {
    cy.location('pathname').should('include', '/refer_friends', { timeout: 1000 })

    // Switch to the iframe context
    cy.get('iframe').then(($iframe) => {
      cy.wrap($iframe.contents().find('body'))
        .find(this.referralLink)
        .click()

      // Verify that the "Copied!" pop-up message is displayed
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Copied!')
      })
    })
  }

  copyButtonClicked() {
    cy.location('pathname').should('include', '/refer_friends', { timeout: 1000 })

    // Switch to the iframe context
    cy.get('iframe').then(($iframe) => {
      cy.wrap($iframe.contents().find('body'))
        .find(this.copyButton)
        .click()

      // Verify that the "Copied!" pop-up message is displayed
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Copied!')
      })
    })
  }
}

export default new ReferAFriend()

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
    cy.get(this.menu)
      .should('be.visible')
    cy.get(this.pageTitle)
      .should('contain', 'refer a friend')
      .and('be.visible')
  }

 

  copyReferralLink() {
    cy.location('pathname')
      .should('include', '/refer_friends', { timeout: 1000 })
      .then(() => {
        cy.get('iframe');
      });

    describe('Referral Link Copying', () => {
      it('should display "Copied!" pop-up message when the referral link is clicked within an iframe', () => {
        cy.get('iframe').then(($iframe) => {
          const iframeDoc = $iframe.contents();
          const iframeBody = iframeDoc.find('body');
    
          // Intercept the window.alert method to capture the pop-up message
          cy.on('window:alert', cy.stub().as('alertStub'));
    
          // Interact with elements within the iframe
          cy.wrap(iframeBody)
            .find('div#r')
            .click();
    
          // Verify that the "Link Copied" pop-up message is displayed
          cy.get('@alertStub').should('be.calledWith', 'Copied!');
        });
      });
    });
    
    describe('Referral Link Copying', () => {
      it('should copy the referral link within an iframe', () => {
        // Switch to the iframe context
        cy.get('iframe').then(($iframe) => {
          const iframeDoc = $iframe.contents();
          const iframeBody = iframeDoc.find('body');
    
          // Interact with elements within the iframe
          iframeBody.find('div#s').click();
    
          // Assert that the referral link has been copied to the clipboard
          cy.window().then((win) => {
            cy.stub(win.navigator.clipboard, 'writeText').as('copyTextStub');
          });
    
          // Verify that the copyText function is called with the referral link
          cy.get('@copyTextStub').should('be.calledWith', 'Referral Link');
        });
      });
    });


  }
}

export default new ReferAFriend()

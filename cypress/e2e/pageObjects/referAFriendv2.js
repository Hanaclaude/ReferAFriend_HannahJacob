import BasePage from './basePage'

class ReferAFriendv2 extends BasePage {
  constructor() {
    super()
    this.menu = '#menu_list'
    this.pageTitle = 'div.ama-page-header'
    this.Widget = 'div[id="Widget-Screen"]'
    this.referralLink = 'div#r'
    this.emailAddressForm = 'input#a'
    this.sendButton = 'span.Text-markdown-container'
  }

  isDisplayed() {
    cy.get(this.menu)
      .should('be.visible')
    cy.get(this.pageTitle)
      .should('contain', 'refer a friend')
      .and('be.visible')
  }

 sendReferralLink() {
  cy.location('pathname')
    .should('include', '/refer_friends', { timeout: 1000 })
    .then(() => {
      cy.get('iframe');
    });


    describe('Referral Link Sharing', () => {
      it('should send referral via email and verify the thank you message', () => {
        const email = Cypress.env('CY_EMAIL');
    
        cy.get('iframe').then(($iframe) => {
          const iframeDoc = $iframe.contents();
          const iframeBody = iframeDoc.find('body');
    
          // Enter the email address
          cy.wrap(iframeBody)
            .find('input[type="email"]')
            .type(email);
    
          // Click the send button
          cy.wrap(iframeBody)
            .find('span.Text-markdown-container')
            .click();
    
          // Verify the new page and the thank you message
          cy.get('h1').should('contain', 'THANKS FOR SHARING THE BIG LOVE');
        });
      });
    });
    


  };
}


export default new ReferAFriendv2()

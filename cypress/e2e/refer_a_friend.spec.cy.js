import dashboardPage from './pageObjects/dashboardPage'
import homePage from './pageObjects/homePage'
import loginPage from './pageObjects/loginPage'
import mobilePlanDetailsPage from './pageObjects/mobilePlanDetailsPage'
import referAFriendPage from './pageObjects/referAFriend'
import referAFriendPagev2 from './pageObjects/referAFriendv2'

describe('Mobile Service', () => {
  let user
  let friend

  before(() => {
    // Read user's username & password from environment variables
    user = {
      mobileNumber: Cypress.env("CYPRESS_USERNAME"),
      password: Cypress.env("CYPRESS_PASSWORD")
    }
    friend = {
      emailAddress: Cypress.env("EMAIL_ADDRESS")
    }
      
      cy.viewport(1280, 800) // Set Chrome browser to the desired width and height
  
    homePage.visit() // Visit Home Page
  })



  it('Can copy and send the referral link', () => {
    homePage.goToLoginPage() // Click on "Accounts" to go to Login Page
    loginPage.login(user) // Enter mobile number and password to Login into the dashboard page
    dashboardPage.viewServiceDetails() // From the dashboard click on a mobile service to see details page
    mobilePlanDetailsPage.goToReferAFriend() // On the Mobile Plan details page click Refer a friend
    referAFriendPage.copyReferralLink() // On the Refer a friend page, copy the referral link
    referAFriendPagev2.sendReferralLink() // On the Refer a friend page, send the referral link
  })
})

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  trashAssetsBeforeRuns: true,
  pageLoadTimeout: 90000,
  e2e: {
    baseUrl: 'https://www.amaysim.com.au',
    specPattern: 'cypress/e2e/**/*.spec.cy.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    CYPRESS_USERNAME:"0466134574",
    CYPRESS_PASSWORD:"AWqasde321",
    CYPRESS_EMAIL:"test@email.com",
  },
});

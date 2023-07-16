class BasePage {
  visit() {
    cy.visit(this.url)
  }

  enterValueIntoInputField(field, value) {
    cy.get(field)
      .should('be.visible')
      .type(value)
  }
}

export default BasePage

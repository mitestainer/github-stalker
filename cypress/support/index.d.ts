/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to search for an organization
     * @example cy.searchFor('facebook')
     */
    searchFor(handle: string): Chainable<Element>
  }
}

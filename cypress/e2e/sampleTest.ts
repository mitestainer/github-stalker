/// <reference path="../support/index.d.ts" />

describe('Regular Flow', () => {
  it('should access an organization page and click to show more', () => {
    cy.visit('/')
    cy.searchFor('facebook')

    cy.get(`[data-cy="grid"]`).within(() => {
      cy.get(`[data-cy="repo-card"]`).should('have.length', 12)
    })

    cy.findByRole('button', {name: /load more/i}).click()
    cy.wait(4000)

    cy.get(`[data-cy="grid"]`).within(() => {
      cy.get(`[data-cy="repo-card"]`).should('have.length', 24)
    })
  })
});

describe('Viewing two different organizations', () => {
  it('should visit one organization and then another', () => {
    cy.visit('/')
    cy.searchFor('google')
    cy.searchFor('twitter')
  });
});

describe('Viewing an organization with no public repositories', () => {
  it('should enter a page with zero repos', () => {
    cy.visit('/')
    cy.searchFor('aptovc')
    cy.findByText('This organization has no repositories to show.').should('exist')
  });
});

describe('Trying to reach a non-existing organization', () => {
  it('should view the 404 page', () => {
    cy.visit('/')
    cy.searchFor('fn3jnjlfen')
    cy.findByRole('img', {name: '404 - Not found'}).should('exist')
  });
});

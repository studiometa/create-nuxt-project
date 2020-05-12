// https://docs.cypress.io/api/introduction/api.html

describe('Home', () => {
  it('should have a h1', () => {
    cy.visit('/');
    cy.contains('h1', 'Hello world!');
  });
});

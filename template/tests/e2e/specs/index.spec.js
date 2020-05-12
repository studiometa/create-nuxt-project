// https://docs.cypress.io/api/introduction/api.html

describe('Home', () => {
  it('should redirect to the first step.', () => {
    cy.visit('/');
    cy.location().should(({ pathname }) => {
      expect(pathname).to.eq('/etape/premiere-etape');
    });
    cy.contains('h1', 'Étape premiere-etape');
  });
});

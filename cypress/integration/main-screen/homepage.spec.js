describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should redirect to the catalogue page', () => {
    cy.get('.active-link').invoke('text').should('contain', '🍕 pizza');
  });

  it('default currency should be euro', () => {
    cy.get('.currency.is-active').invoke('text').should('equal', '€');
  });
});

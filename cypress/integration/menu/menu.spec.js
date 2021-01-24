describe('Menu', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('active link should change when switching between items', () => {
    const items = ['pizza', 'cart', 'login'];

    items.forEach((i) => {
      cy.get('.nav-link').contains(i).as('selectedLink');
      cy.get('@selectedLink').click().should('have.class', 'active-link');
    });
  });

  it('clicking pizza should navigate to catalogue', () => {
    cy.get('app-catalogue-item').should('have.length.at.least', 8);
  });

  it('clicking cart should navigate to cart', () => {
    cy.get('.nav-link').contains('cart').click().get('app-shopping-cart').should('be.visible');
  });

  it('clicking login should navigate to the login form', () => {
    cy.get('.nav-link').contains('login').click().get('app-login').should('be.visible');
  });

});

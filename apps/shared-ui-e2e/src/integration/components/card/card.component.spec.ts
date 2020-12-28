describe('shared-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=card--normal'));

  it('should render the component', () => {
    cy.get('wot-card').should('exist');
  });
});

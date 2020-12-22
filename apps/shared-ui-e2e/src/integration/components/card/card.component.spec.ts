describe('shared-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cardcomponent--primary'));

  it('should render the component', () => {
    cy.get('wot-card').should('exist');
  });
});

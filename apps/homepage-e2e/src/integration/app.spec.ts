import * as app from '../support/app.po';

describe('homepage', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    app.getGreeting().contains('Welcome to homepage!');
  });

  it('should display api message', () => {
    cy.get('div[data-cy="message"]', {
      timeout: 1000,
    }).should('be.visible');
    app.getMessage().contains('Message: Welcome to api!');
  });

  it('should display graphcms articles', () => {
    cy.get('[data-cy^="article-title-"]', {
      timeout: 1000,
    }).should('be.visible');
    app.getArtices().first().contains('ブログつくりました');
  });

  it('pixcel test', () => {
    cy.get('[data-cy^="article-title-"]', {
      timeout: 1000,
    }).should('be.visible');
    cy.matchImageSnapshot();
  });
});

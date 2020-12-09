import * as app from '../support/app.po';

describe('homepage', () => {
  beforeEach(() => cy.visit('/'));

  it('should display 記事のタグ一覧', () => {
    cy.get('[data-cy^="filter-tag-"]', {
      timeout: 1000,
    })
      .contains('#タグ検証用')
      .should('be.visible');
  });

  it('should display graphcms articles', () => {
    cy.get('[data-cy^="article-title-"]', {
      timeout: 1000,
    }).should('be.visible');
    app.getArtices().last().contains('ブログつくりました');
  });

  it('pixcel test', () => {
    cy.get('[data-cy^="article-title-"]', {
      timeout: 1000,
    }).should('be.visible');
    cy.matchImageSnapshot();
  });
});

describe('article detail page', () => {
  beforeEach(() => {
    cy.visit('/');
    app.getArtices().last().contains('ブログつくりました').click();
  });

  it('should display graphcms article details', () => {
    cy.get('h1', {
      timeout: 1000,
    })
      .should('be.visible')
      .contains('ブログつくりました');
  });

  it('pixcel test', () => {
    cy.get('h1', {
      timeout: 1000,
    }).should('be.visible');
    cy.matchImageSnapshot();
  });
});

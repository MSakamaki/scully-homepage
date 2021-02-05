import * as app from '../support/app.po';

describe('homepage', () => {
  beforeEach(() => {
    cy.intercept(
      'POST',
      'https://api-ap-northeast-1.graphcms.com/v2/ckgioul2y9kcd01zb36y9ffqg/master',
      { fixture: 'graphql.json' }
    ).as('graphql');
    cy.visit('/');
    cy.wait('@graphql');
  });

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

  describe('article detail page', () => {
    beforeEach(() => {
      app.getArtices().contains('マークダウン検証用').click();
    });

    it('should display graphcms article details', () => {
      cy.get('h1', {
        timeout: 1000,
      })
        .should('be.visible')
        .contains('マークダウン検証用');
    });

    it('pixcel test', () => {
      cy.get('h1', {
        timeout: 1000,
      }).should('be.visible');
      // TODO: Apply a temporary wait, really a NoopAnimation, to disable animation.
      cy.wait(1000);
      cy.matchImageSnapshot();
    });
  });
});

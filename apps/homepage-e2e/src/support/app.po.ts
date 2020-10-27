export const getGreeting = () => cy.get('h1');

export const getMessage = () => cy.get('[data-cy="message"]');

export const getArtices = () => cy.get('[data-cy^="article-title-"]');

describe('Create question page', () => {
  beforeEach(() => {
    cy.visitApp();
    cy.getByDataCy('register').click();
    cy.getByDataCy('sign-up-username').type('user');
    cy.getByDataCy('sign-up-email').type('email@example.com');
    cy.getByDataCy('sign-up-password').type('password');
    cy.getByDataCy('sign-up-button').click();
    cy.getByDataCy('ask-a-question').click();
  });
  it('should create a new question', () => {
    cy.getByDataCy('title-input').type('How to change a tire?');
    cy.getByDataCy('description-input').type('I need help with changing a tire on my BMW.');
    cy.getByDataCy('publish-button').click();
  });
});

describe('Question Page', () => {
  beforeEach(() => {
    cy.visitApp();
    cy.getByDataCy('question-card').first().click();
  });

  it('should display the question', () => {
    cy.getByDataCy('question-container').should('exist');
  });

  it('should display the profile', () => {
    cy.getByDataCy('profile-display').should('exist');
  });

  it('should display the list of answers', () => {
    cy.getByDataCy('answers').should('exist');
  });
});

describe('Home Page', () => {
  beforeEach(() => {
    cy.visitApp();
  });
  it('should display the list of questions', () => {
    cy.getByDataCy('list-container').should('exist');
  });
});

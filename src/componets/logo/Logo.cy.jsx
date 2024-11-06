import Logo from './Logo';

describe('Logo Component', () => {
  it('renders correctly', () => {
    cy.mount(<Logo />);

    cy.getByDataCy('logo').should('exist');
  });
});

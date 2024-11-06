import ProfileDisplay from './ProfileDisplay';

describe('ProfileDisplay Component', () => {
  it('renders correctly', () => {
    cy.mount(<ProfileDisplay>test</ProfileDisplay>);

    cy.getByDataCy('profile-display').should('contain.text', 'test');
  });
});

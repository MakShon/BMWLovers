import Button from './Button';

describe('ProfileDisplay Component', () => {
  it('renders correctly', () => {
    cy.mount(<Button>test</Button>);

    cy.getByDataCy('button').should('exist');
  });
  it('renders with primary false', () => {
    cy.mount(<Button primary={false}>test</Button>);

    cy.getByDataCy('button').should('exist');
  });
});

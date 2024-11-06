import Input from './Input';

describe('Input Component', () => {
  const placeholderText = 'Enter text';
  const testValue = 'Hello World';

  it('renders correctly with given props', () => {
    cy.mount(<Input type="text" placeholder={placeholderText} value={testValue} onChange={() => {}} />);

    cy.getByDataCy('input')
      .should('have.attr', 'type', 'text')
      .and('have.attr', 'placeholder', placeholderText)
      .and('have.value', testValue);
  });

  it('calls onChange when typing', () => {
    const handleChange = cy.stub();
    cy.mount(<Input type="text" placeholder={placeholderText} value="" onChange={handleChange} />);

    cy.getByDataCy('input').type('Hello');
    cy.wrap(handleChange).should('have.been.called');
  });
});

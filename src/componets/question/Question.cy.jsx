import Question from './Question';

describe('Question Component', () => {
  const questionData = {
    avatarUrl: 'https://example.com/avatar.png',
    name: 'Jane Doe',
    timeLeft: '3 hours ago',
    title: 'Interesting Question',
    description: 'This is an interesting question description.',
  };

  it('renders correctly with given data', () => {
    cy.mount(<Question question={questionData} isTruncate={false} />);

    cy.getByDataCy('avatar').should('have.attr', 'src', questionData.avatarUrl);
    cy.getByDataCy('name').should('contain.text', questionData.name);
    cy.getByDataCy('time-left').should('contain.text', questionData.timeLeft);
    cy.getByDataCy('title').should('contain.text', questionData.title);
    cy.getByDataCy('description').should('contain.text', questionData.description);
  });

  it('applies truncation when isTruncate is true', () => {
    cy.mount(<Question question={questionData} isTruncate={true} />);

    cy.getByDataCy('description').should('have.css', 'overflow', 'hidden');
  });
});

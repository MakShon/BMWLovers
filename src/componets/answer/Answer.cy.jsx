import Answer from './Answer';

describe('Answer Component', () => {
  const answerData = {
    avatarUrl: 'https://example.com/avatar.png',
    name: 'John Doe',
    timeLeft: '2 hours ago',
    title: 'Helpful Answer',
    description: 'This is a helpful answer description.',
  };

  it('renders correctly', () => {
    cy.mount(<Answer answer={answerData} />);

    cy.getByDataCy('answer').should('exist');
  });
});

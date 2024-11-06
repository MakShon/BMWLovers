import { Avatar, Description, Name, QuestionContainer, TimeLeft, Title, UserInfoContainer } from './styles';

const Question = ({ question, isTruncate }) => {
  return (
    <QuestionContainer>
      <UserInfoContainer>
        <Avatar src={question.avatarUrl} alt="User Avatar" data-cy="avatar" />
        <div>
          <Name data-cy="name">{question.name}</Name>
          <TimeLeft data-cy="time-left">{question.timeLeft}</TimeLeft>
        </div>
      </UserInfoContainer>

      <Title data-cy="title">{question.title}</Title>
      <Description data-cy="description" $truncate={isTruncate}>
        {question.description}
      </Description>
    </QuestionContainer>
  );
};

export default Question;

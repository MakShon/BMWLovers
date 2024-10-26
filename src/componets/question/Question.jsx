import { Avatar, Description, Name, QuestionContainer, TimeLeft, Title, UserInfoContainer } from './styles';

const Question = ({ question, isTruncate }) => {
  return (
    <QuestionContainer>
      <UserInfoContainer>
        <Avatar src={question.avatarUrl} alt="User Avatar" />
        <div>
          <Name>{question.name}</Name>
          <TimeLeft>{question.timeLeft}</TimeLeft>
        </div>
      </UserInfoContainer>

      <Title>{question.title}</Title>
      <Description $truncate={isTruncate}>{question.description}</Description>
    </QuestionContainer>
  );
};

export default Question;

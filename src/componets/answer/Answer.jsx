import { AnswerContainer, Avatar, Description, Name, TimeLeft, Title, UserInfoContainer } from './styles';

const Answer = ({ answer }) => {
  return (
    <AnswerContainer data-cy={'answer'}>
      <UserInfoContainer>
        <Avatar src={answer.avatarUrl} alt="User Avatar" />
        <div>
          <Name>{answer.name}</Name>
          <TimeLeft>{answer.timeLeft}</TimeLeft>
        </div>
      </UserInfoContainer>

      <Title>{answer.title}</Title>
      <Description>{answer.description}</Description>
    </AnswerContainer>
  );
};

export default Answer;

import { useState } from 'react';
import { LuMessageSquare } from 'react-icons/lu';
import { useParams } from 'react-router-dom';

import avatarDefault from '../../assets/images/avatarDefault.jpg';
import Answer from '../../componets/answer/Answer';
import Button from '../../componets/button/Button';
import Input from '../../componets/input/Input';
import { ListContainer } from '../../componets/list/List';
import ProfileDisplay from '../../componets/profileDisplay/ProfileDisplay';
import Question from '../../componets/question/Question';
import useAnswers from '../../hooks/useAnswers';
import { useAuthContext } from '../../providers/AuthProvider';
import { ContentContainer, CreateAnswer, QuestionContainer } from './styles';

const QuestionPage = () => {
  const { questionId } = useParams();

  const questionsData = JSON.parse(localStorage.getItem('questions'));
  const answersData = JSON.parse(localStorage.getItem('answers')) || [];

  const question = questionsData.find((item) => item.id === Number(questionId));
  const questionAnswers = answersData.filter((item) => item.questionId === Number(questionId));

  const [description, setDescription] = useState('');
  const { currentUser, isAuth, updateUser } = useAuthContext();
  const { addAnswer } = useAnswers();

  const handlePublish = () => {
    if (!isAuth) {
      alert('You need to be logged in to publish a answer');
      return;
    }

    const newAnswer = {
      id: Date.now(),
      description,
      avatarUrl: avatarDefault,
      name: currentUser.username,
      timeLeft: 'Just now',
      questionId: Number(questionId),
    };

    addAnswer(newAnswer);

    const updatedUser = { ...currentUser, answerIds: [...currentUser.answerIds, newAnswer.id] };
    updateUser(updatedUser);

    setDescription('');
  };

  return (
    <ContentContainer>
      <QuestionContainer>
        <Question question={question} />
        <h1>Suggestions</h1>
        <CreateAnswer>
          <Input
            type="text"
            placeholder="Type here your wise suggestion"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button onClick={handlePublish}>
            <LuMessageSquare /> Suggest
          </Button>
        </CreateAnswer>
        <ListContainer>
          {questionAnswers.map((answer) => (
            <Answer key={answer.id} answer={answer} />
          ))}
        </ListContainer>
      </QuestionContainer>
      <ProfileDisplay>{question.name}</ProfileDisplay>
    </ContentContainer>
  );
};

export default QuestionPage;

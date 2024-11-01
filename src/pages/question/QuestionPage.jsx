import { LuMessageSquare } from 'react-icons/lu';
import { useParams } from 'react-router-dom';

import Answer from '../../componets/answer/Answer';
import Button from '../../componets/button/Button';
import Input from '../../componets/input/Input';
import { ListContainer } from '../../componets/list/List';
import ProfileDisplay from '../../componets/profileDisplay/ProfileDisplay';
import Question from '../../componets/question/Question';
import { answersData, questionsData } from '../../constants';
import { ContentContainer, CreateAnswer, QuestionContainer } from './styles';

const QuestionPage = () => {
  const { questionId } = useParams();
  const question = questionsData.find((item) => item.id === Number(questionId));
  const questionAnswers = answersData.filter((item) => item.questionId === Number(questionId));
  return (
    <ContentContainer>
      <QuestionContainer>
        <Question question={question} />
        <h1>Suggestions</h1>
        <CreateAnswer>
          <Input type="text" placeholder="Type here your wise suggestion" />
          <Button>
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

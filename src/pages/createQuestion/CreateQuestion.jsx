import { FiSend } from 'react-icons/fi';

import Button from '../../componets/button/Button';
import Input from '../../componets/input/Input';
import ProfileDisplay from '../../componets/profileDisplay/ProfileDisplay';
import { ContentContainer, CreateQuestionContainer, StyledTextArea } from './styles';

const CreateQuestion = () => {
  return (
    <ContentContainer>
      <CreateQuestionContainer>
        <Input placeholder="Type catching attention title" />
        <StyledTextArea placeholder="Type your question" />
        <Button>
          <FiSend size={17} />
          Publish
        </Button>
      </CreateQuestionContainer>
      <ProfileDisplay>Maks</ProfileDisplay>
    </ContentContainer>
  );
};

export default CreateQuestion;

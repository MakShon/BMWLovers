import { useState } from 'react';
import { FiSend } from 'react-icons/fi';

import avatarDefault from '../../assets/images/avatarDefault.jpg';
import Button from '../../componets/button/Button';
import Input from '../../componets/input/Input';
import ProfileDisplay from '../../componets/profileDisplay/ProfileDisplay';
import useQuestions from '../../hooks/useQuestions';
import { useAuthContext } from '../../providers/AuthProvider';
import { ContentContainer, CreateQuestionContainer, StyledTextArea } from './styles';

const CreateQuestion = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { currentUser, isAuth, updateUser } = useAuthContext();
  const { addQuestion } = useQuestions();

  const handlePublish = () => {
    if (!isAuth) {
      alert('You need to be logged in to publish a question');
      return;
    }

    const newQuestion = {
      id: Date.now(),
      title,
      description,
      avatarUrl: avatarDefault,
      name: currentUser.username,
      timeLeft: 'Just now',
    };

    addQuestion(newQuestion);

    const updatedUser = { ...currentUser, questionIds: [...currentUser.questionIds, newQuestion.id] };
    updateUser(updatedUser);

    setTitle('');
    setDescription('');
  };

  return (
    <ContentContainer>
      <CreateQuestionContainer>
        <Input placeholder="Type catching attention title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <StyledTextArea
          placeholder="Type your question"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button onClick={handlePublish}>
          <FiSend size={17} />
          Publish
        </Button>
      </CreateQuestionContainer>
      <ProfileDisplay>{currentUser.username}</ProfileDisplay>
    </ContentContainer>
  );
};

export default CreateQuestion;

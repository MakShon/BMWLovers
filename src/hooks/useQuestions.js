import { questionsData } from '../constants';
import useLocalStorage from './useLocalStorage';

const useQuestions = () => {
  const { value: questions, setLocalStorage: setQuestions } = useLocalStorage('questions', questionsData);

  const addQuestion = (newQuestion) => {
    const updatedQuestions = [...questions, newQuestion];
    setQuestions(updatedQuestions);
  };

  return {
    questions,
    addQuestion,
  };
};

export default useQuestions;

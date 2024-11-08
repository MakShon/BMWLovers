import { answersData } from '../constants';
import useLocalStorage from './useLocalStorage';

const useAnswers = () => {
  const { value: answers, setLocalStorage: setAnswers } = useLocalStorage('answers', answersData);

  const addAnswer = (newAnswer) => {
    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);
  };

  return {
    answers,
    addAnswer,
  };
};

export default useAnswers;

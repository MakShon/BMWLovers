import { useEffect, useState } from 'react';

const useQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const storedQuestions = localStorage.getItem('questions');
    if (storedQuestions) {
      setQuestions(JSON.parse(storedQuestions));
    }
  }, []);

  const addQuestion = (newQuestion) => {
    const updatedQuestions = [...questions, newQuestion];
    setQuestions(updatedQuestions);
    localStorage.setItem('questions', JSON.stringify(updatedQuestions));
  };

  return {
    questions,
    addQuestion,
  };
};

export default useQuestions;

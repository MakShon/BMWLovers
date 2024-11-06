import { useEffect, useState } from 'react';

const useAnswers = () => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const storedAnswers = localStorage.getItem('answers');
    if (storedAnswers) {
      setAnswers(JSON.parse(storedAnswers));
    }
  }, []);

  const addAnswer = (newAnswer) => {
    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);
    localStorage.setItem('answers', JSON.stringify(updatedAnswers));
  };

  return {
    answers,
    addAnswer,
  };
};

export default useAnswers;

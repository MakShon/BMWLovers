import { Link } from 'react-router-dom';

import { ListContainer } from '../componets/list/List';
import Question from '../componets/question/Question';
import useQuestions from '../hooks/useQuestions';
import { useSearch } from '../providers/SearchProvider';

const Home = () => {
  const { query } = useSearch();
  const { questions } = useQuestions();
  const filteredQuestions = questions.filter((item) => item.title.includes(query));
  if (!filteredQuestions.length) {
    return (
      <img
        style={{ maxWidth: '400px', margin: '0 auto' }}
        src="https://saferoomdesigns.com/wp-content/uploads/2021/06/item_no.png"
        alt="Nothing found"
      />
    );
  }
  return (
    <ListContainer>
      {filteredQuestions.map((question) => (
        <Link key={question.id} to={`/questions/${question.id}`}>
          <Question question={question} isTruncate />
        </Link>
      ))}
    </ListContainer>
  );
};

export default Home;

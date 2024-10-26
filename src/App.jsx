import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './componets/header/Header';
import Sidebar from './componets/sidebar/Sidebar';
import Wrapper from './componets/wrapper/Wrapper';
import CreateQuestion from './pages/createQuestion/CreateQuestion';
import Home from './pages/Home';
import QuestionPage from './pages/question/QuestionPage';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
import YourAnswers from './pages/YourAnswers';
import YourQuestions from './pages/YourQuestions';
import { AuthProvider } from './providers/AuthProvider';
import { SearchProvider } from './providers/SearchProvider';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SearchProvider>
          <Header />
          <Wrapper>
            <Sidebar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/your-questions" element={<YourQuestions />} />
                <Route path="/your-answers" element={<YourAnswers />} />
                <Route path="/questions/:questionId" element={<QuestionPage />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/ask-a-question" element={<CreateQuestion />} />
              </Routes>
            </main>
          </Wrapper>
        </SearchProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;

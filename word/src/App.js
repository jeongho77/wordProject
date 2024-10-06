import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './Component/Header';
import Plan from './Page/Plan/Plan';
import Quiz from './Page/Quiz/Quiz';
import QuizList from './Page/Quiz/QuizList';
import QuizDetail from './Page/Quiz/Detail/Detail';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    // AnimatePresence로 애니메이션 처리
    <AnimatePresence>
      {/* 페이지 전환 시 애니메이션 효과를 주기 위해 key 값을 location.pathname으로 설정 */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Plan />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quizlist" element={<QuizList />} />
        <Route path="/quizlist/detail" element={<QuizDetail />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "1920px",
        minHeight: "100vh",
        alignItems: "center",
      }}
    >
      <Router>
        <Header />
        <AnimatedRoutes /> {/* 애니메이션이 적용된 라우팅 컴포넌트 */}
      </Router>
    </div>
  );
}

export default App;

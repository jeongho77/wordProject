import logo from './logo.svg';
import Header from './Component/Header';
import Plan from './Page/Plan/Plan';
import Quiz from './Page/Quiz/Quiz';
import QuizList from './Page/Quiz/QuizList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        width : "1920px",
        // paddingTop: "100px",
        minHeight: "100vh",
        alignItems: "center",
      }}>

        <Router>
          <Header />
            <Routes>
                <Route path="/" element={<Plan/>}/>
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/quizlist" element={<QuizList />} /> {/* QuizList 경로 설정 */}
            </Routes>
        </Router>
    </div>
  );
}

export default App;

import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Screens/Q1_LandingPage/LandingPage";
import Dashboard from "./Screens/Q2_Dashboard/Dashboard";
import QuizScreen from "./Screens/Q3_QuizScreen/QuizScreen";
import QuizResult from "./Screens/Q4_QuizResult/QuizResult";
function App() {
  const [getState, setGetState] = useState(() => {
    const storedState = parseInt(localStorage.getItem("web_state"));
    return isNaN(storedState) ? 0 : storedState;
  });

  useEffect(() => {
    document.documentElement.style.backgroundColor =
      getState === 0 || isNaN(getState) ? "#FFF" : "#1e293b";
  }, [getState]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/*" element={<LandingPage />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/quiz" element={<QuizScreen />}></Route>
          <Route exact path="/quiz/result" element={<QuizResult />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Screens/Q1_LandingPage/LandingPage";
import Dashboard from "./Screens/Q2_Dashboard/Dashboard";
import QuizScreen from "./Screens/Q3_QuizScreen/QuizScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/*" element={<LandingPage />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/quiz" element={<QuizScreen />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;

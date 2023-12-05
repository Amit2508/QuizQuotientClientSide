import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Screens/LandingPage";
import Dashboard from "./Screens/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/*"
            element={<LandingPage />}
          ></Route>
          <Route
            exact
            path="/dashboard"
            element={<Dashboard />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
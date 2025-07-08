import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import Day2 from "./pages/Day2";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/day-2" element={<Day2 />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;


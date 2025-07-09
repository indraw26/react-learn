import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import Day2 from "./pages/Day2";
import Day3 from "./pages/Day3";
import Day5 from "./pages/Day5";
import Day6 from "./pages/Day6";
import Day7 from "./pages/Day7";
import CustomerData from "./pages/CustomerData";

function App() {
  const routes = [
    { path: "day-2", element: <Day2 /> },
    { path: "day-3", element: <Day3 /> },
    { path: "day-5", element: <Day5 /> },
    { path: "day-6", element: <Day6 /> },
    { path: "day-7", element: <Day7 /> },
    { path: "customerData", element: <CustomerData/> },
  ];
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {routes.map((route, index) => (
            <Route path={route.path} element={route.element} key={index} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
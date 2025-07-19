import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import Day2 from "./pages/Day2";
import Day3 from "./pages/Day3";
import Day5 from "./pages/Day5";
import Day6 from "./pages/Day6";
import CustomerData from "./pages/CustomerData";
import BookList from "./pages/Day7/BookList";
import BookDetail from "./pages/Day7/BookDetail";

function App() {
  const routes = [
    { path: "day-2", element: <Day2 /> },
    { path: "day-3", element: <Day3 /> },
    { path: "day-5", element: <Day5 /> },
    { path: "day-6", element: <Day6 /> },
    { path: "day-7", element: <BookList /> },
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
          <Route path="day-7/book" element= {<BookList/>}/>
          <Route path="day-7/book/:id" element= {<BookDetail/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
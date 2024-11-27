import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LilypadTest from "../pages/LilypadTest";
import Home from "../pages/Home";
import WinishTechTest from "../pages/WinishTechTest";

function index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lilypad-test" element={<LilypadTest />} />
        <Route path="/winishtech-test" element={<WinishTechTest />} />
      </Routes>
    </Router>
  );
}

export default index;

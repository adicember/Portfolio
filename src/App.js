import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import HeroSection from "./components/HeroSection/HeroSection";
import SkillsSection from "./components/Skills/SkillsSection";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <div>
          {/* Adjust padding to match Navbar height */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<HeroSection />} />
            <Route path="/skills" element={<SkillsSection />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/know" element={<Projects />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

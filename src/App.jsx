import { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import CloversClassics from "./components/CloversClassics";
import Current from "./components/Current";

function App() {
  const myRef = useRef();
  const executeScroll = () => {
    const anchor = document.getElementById("anchorPludose");
    if (anchor) anchor.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  function AppContent() {
    const location = useLocation();
    return (
      <>
        <Routes>
          <Route path="/about" element={<About myRef={myRef} />} />
          <Route path="/current" element={<Current />} />
          <Route path="/projects" element={<Projects myRef={myRef} />} />
          <Route path="/projects/:project_name" element={<CloversClassics />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/" element={null} />
        </Routes>
        {["/", "/login"].includes(location.pathname) ? null : <Footer />}
      </>
    );
  }

  return (
    <Router>
      <div className="App">
        <Landing executeScroll={executeScroll} />
        <AppContent />
      </div>
    </Router>
  );
}

export default App;

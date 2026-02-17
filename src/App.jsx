import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";
import QuantumPomThanks from "./pages/QuantumPomThanks";

function App() {
  const [theme, setTheme] = useState(() => {
    // initialize from <html data-theme="..."> OR localStorage OR default
    const htmlTheme = document.documentElement.getAttribute("data-theme");
    return localStorage.getItem("theme") || htmlTheme || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aj-thanks-quantum" element={<QuantumPomThanks />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
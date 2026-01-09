import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";



function App() {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />  
                <Route path="/about" element={<About />} /> 
                <Route path="/contact" element={<Contact />} /> 
                <Route path="/projects" element={<Projects />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

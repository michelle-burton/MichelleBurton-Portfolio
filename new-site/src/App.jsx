import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'



function App() {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />       {/* Homepage */}
                <Route path="/about" element={<About />} /> {/* About page */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

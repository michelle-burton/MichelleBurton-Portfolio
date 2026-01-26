import ContactFloat from "../components/ContactFloat";

// Homepage
function Home() {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Where Design Meets Function</h1>
                <p>I bridge design and engineering to create scalable, performance-driven React applications with clean UX and thoughtful UI.</p>
                <a href="/projects" className="cta-button">View Projects</a>
            </div>
               <ContactFloat />
        </div>
    )
}

export default Home;


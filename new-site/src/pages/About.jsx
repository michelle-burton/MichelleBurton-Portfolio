function About() {
    return (
        <div>

            <section className="about-designer">
                <div className="container">
                    <div className="designer-photo">
                        <img src="images/MichelleBurton.jpeg" alt="Designer Photo: Michelle Burton"/>
                    </div>
                    <div className="designer-info">
                        <h2>About Me</h2>
                        <p className="bio">Hi, I'm <strong>Michelle Burton</strong>, a Front-End UI Engineer focused on elegant, high-performance web experiences that balance design and function.</p>

                        <h3>My Design Philosophy</h3>
                        <ul className="design-philosophy">
                            <li>🎨 Creativity meets functionality</li>
                            <li>⚡ Designs that tell a story</li>
                            <li>📱 User-focused, modern aesthetics</li>
                            <li>🔧 Precision in every pixel</li>
                        </ul>
                        <a href="/portfolio" className="cta-button">View My Work</a> 
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About;
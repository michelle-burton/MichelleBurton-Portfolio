function About() {
    return (
        <div>

            <section className="about-designer">
                <div className="container">
                    <div className="designer-photo">
                     <img src="images/MichelleBurton.jpeg" alt="Designer Photo: Michelle Burton" /> 
              
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
                        <br></br>
                       <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="msmichelleburton" data-version="v1"><a class="badge-base__link LI-simple-link text-black" href="https://www.linkedin.com/in/msmichelleburton?trk=profile-badge">Michelle Burton</a></div>
              
                       
                        {/* <a href="/portfolio" className="cta-button">View My Work</a>   */}

              
              
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About;
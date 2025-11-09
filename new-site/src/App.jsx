import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import './css/normalize.css'
import './css/style.css'

function App() {

  return (
      <>
        <Header />
        <div class="hero">
                <div class="hero-content">
                    <h1>Where Design Meets Function</h1>
                    <p>I bridge aesthetics and technology to deliver intuitive, high-performing web experiences.</p>
                    <a href="portfolio.html" class="cta-button">Discover More</a>
                </div>
          </div>
          <Footer />
    </>
  )
}

export default App

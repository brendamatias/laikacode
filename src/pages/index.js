import * as React from 'react'
import Header from '../components/Header'
import Home from '../components/Home'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Feedbacks from '../components/Feedbacks'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import '../assets/styles/global.scss'
import '../assets/styles/bootstrap-grid.css'

const IndexPage = () => (
  <main>
    <div className="bg-home">
      <Header />
      <Home />
    </div>
    <About />
    <Services />
    <Projects />
    <Feedbacks />
    <Contact />
    <Footer />
  </main>
)

export default IndexPage

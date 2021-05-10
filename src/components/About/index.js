import * as React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Container from '../Container'
import './styles.scss'

const About = () => (
  <Container>
    <div className="section-header">
      <h3>Sobre nós</h3>
      <div>
        <h1>We build adva ds corporate systems</h1>
        <div className="about-content">
          <p>
            As our motto, we always provide the best service especially for you
            and your company by growing your company to be better service
            especially for you and your company by growing your company to be
            better.
          </p>
          <div>
            <div>
              <h2 className="about-content-primary">15+</h2>
              <span>Projetos</span>
            </div>
            <div>
              <h2 className="about-content-secondary">40+</h2>
              <span>Clientes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="/#" className="about-button">
      Ler Mais <FaArrowRight />
    </a>
  </Container>
)

export default About

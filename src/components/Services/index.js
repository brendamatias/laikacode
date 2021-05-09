import * as React from 'react'
import { FaInstagram, FaArrowRight } from 'react-icons/fa'
import Container from '../Container'
import './styles.scss'

const Services = () => (
  <Container className="services">
    <div className="section-header">
      <h3>What we do</h3>
      <div>
        <h1>Perfect Solution For Your Business</h1>
        <p>
          As our motto, we always provide the best service especially for you
          and your company by growing your company to be better.
        </p>
      </div>
    </div>
    <ul>
      <li>
        <div>
          <div className="services-icons">
            <FaInstagram />
          </div>
          <h2>Grow Your Business</h2>
          <p>
            Our Bussiness Plan is a writeen document describing a company core
            bussines activities, objectives and how it plans to achieve its
            goals
          </p>
          <a href="/#" className="services-button">
            Lear More <FaArrowRight />
          </a>
        </div>
      </li>
      <li>
        <div>
          <div className="services-icons">
            <FaInstagram />
          </div>
          <h2>Grow Your Business</h2>
          <p>
            Our Bussiness Plan is a writeen document describing a company core
            bussines activities, objectives and how it plans to achieve its
            goals
          </p>
          <a href="/#" className="services-button button">
            Lear More <FaArrowRight />
          </a>
        </div>
      </li>
      <li>
        <div>
          <div className="services-icons">
            <FaInstagram />
          </div>
          <h2>Grow Your Business</h2>
          <p>
            Our Bussiness Plan is a writeen document describing a company core
            bussines activities, objectives and how it plans to achieve its
            goals
          </p>
          <a href="/#" className="services-button">
            Lear More <FaArrowRight />
          </a>
        </div>
      </li>
    </ul>
  </Container>
)

export default Services

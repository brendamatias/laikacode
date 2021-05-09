import * as React from 'react'
import { FaInstagram } from 'react-icons/fa'
import Container from '../Container'
import './styles.scss'

const servicesContent = [
  {
    title: 'Web Development',
    text: 'At vero eos censes tantas res gessite sine metu contineret',
    icon: '',
  },
  {
    title: 'Bussiness Development',
    text: 'At vero eos censes tantas res gessite sine metu contineret',
    icon: '',
  },
  {
    title: 'Digital Marketing',
    text: 'At vero eos censes tantas res gessite sine metu contineret',
    icon: '',
  },
]

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
      {servicesContent.map((service, index) => (
        <li>
          <div>
            <div className="services-icons">
              <FaInstagram />
            </div>
            <div>
              <strong>0{index + 1}</strong>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </Container>
)

export default Services

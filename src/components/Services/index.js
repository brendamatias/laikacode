import * as React from 'react'
import { FaInstagram } from 'react-icons/fa'
import Container from '../Container'
import './styles.scss'

const servicesContent = [
  {
    title: 'Desenvolvimento Web',
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
  <Container id="services" className="services">
    <div className="section-header">
      <h3>O que fazemos</h3>
      <div>
        <h1>Solução perfeita para o seu negócio</h1>
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

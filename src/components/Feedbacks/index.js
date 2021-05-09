import * as React from 'react'
import { FaStar, FaQuoteLeft, FaArrowRight } from 'react-icons/fa'
import Container from '../Container'
import './styles.scss'

import perfil from '../../assets/images/perfil.jpg'

const feedbacksUsers = [
  {
    name: 'Brenda Matias',
    role: 'Developer',
    stars: 5,
    content:
      'Iam trusted my company in allies and the results have been satisfying because my company has growing.',
  },
  {
    name: 'Brenda Matias',
    role: 'Developer',
    stars: 5,
    content:
      'Iam trusted my company in allies and the results have been satisfying because my company has growing.',
  },
  {
    name: 'Brenda Matias',
    role: 'Developer',
    stars: 5,
    content:
      'Iam trusted my company in allies and the results have been satisfying because my company has growing.',
  },
]

const Feedbacks = () => (
  <Container className="feedbacks">
    <div className="section-header">
      <h3>O que dizem sobre nós</h3>
      <div>
        <h1>Perfect Solution For Your Business</h1>
        <p>
          As our motto, we always provide the best service especially for you
          and your company by growing your company to be better.
        </p>
      </div>
    </div>

    <ul className="feedbacks-content">
      {feedbacksUsers.map((feedback) => (
        <li>
          <strong className="feedbacks-content-quot">
            <FaQuoteLeft />
          </strong>
          <p>{feedback.content}</p>
          <div className="feedbacks-content-user">
            <img src={perfil} alt="Perfil" />
            <div>
              <strong>{feedback.name}</strong>
              <span>{feedback.role}</span>
            </div>
          </div>
          <div className="feedbacks-content-stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <a href="/#" className="feedbacks-content-button">
            Ver Projeto <FaArrowRight />
          </a>
        </li>
      ))}
    </ul>
  </Container>
)

export default Feedbacks

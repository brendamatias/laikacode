import * as React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Container from '../Container'
import './styles.scss'

import projectImage from '../../assets/images/projects.jpg'

const projectsContent = [
  {
    name: 'Roda Acessível',
    content:
      'Iam trusted my company in allies and the results have been satisfying because my company has growing. Iam trusted my company in allies and the results have been satisfying because my company has growing. Iam trusted my company in allies and the results have been satisfying because my company has growing. Iam trusted my company in allies and the results have been satisfying because my company has growing.',
  },
  {
    name: 'Roda Acessível',
    content:
      'Iam trusted my company in allies and the results have been satisfying because my company has growing. Iam trusted my company in allies and the results have been satisfying because my company has growing.',
  },
  {
    name: 'Roda Acessível',
    content:
      'Iam trusted my company in allies and the results have been satisfying because my company has growing. Iam trusted my company in allies and the results have been satisfying because my company has growing.',
  },
]

const Projects = () => (
  <Container className="projects">
    <div className="section-header">
      <h3>Nossos projetos</h3>
      <div>
        <h1>Perfect Solution For Your Business</h1>
        <p>
          As our motto, we always provide the best service especially for you
          and your company by growing your company to be better.
        </p>
      </div>
    </div>

    <ul className="projects-content">
      {projectsContent.map((project, index) => (
        <li>
          {index % 2 === 0 ? <img src={projectImage} alt="Project" /> : ''}
          <div>
            <h3>0{index + 1}</h3>
            <h1>{project.name}</h1>
            <p>{project.content}</p>

            <a href="/#" className="projects-content-button">
              Ver Projeto <FaArrowRight />
            </a>
          </div>
          {index % 2 !== 0 ? <img src={projectImage} alt="Project" /> : ''}
        </li>
      ))}
    </ul>
  </Container>
)

export default Projects

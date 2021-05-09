import * as React from 'react'
import { FaSearch } from 'react-icons/fa'
import './styles.scss'

const Home = () => (
  <section className="home">
    <div className="container">
      <h4>Lorem Ipsum is simply dummy</h4>
      <h1>Lorem Ipsum is simply dummy text of the printin</h1>

      <div className="container-input">
        <div>
          <FaSearch color="#555555" size={18} />
          <strong>O que você está procurando?</strong>
        </div>

        <button type="button">Procurar</button>
      </div>
      <div className="previously-researched">
        <span>Pesquisados anteriormente:</span>

        <ul>
          <li>Desenvolvimento</li>
          <li>Design</li>
          <li>Consultoria</li>
        </ul>
      </div>
    </div>
  </section>
)

export default Home

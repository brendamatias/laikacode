import * as React from 'react'
import './styles.scss'

import logoLaikaCode from '../../assets/images/logo.svg'

const links = ['Início', 'Sobre', 'Serviços', 'Projetos']

const Header = () => (
  <nav className="navbar">
    <div className="container">
      <img src={logoLaikaCode} alt="Logo LaikaCode" />
      <ul>
        {links.map((link) => (
          <li>
            <a href="/#">{link}</a>
          </li>
        ))}

        <li>
          <button className="btn-light" type="button">
            Contato
          </button>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header

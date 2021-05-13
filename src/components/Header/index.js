/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'
import './styles.scss'

import { Link } from 'react-scroll'
import logoLaikaCode from '../../assets/images/logo.svg'

const Header = () => {
  const [offset, setOffset] = React.useState(0)
  const links = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'services', label: 'Serviços' },
    { id: 'projects', label: 'Projetos' },
  ]

  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, [])

  return (
    <nav className={`navbar ${offset > 10 ? 'navbar-fixed' : ''}`}>
      <div className="container">
        <img src={logoLaikaCode} alt="Logo LaikaCode" />

        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href="#"
                activeClass="navbar-link__active"
                to={`${link.id}`}
                spy
                smooth
                offset={-101}
                duration={400}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <button className={offset > 10 ? '' : 'btn-light'} type="button">
              Traga seu projeto
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
